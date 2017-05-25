import { Filter } from './filter';

export interface ExtensibleFilterOptions {
    rule?: string;
    matchType?: string;
    attribute?: string;
    value?: string;
}

/**
 * THIS IS A STUB!
 *
 * ldapjs does not support server side extensible matching. This
 * class exists only for the client to send them.
 */
export class ExtensibleFilter implements Filter {
    type: 'ext';
    json: any;
    matchingRule: string;
    matchValue: string;
    attribute: string;
    toBer(ber: any): any;
    toString(): string;
    matches(): any;
    parse(ber: any): true;


    constructor(options: ExtensibleFilterOptions);
}
