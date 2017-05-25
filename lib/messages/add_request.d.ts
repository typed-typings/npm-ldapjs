import LDAPMessage = require('./message');
import { DN } from '../dn';
import Attribute = require('../attribute');

declare class AddRequest extends LDAPMessage {
    entry: DN;
    attributes: Attribute[];
    toObject(): any;
}

export = AddRequest;
