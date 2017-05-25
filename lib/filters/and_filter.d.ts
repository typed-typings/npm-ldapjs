
import {Filter} from './filter';

export interface AndFilterOptions {
    filters: Filter[];
}

/**
 * The and filter is a complex filter that simply contains "child" filters. The
 * object will have a filters property which is an array of Filter objects. The name
 * property will be and.
 */
export class AndFilter implements Filter {
    filters: Filter[];
    type: "and";
    json: any;
    toString(): string;
    toBer(ber: any): any;
    matches(value: any, strictAttrCase?: boolean): boolean;
    addFilter(filter: Filter): void;
    constructor(options: AndFilterOptions);
}
