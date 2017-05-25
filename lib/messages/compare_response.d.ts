import LDAPResult = require('./result');

declare class CompareResponse extends LDAPResult {
    end(code?: number | boolean): void;
}

export = CompareResponse;
