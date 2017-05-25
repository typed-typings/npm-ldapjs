import LDAPMessage = require('./message');
import { DN } from '../dn';

declare class ModifyDNRequest extends LDAPMessage {
    entry: DN;
    newRdn: DN;
    deleteOldRdn: boolean;
    newSuperior?: DN;
}

export = ModifyDNRequest;
