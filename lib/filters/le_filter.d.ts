
import {Filter} from './filter';

export interface LessThanEqualsFilterOptions {
    attribute: string;
    value: string;
}

/**
 * The le filter is used to do comparisons and ordering based on the value type. As
 * mentioned elsewhere, by default everything in LDAP and ldapjs is a string, so this
 * filter's matches() would be using lexicographical ordering of strings. If you
 * wanted <= semantics over numeric values, you would need to add some middleware to
 * convert values before comparison (and the value of the filter). Note that the
 * ldapjs schema middleware will do this.
 */
export class LessThanEqualsFilter implements Filter {
    name: 'le';
    attribute: string;
    value: string;
    toBer(ber: any): any;
    matches(value: any): boolean;
    constructor(options: LessThanEqualsFilterOptions);
}
