
export interface Filter {
    toBer(ber: any): any;
    matches(value: any): boolean;
}

export function isFilter(filter: any): filter is Filter;
