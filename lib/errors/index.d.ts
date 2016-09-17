
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

export class OperationsError extends LDAPError { }
export class ProtocolError extends LDAPError { }
export class TimeLimitExceededError extends LDAPError { }
export class SizeLimitExceededError extends LDAPError { }
export class CompareFalseError extends LDAPError { }
export class CompareTrueError extends LDAPError { }
export class AuthMethodNotSupportedError extends LDAPError { }
export class StrongAuthRequiredError extends LDAPError { }
export class ReferralError extends LDAPError { }
export class AdminLimitExceededError extends LDAPError { }
export class UnavailableCriticalExtensionError extends LDAPError { }
export class ConfidentialityRequiredError extends LDAPError { }
export class SaslBindInProgressError extends LDAPError { }
export class NoSuchAttributeError extends LDAPError { }
export class UndefinedAttributeTypeError extends LDAPError { }
export class InappropriateMatchingError extends LDAPError { }
export class ConstraintViolationError extends LDAPError { }
export class AttributeOrValueExistsError extends LDAPError { }
export class InvalidAttriubteSyntaxError extends LDAPError { }
export class NoSuchObjectError extends LDAPError { }
export class AliasProblemError extends LDAPError { }
export class InvalidDnSyntaxError extends LDAPError { }
export class AliasDerefProblemError extends LDAPError { }
export class InappropriateAuthenticationError extends LDAPError { }
export class InvalidCredentialsError extends LDAPError { }
export class InsufficientAccessRightsError extends LDAPError { }
export class BusyError extends LDAPError { }
export class UnavailableError extends LDAPError { }
export class UnwillingToPerformError extends LDAPError { }
export class LoopDetectError extends LDAPError { }
export class NamingViolationError extends LDAPError { }
export class ObjectclassViolationError extends LDAPError { }
export class NotAllowedOnNonLeafError extends LDAPError { }
export class NotAllowedOnRdnError extends LDAPError { }
export class EntryAlreadyExistsError extends LDAPError { }
export class ObjectclassModsProhibitedError extends LDAPError { }
export class AffectsMultipleDsasError extends LDAPError { }
export class OtherError extends LDAPError { }

// Custom application errors
export class ConnectionError extends LDAPError { }
export class AbandonedError extends LDAPError { }
export class TimeoutError extends LDAPError { }
