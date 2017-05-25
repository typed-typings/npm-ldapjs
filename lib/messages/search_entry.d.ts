
import LDAPMessage = require('./message');
import Attribute = require('../attribute');

declare class SearchEntry extends LDAPMessage {
    type: 'SearchEntry';
    object: { [attribute: string]: any };
    raw: any;
    objectName: string;
    attributes: Attribute[];
    setAttributes(obj: Attribute[]): void;
    setAttributes(obj: { [key: string]: any }): void;
    addAttribute(attr: Attribute): void;
    toObject(): any;

    constructor(options: Object);
}

export = SearchEntry;
