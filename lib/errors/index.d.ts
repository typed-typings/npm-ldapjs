
import {LDAPResult} from '../messages/index';

export * from './codes';

export class LDAPError {
    code: number;
    name: string;
    message: string;
    dn: string;
    constructor(message: string, dn?: string, caller?: any);
}

export function getError(res: LDAPResult): LDAPError;

declare class LDAPErrorExtend extends LDAPError {
    constructor(message?: string, dn?: string, caller?: any);
}

export class OperationsError extends LDAPErrorExtend { }
export class ProtocolError extends LDAPErrorExtend { }
export class TimeLimitExceededError extends LDAPErrorExtend { }
export class SizeLimitExceededError extends LDAPErrorExtend { }
export class CompareFalseError extends LDAPErrorExtend { }
export class CompareTrueError extends LDAPErrorExtend { }
export class AuthMethodNotSupportedError extends LDAPErrorExtend { }
export class StrongAuthRequiredError extends LDAPErrorExtend { }
export class ReferralError extends LDAPErrorExtend { }
export class AdminLimitExceededError extends LDAPErrorExtend { }
export class UnavailableCriticalExtensionError extends LDAPErrorExtend { }
export class ConfidentialityRequiredError extends LDAPErrorExtend { }
export class SaslBindInProgressError extends LDAPErrorExtend { }
export class NoSuchAttributeError extends LDAPErrorExtend { }
export class UndefinedAttributeTypeError extends LDAPErrorExtend { }
export class InappropriateMatchingError extends LDAPErrorExtend { }
export class ConstraintViolationError extends LDAPErrorExtend { }
export class AttributeOrValueExistsError extends LDAPErrorExtend { }
export class InvalidAttriubteSyntaxError extends LDAPErrorExtend { }
export class NoSuchObjectError extends LDAPErrorExtend { }
export class AliasProblemError extends LDAPErrorExtend { }
export class InvalidDnSyntaxError extends LDAPErrorExtend { }
export class AliasDerefProblemError extends LDAPErrorExtend { }
export class InappropriateAuthenticationError extends LDAPErrorExtend { }
export class InvalidCredentialsError extends LDAPErrorExtend { }
export class InsufficientAccessRightsError extends LDAPErrorExtend { }
export class BusyError extends LDAPErrorExtend { }
export class UnavailableError extends LDAPErrorExtend { }
export class UnwillingToPerformError extends LDAPErrorExtend { }
export class LoopDetectError extends LDAPErrorExtend { }
export class NamingViolationError extends LDAPErrorExtend { }
export class ObjectclassViolationError extends LDAPErrorExtend { }
export class NotAllowedOnNonLeafError extends LDAPErrorExtend { }
export class NotAllowedOnRdnError extends LDAPErrorExtend { }
export class EntryAlreadyExistsError extends LDAPErrorExtend { }
export class ObjectclassModsProhibitedError extends LDAPErrorExtend { }
export class AffectsMultipleDsasError extends LDAPErrorExtend { }
export class OtherError extends LDAPErrorExtend { }

// Custom application errors
export class ConnectionError extends LDAPErrorExtend { }
export class AbandonedError extends LDAPErrorExtend { }
export class TimeoutError extends LDAPErrorExtend { }
