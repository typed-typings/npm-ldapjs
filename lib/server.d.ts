
import {
    SearchRequest,
    SearchResponse
} from './messages/index';

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

    bind(dn: string, handler: (req: any, res: any, next: Server.NextFunction) => any): this;
    add(dn: string, handler: (req: any, res: any, next: Server.NextFunction) => any): this;
    search(dn: string, handler: (req: SearchRequest, res: SearchResponse, next: Server.NextFunction) => any): this;
    modify(dn: string, handler: (req: any, res: any, next: Server.NextFunction) => any): this;
    del(dn: string, handler: (req: any, res: any, next: Server.NextFunction) => any): this;
    compare(dn: string, handler: (req: any, res: any, next: Server.NextFunction) => any): this;
    modifyDN(dn: string, handler: (req: any, res: any, next: Server.NextFunction) => any): this;
    exop(oid: string, handler: (req: any, res: any, next: Server.NextFunction) => any): this;
    unbind(handler: (req: any, res: any, next: Server.NextFunction) => any): this;
}

export = Server;
