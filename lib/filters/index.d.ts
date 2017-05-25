
import { Filter } from './filter';

/**
 * Parses an RFC2254 filter string into an ldapjs object(s). If the filter is
 * "complex", it will be a "tree" of objects.
 */
export function parseString(str: string): Filter;

export function parse(ber: any): Filter;

export function isFilter(filter: any): boolean;

export * from './and_filter';
export * from './approx_filter';
export * from './equality_filter';
export * from './ext_filter';
export * from './filter';
export * from './ge_filter';
export * from './le_filter';
export * from './not_filter';
export * from './or_filter';
export * from './presence_filter';
export * from './substring_filter';
