
import {Filter} from './filter';

export interface EqualityFilterOptions {
    attribute: string;
    value: string;
}

/**
 * The equality filter is used to check exact matching of attribute/value assertions.
 * This object will have an attribute and value property, and the name proerty will
 * be equal. The string syntax for an equality filter is (attr=value). The matches()
 * method will return true IFF the passed in object has a key matching attribute and
 * a value matching value.
 *
 * Equality matching uses "strict" type JavaScript comparison, and by default
 * everything in ldapjs (and LDAP) is a UTF-8 string. If you want comparison of
 * numbers, or something else, you'll need to use a middleware interceptor that
 * transforms values of objects.
 */
export class EqualityFilter implements Filter {
    name: 'equal';
    attribute: string;
    value: string;
    toBer(ber: any): any;
    matches(value: any): boolean;
    constructor(options: EqualityFilterOptions);
}
