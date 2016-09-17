
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
    name: 'and';
    filters: Filter[];
    toBer(ber: any): any;
    matches(value: any): boolean;
    constructor(options: AndFilterOptions);
}
