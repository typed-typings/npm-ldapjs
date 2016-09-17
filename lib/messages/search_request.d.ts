
import LDAPMessage = require('./message');
import {DN} from '../dn';
import {Filter} from '../filters/index';

declare class SearchRequest extends LDAPMessage {

    /**
     * The DN the client is attempting to start the search at (equivalent to dn).
     */
    baseObject: DN;

    scope: 'base' | 'one' | 'sub';

    /**
     * An integer (defined in the LDAP protocol). Defaults to '0' (meaning never
     * deref).
     */
    derefAliases: number;

    /**
     * The number of entries to return. Defaults to '0' (unlimited). ldapjs doesn't
     * currently automatically enforce this, but probably will at some point.
     */
    sizeLimit: number;

    /**
     * Maximum amount of time the server should take in sending search entries. Defaults to '0' (unlimited).
     */
    timeLimit: number;

    /**
     * Whether to return only the names of attributes, and not the values. Defaults
     * to 'false'. ldapjs will take care of this for you.
     */
    typesOnly: boolean;

    /**
     * The filter object that the client requested. Notably this has a matches()
     * method on it that you can leverage. For an example of introspecting a filter,
     * take a look at the ldapjs-riak source.
     */
    filter: Filter;

    /**
     * An optional list of attributes to restrict the returned result sets to. ldapjs
     * will automatically handle this for you.
     */
    attributes: string[];
}

export = SearchRequest;
