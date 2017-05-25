
export interface Filter {
    type?: string;
    toBer(ber: any): any;
    matches(value: any): boolean;
}

export function isFilter(filter: any): filter is Filter;
