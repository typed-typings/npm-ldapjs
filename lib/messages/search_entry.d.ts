
import LDAPMessage = require('./message');

declare class SearchEntry extends LDAPMessage {
    type: 'SearchEntry';
    object: { [attribute: string]: any };
    raw: any;
    objectName: string;
    constructor(options: Object);
}

export = SearchEntry;
