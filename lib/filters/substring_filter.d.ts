
import {Filter} from './filter';

export interface SubstringFilterOptions {
    attribute: string;
    initial?: string;
    any?: string[];
    final?: string;
}

/**
 * The substring filter is used to do wildcard matching of a string value. This
 * object will have an attribute property and then it will have an initial property,
 * which is the prefix match, an any which will be an array of strings that are to be
 * found somewhere in the target string, and a final property, which will be the
 * suffix match of the string. any and final are both optional. The name property
 * will be substring.
 */
export class SubstringFilter implements Filter {
    toBer(ber: any): any;
    matches(value: any): boolean;
    constructor(options: SubstringFilterOptions);
}
