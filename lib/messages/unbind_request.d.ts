import LDAPMessage = require('./message');
import { DN } from '../dn';

declare class UnbindRequest extends LDAPMessage { }

export = UnbindRequest;
