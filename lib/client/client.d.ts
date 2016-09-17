
import {EventEmitter} from 'events';
import {TlsOptions} from 'tls';
import {Control} from '../controls/index';
import {Filter} from '../filters/index';
import {LDAPResult} from '../messages/index';
import Change = require('../change');

declare namespace Client {

    export interface ClientOptions {

        /**
         * A valid LDAP URL (proto/host/port only)
         */
        url?: string;

        /**
         * Socket path if using AF_UNIX sockets
         */
        socketPath?: string;

        /**
         * Bunyan logger instance (Default: built-in instance)
         */
        log?: any;

        /**
         * Milliseconds client should let operations live for before timing out (Default: Infinity)
         */
        timeout?: number;

        /**
         * Milliseconds client should wait before timing out on TCP connections (Default: OS default)
         */
        connectTimeout?: number;

        /**
         * Additional options passed to TLS connection layer when connecting via ldaps:// (See: The TLS docs for node.js)
         */
        tlsOptions?: TlsOptions;

        /**
         * Milliseconds after last activity before client emits idle event
         */
        idleTimeout?: number;

        /**
         * Force strict DN parsing for client methods (Default is true)
         */
        strictDN?: boolean;
    }

    export interface SearchOptions {
        /**
         * One of base, one, or sub. Defaults to base.
         */
        scope?: 'base' | 'one' | 'sub';

        /**
         * A string version of an LDAP filter (see below), or a programatically
         * constructed Filter object. Defaults to (objectclass=*).
         */
        filter?: string | Filter;

        /**
         * attributes to select and return (if these are set, the server will return
         * only these attributes). Defaults to the empty set, which means all
         * attributes. You can provide a string if you want a single attribute or an
         * array of string for one or many.
         */
        attributes?: string | string[];
        /**
         * boolean on whether you want the server to only return the names of the
         * attributes, and not their values. Borderline useless. Defaults to false.
         */
        attrsOnly?: boolean;

        /**
         * the maximum number of entries to return. Defaults to 0 (unlimited).
         */
        sizeLimit?: number;

        /**
         * the maximum amount of time the server should take in responding, in seconds. Defaults to 10. Lots of servers will ignore this.
         */
        timeLimit?: number;

        /**
         * enable and/or configure automatic result paging
         */
        paging?: boolean;
    }
}

declare class Client extends EventEmitter {

    /**
     * Constructs a new client.
     *
     * The options object is required, and must contain either a URL (string) or a
     * socketPath (string); the socketPath is only if you want to talk to an LDAP
     * server over a Unix Domain Socket.  Additionally, you can pass in a bunyan
     * option that is the result of `new Logger()`, presumably after you've
     * configured it.
     *
     * @param options must have either url or socketPath.
     * @throws {TypeError} on bad input.
     */
    constructor(options: Client.ClientOptions);

    /**
     * Performs a simple authentication against the server.
     *
     * @param {String} name the DN to bind as.
     * @param {String} credentials the userPassword associated with name.
     * @param {Control} controls (optional) either a Control or [Control].
     * @param {Function} callback of the form f(err, res).
     * @throws {TypeError} on invalid input.
     */
    bind(dn: string, password: string, callback: (err?: any, res?: LDAPResult) => any): any;
    bind(dn: string, password: string, controls: Control | Control[], callback: (err?: any, res?: LDAPResult) => any): any;

    /**
     * Adds an entry to the LDAP server.
     *
     * Entry can be either [Attribute] or a plain JS object where the
     * values are either a plain value or an array of values.  Any value (that's
     * not an array) will get converted to a string, so keep that in mind.
     *
     * @param {String} name the DN of the entry to add.
     * @param {Object} entry an array of Attributes to be added or a JS object.
     * @param {Control} controls (optional) either a Control or [Control].
     * @param {Function} callback of the form f(err, res).
     * @throws {TypeError} on invalid input.
     */
    add(dn: string, entry: { [attribute: string]: any }, callback: (err?: any, res?: LDAPResult) => any): any;
    add(dn: string, entry: { [attribute: string]: any }, controls: Control | Control[], callback: (err?: any, res?: LDAPResult) => any): any;

    /**
     * Compares an attribute/value pair with an entry on the LDAP server.
     *
     * @param {String} name the DN of the entry to compare attributes with.
     * @param {String} attribute name of an attribute to check.
     * @param {String} value value of an attribute to check.
     * @param {Control} controls (optional) either a Control or [Control].
     * @param {Function} callback of the form f(err, boolean, res).
     * @throws {TypeError} on invalid input.
     */
    compare(dn: string, attribute: string, value: string, callback: (err?: any, matched?: boolean, res?: LDAPResult) => any): any;
    compare(dn: string, attribute: string, value: string, controls: Control | Control[], callback: (err?: any, matched?: boolean, res?: LDAPResult) => any): any;

    /**
     * Deletes an entry from the LDAP server.
     *
     * @param {String} name the DN of the entry to delete.
     * @param {Control} controls (optional) either a Control or [Control].
     * @param {Function} callback of the form f(err, res).
     * @throws {TypeError} on invalid input.
     */
    del(name: string, callback: (err?: any, res?: LDAPResult) => any): any;
    del(name: string, controls: Control | Control[], callback: (err?: any, res?: LDAPResult) => any): any;

    /**
     * Performs an extended operation on the LDAP server.
     *
     * Pretty much none of the LDAP extended operations return an OID
     * (responseName), so I just don't bother giving it back in the callback.
     * It's on the third param in `res` if you need it.
     *
     * @param {String} name the OID of the extended operation to perform.
     * @param {String} value value to pass in for this operation.
     * @param {Control} controls (optional) either a Control or [Control].
     * @param {Function} callback of the form f(err, value, res).
     * @throws {TypeError} on invalid input.
     */
    exop(name: string, value: string, callback: (err?: any, value?: any, res?: LDAPResult) => any): any;
    exop(name: string, value: string, controls: Control | Control[], callback: (err?: any, value?: any, res?: LDAPResult) => any): any;

    /**
     * Performs an LDAP modify against the server.
     *
     * @param {String} name the DN of the entry to modify.
     * @param {Change} change update to perform (can be [Change]).
     * @param {Control} controls (optional) either a Control or [Control].
     * @param {Function} callback of the form f(err, res).
     * @throws {TypeError} on invalid input.
     */
    modify(name: string, change: Change | Change[], callback: (err?: any, res?: LDAPResult) => any): any;
    modify(name: string, change: Change | Change[], controls: Control | Control[], callback: (err?: any, res?: LDAPResult) => any): any;

    /**
     * Performs an LDAP modifyDN against the server.
     *
     * This does not allow you to keep the old DN, as while the LDAP protocol
     * has a facility for that, it's stupid. Just Search/Add.
     *
     * This will automatically deal with "new superior" logic.
     *
     * @param {String} name the DN of the entry to modify.
     * @param {String} newName the new DN to move this entry to.
     * @param {Control} controls (optional) either a Control or [Control].
     * @param {Function} callback of the form f(err, res).
     * @throws {TypeError} on invalid input.
     */
    modifyDN(name: string, newName: string, callback: (err?: any, res?: LDAPResult) => any): any;
    modifyDN(name: string, newName: string, controls: Control | Control[], callback: (err?: any, res?: LDAPResult) => any): any;

    /**
     * Performs an LDAP search against the server.
     *
     * Note that the defaults for options are a 'base' search, if that's what you
     * want you can just pass in a string for options and it will be treated as the
     * search filter.  Also, you can either pass in programatic Filter objects or a
     * filter string as the filter option.
     *
     * Responses from the search method are an EventEmitter where you will get a
     * notification for each searchEntry that comes back from the server. You will
     * additionally be able to listen for a searchReference, error and end event.
     * Note that the error event will only be for client/TCP errors, not LDAP error
     * codes like the other APIs. You'll want to check the LDAP status code (likely
     * for 0) on the end event to assert success. LDAP search results can give you a
     * lot of status codes, such as time or size exceeded, busy, inappropriate
     * matching, etc., which is why this method doesn't try to wrap up the code
     * matching.
     *
     * @param {String} base the DN in the tree to start searching at.
     * @param {Control} controls (optional) either a Control or [Control].
     * @param {Function} callback of the form f(err, res).
     * @throws {TypeError} on invalid input.
     */
    search(base: string, options: Client.SearchOptions, callback: (err?: any, res?: EventEmitter) => any): any;
    search(base: string, options: Client.SearchOptions, controls: Control | Control[], callback: (err?: any, res?: EventEmitter) => any): any;

    /**
     * Unbinds this client from the LDAP server.
     *
     * Note that unbind does not have a response, so this callback is actually
     * optional; either way, the client is disconnected.
     *
     * @param {Function} callback of the form f(err).
     * @throws {TypeError} if you pass in callback as not a function.
     */
    unbind(callback?: (err?: any) => any): any;

    /**
     * Attempt to secure connection with StartTLS.
     */
    starttls(options: TlsOptions, callback: (err?: any) => any): any;
    starttls(options: TlsOptions, controls: Control | Control[], callback: (err?: any) => any): any;

    /**
     * Initiate LDAP connection.
     */
    connect(): any;

    /**
     * Disconnect from the LDAP server and do not allow reconnection.
     *
     * If the client is instantiated with proper reconnection options, it's
     * possible to initiate new requests after a call to unbind since the client
     * will attempt to reconnect in order to fulfill the request.
     *
     * Calling destroy will prevent any further reconnection from occurring.
     *
     * @param {Object} err (Optional) error that was cause of client destruction
     */
    destroy(err: any): any;
}

export = Client;
