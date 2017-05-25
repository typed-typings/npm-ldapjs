
import {Filter} from './filter';

export interface OrFilterOptions {
    filters: Filter[];
}

/**
 * The or filter is a complex filter that simply contains "child" filters. The object
 * will have a filters property which is an array of Filter objects. The name
 * property will be or.
 */
export class OrFilter implements Filter {
    type: 'or';
    json: any;
    filters: Filter[];
    constructor(options: OrFilterOptions);
    toBer(ber: any): any;
    /**
     * The matches() method will return true IFF the passed in object matches any of
     * the filters in the filters array.
     */
    matches(value: any, strictAttrCase?: boolean): boolean;
    toString(): string;
    addFilter(filter: Filter): void;
}
