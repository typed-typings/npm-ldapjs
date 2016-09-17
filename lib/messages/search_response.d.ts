
import LDAPResult = require('./result');

declare class SearchResponse extends LDAPResult {

    /**
     * Allows you to send a SearchEntry object. You do not need to explicitly pass in
     * a SearchEntry object, and can instead just send a plain JavaScript object that
     * matches the format used from AddRequest.toObject().
     */
    send(entry: Object): void;
}

export = SearchResponse;
