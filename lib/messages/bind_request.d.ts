import LDAPMessage = require('./message');
import { DN } from '../dn';

declare class BindRequest extends LDAPMessage {
    version: string;
    name: DN;
    authentication: string;
    credentials: any;

}

export = BindRequest;
