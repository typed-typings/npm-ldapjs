
import {Filter} from './filter';

export interface ApproximateFilterOptions {
    attribute: string;
    value: string;
}

/**
 * The approximate filter is used to check "approximate" matching of attribute/value
 * assertions. This object will have an attribute and value property, and the name
 * proerty will be approx. As a side point, this is a useless filter. It's really
 * only here if you have some whacky client that's sending this. It just does an
 * exact match (which is what ActiveDirectory does too). The string syntax for an
 * equality filter is (attr~=value).
 */
export class ApproximateFilter implements Filter {
    type: 'approx';
    attribute: string;
    value: string;
    constructor(options: ApproximateFilterOptions);
    toBer(ber: any): any;
    parse(ber: any): true;
    json(): any;
    toString(): string;
    matches(): any;
    /**
     * The matches() method will return true IFF the passed in object has a key
     * matching attribute and a value exactly matching value.
     */
    matches(value: any, strictAttrCase?: boolean): boolean;
}
