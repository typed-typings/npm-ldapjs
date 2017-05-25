import LDAPResult = require('./result');

declare class ExtendedResponse extends LDAPResult {
    name: string;
    value: string;
}

export = ExtendedResponse;
