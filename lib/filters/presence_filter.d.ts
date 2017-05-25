
import {Filter} from './filter';

export interface PresenceFilterOptions {
    attribute: string;
}

/**
 * The presence filter is used to check if an object has an attribute at all, with
 * any value. This object will have an attribute property, and the name property will
 * be present. The string syntax for a presence filter is (attr=*). The matches()
 * method will return true IFF the passed in object has a key matching attribute.
 */
export class PresenceFilter implements Filter {
    type: "present";
    json: any;
    attribute: string;
    toBer(ber: any): any;
    matches(value: any, strictAttrCase?: boolean): boolean;
    parse(ber: any): true;
    toString(): string;
    constructor(options: PresenceFilterOptions);
}
