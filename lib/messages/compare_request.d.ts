import LDAPMessage = require('./message');
import { DN } from '../dn';

declare class CompareRequest extends LDAPMessage {
    entry: DN;
    attribute: string;
    value: string;
}

export = CompareRequest;
