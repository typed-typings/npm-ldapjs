
import LDAPMessage = require('./message');

declare class SearchEntry extends LDAPMessage {
    type: 'SearchEntry';
    object: { [attribute: string]: any };
    raw: any;
    constructor(options: Object);
}

export = SearchEntry;
