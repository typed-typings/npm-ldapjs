import LDAPMessage = require('./message');
import { DN } from '../dn';
import Change = require('../change');

declare class ModifyRequest extends LDAPMessage {
    object: DN;
    changes: Change[];
}

export = ModifyRequest;
