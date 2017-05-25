import LDAPMessage = require('./message');

declare class ExtendedRequest extends LDAPMessage {
    name: string;
    value?: string;
}

export = ExtendedRequest;
