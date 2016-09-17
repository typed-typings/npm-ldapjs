
import {Filter} from './filter';

export interface NotFilterOptions {
    filters: Filter[];
}

/**
 * The not filter is a complex filter that contains a single "child" filter. The
 * object will have a filter property which is an instance of a Filter object. The
 * name property will be not.
 */
export class NotFilter implements Filter {
    name: 'not';
    filters: Filter[];
    constructor(options: NotFilterOptions);
    toBer(ber: any): any;
    /**
     * The matches() method will return true IFF the passed in object does not match
     * the filter in the filter property.
     */
    matches(value: any): boolean;
}
