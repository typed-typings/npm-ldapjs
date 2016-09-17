
export interface RDNAttribute {
    name: string;
    order: number;
    value: string;
}

export class RDN {
    attrs: { [attribute: string]: RDNAttribute };
    constructor(obj: Object);
}

/**
 * Preservation Options use data recorded during parsing to preserve details of the
 * original DN
 */
export interface FormatPreservationOptions {

    /**
     * Order of multi-value RDNs.
     */
    keepOrder?: boolean;

    /**
     * RDN values which were quoted will remain so.
     */
    keepQuote?: boolean;

    /**
     * Leading/trailing spaces will be output.
     */
    keepSpace?: boolean;

    /**
     * Parsed attribute name will be output instead of lowercased version.
     */
    keepCase?: boolean;
}

/**
 * Modification options alter string formatting defaults
 */
export interface FormatModificationOptions {

    /**
     * RDN names will be uppercased instead of lowercased.
     */
    upperName?: boolean;

    /**
     * Disable trailing space after RDN separators
     */
    skipSpace?: boolean;
}

export interface FormatOptions extends FormatPreservationOptions, FormatModificationOptions { }

/**
 * The DN object is largely what you'll be interacting with, since all the server
 * APIs are setup to give you a DN object.
 */
export class DN {

    rdns: RDN[];

    constructor(rdns: Object);
    /**
     * Returns a boolean indicating whether 'this' is a child of the passed in dn.
     * The dn argument can be either a string or a DN.
     */
    childOf(dn: string | DN): boolean;

    parentOf(dn: string | DN): boolean;

    equals(dn: string | DN): boolean;

    parent(): DN;

    /**
     * Convert a DN object to string according to specified formatting options. These
     * options are divided into two types. Preservation Options use data recorded
     * during parsing to preserve details of the original DN. Modification options
     * alter string formatting defaults. Preservation options always take precedence
     * over Modification Options.
     */
    format(options: FormatOptions): string;

    /**
     * Sets the default options for string formatting when toString is called. It
     * accepts the same parameters as format.
     */
    setFormat(options: FormatOptions): void;

    /**
     * Returns the string representation of this.
     */
    toString(): string;
}

/**
 * The parseDN API converts a string representation of a DN into an ldapjs DN object;
 * in most cases this will be handled for you under the covers of the ldapjs
 * framework, but if you need it, it's there.
 */
export function parse(name: string): DN;
