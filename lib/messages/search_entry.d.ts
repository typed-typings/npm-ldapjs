
import LDAPMessage = require('./message');

declare class SearchEntry extends LDAPMessage {
    type: 'SearchEntry';
    object: Object;
    raw: any;
    constructor(options: Object);
}

export = SearchEntry;
