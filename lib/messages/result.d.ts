
import LDAPMessage = require('./message');

declare class LDAPResult extends LDAPMessage {
    /**
     * All response objects will have an end method on them. By default, calling
     * res.end() with no arguments will return SUCCESS (0x00) to the client (with the
     * exception of compare which will return COMPARE_TRUE (0x06)). You can pass in a
     * status code to the end() method to return an alternate status code.
     */
    end(): void;
}

export = LDAPResult;
