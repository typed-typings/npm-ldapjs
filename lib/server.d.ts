
import {
    LDAPMessage,
    LDAPResult,
    AddRequest,
    AddResponse,
    CompareRequest,
    CompareResponse,
    DeleteRequest,
    DeleteResponse,
    ExtendedRequest,
    ExtendedResponse,
    ModifyRequest,
    ModifyResponse,
    ModifyDNRequest,
    ModifyDNResponse,
    BindRequest,
    BindResponse,
    UnbindRequest,
    UnbindResponse,
    SearchRequest,
    SearchResponse
} from './messages/index';

import { DN } from './dn';
import * as net from 'net';

declare namespace Server {

    export interface ServerOptions {

        /**
         * You can optionally pass in a bunyan instance the client will use to acquire a logger.
         */
        log?: any;

        /**
         * A PEM-encoded X.509 certificate; will cause this server to run in TLS mode.
         */
        certificate?: any;

        /**
         * A PEM-encoded private key that corresponds to certificate for SSL.
         */
        key?: any;
    }

    export interface NextFunction {
        (err?: any): void;
    }

    // export type NextHandler = Server.NextFunction[] | NextFunction
    export type NextHandler = NextFunction

    export interface LDAP {
        id: string;
        config: ServerOptions;
        bindDN: DN;
    }

    export interface LDAPSocket extends net.Socket {
        ldap: LDAP;
    }

    export type MessageHandler = (req: LDAPMessage, res: LDAPResult, next: NextHandler) => void;

    export type BindHandler = (req: BindRequest, res: BindResponse, next: NextHandler) => void;

    export type AddHandler = (req: AddRequest, res: AddResponse, next: NextHandler) => void;

    export type CompareHandler = (req: CompareRequest, res: CompareResponse, next: NextHandler) => void;

    export type DelHandler = (req: DeleteRequest, res: DeleteResponse, next: NextHandler) => void;

    export type ExopHandler = (req: ExtendedRequest, res: ExtendedResponse, next: NextHandler) => void;

    export type ModifyHandler = (req: ModifyRequest, res: ModifyResponse, next: NextHandler) => void;

    export type ModifyDnHandler = (req: ModifyDNRequest, res: ModifyDNResponse, next: NextHandler) => void;

    export type UnbindHandler = (req: UnbindRequest, res: UnbindResponse, next: NextHandler) => void;

    export type SearchHandler = (req: SearchRequest, res: SearchResponse, next: NextHandler) => void;
}

declare class Server {
    /**
     * Set this property to reject connections when the server's connection count gets high.
     */
    maxConnections: number;

    /**
     * The number of concurrent connections on the server. (getter only)
     */
    connections: number;

    /**
     * Returns the fully qualified URL this server is listening on. For example:
     * ldaps://10.1.2.3:1636. If you haven't yet called listen, it will always return
     * ldap://localhost:389.
     */
    url: string;

    constructor(options: Server.ServerOptions);

    /**
     * Begin accepting connections on the specified port and host. If the host is
     * omitted, the server will accept connections directed to any IPv4 address
     * (INADDR_ANY). This function is asynchronous. The last parameter callback will
     * be called when the server has been bound.
     */
    listen(port: number, callback?: Function): void;
    listen(port: number, host: string, callback?: Function): void;

    /**
     * Start a UNIX socket server listening for connections on the given path. This
     * function is asynchronous. The last parameter callback will be called when the
     * server has been bound.
     */
    listen(path: string, callback?: Function): void;

    /**
     * Start a server listening for connections on the given file descriptor. This
     * file descriptor must have already had the bind(2) and listen(2) system calls
     * invoked on it. Additionally, it must be set non-blocking; try fcntl(fd,
     * F_SETFL, O_NONBLOCK).
     */
    listenFD(fd: any): void;

    use(callback: Server.MessageHandler): void;

    after(callback: Server.MessageHandler): void;

    bind(dn: string, ...handlers: Server.BindHandler[]): this;
    add(dn: string, ...handlers: Server.AddHandler[]): this;
    search(dn: string, ...handlers: Server.SearchHandler[]): this;
    modify(dn: string, ...handlers: Server.ModifyHandler[]): this;
    del(dn: string, ...handlers: Server.DelHandler[]): this;
    compare(dn: string, ...handlers: Server.CompareHandler[]): this;
    modifyDN(dn: string, ...handlers: Server.ModifyDnHandler[]): this;
    exop(oid: string, ...handlers: Server.ExopHandler[]): this;
    unbind(handler: Server.UnbindHandler): this;
}

export = Server;
