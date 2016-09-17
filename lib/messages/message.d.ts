
import {Socket} from 'net';
import {Control} from '../controls/index';
import {DN} from '../dn';

declare class LDAPMessage {

    /**
     * All request objects have the dn getter on it, which is "context-sensitive" and
     * returns the point in the tree that the operation wants to operate on. The LDAP
     * protocol itself sadly doesn't define operations this way, and has a unique
     * name for just about every op. So, ldapjs calls it dn. The DN object itself is
     * documented at DN.
     */
    dn: DN;

    /**
     * The most important property to pay attention to is the bindDN property which
     * will be an instance of an ldap.DN object. This is what the client
     * authenticated as on this connection. If the client didn't bind, then a DN
     * object will be there defaulted to cn=anonymous.
     */
    bindDN: DN;

    /**
     * All requests have an optional array of Control objects. Control will have the
     * properties type (string), criticality (boolean), and optionally, a string
     * value.
     */
    controls: Control[];

    /**
     * The most important property to pay attention to is the bindDN property which
     * will be an instance of an ldap.DN object. This is what the client
     * authenticated as on this connection. If the client didn't bind, then a DN
     * object will be there defaulted to cn=anonymous.
     */
    logId: any;

    type: string;

    /**
     * All request objects will have a connection object, which is the net.Socket
     * associated to this request. Off the connection object is an ldap object.
     */
    connection: Socket;

    toString(): string;
    parse(ber: any): boolean;
    toBer(): any;
}

export = LDAPMessage;
