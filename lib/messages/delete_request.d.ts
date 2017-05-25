import LDAPMessage = require('./message');
import { DN } from '../dn';

declare class DeleteRequest extends LDAPMessage {
    entry: DN;
}

export = DeleteRequest;
