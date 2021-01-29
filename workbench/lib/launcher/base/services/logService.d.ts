export declare enum LogLevel {
    Trace = 0,
    Debug = 1,
    Info = 2,
    Warning = 3,
    Error = 4,
    Critical = 5
}
export declare const DEFAULT_LOG_LEVEL: LogLevel;
export interface ILogService {
    trace(message: string | Error): void;
    debug(message: string | Error): void;
    info(message: string | Error): void;
    warn(message: string | Error): void;
    error(message: string | Error): void;
    critical(message: string | Error): void;
}
export declare abstract class AbstractLogService {
    private level;
    setLevel(level: LogLevel): void;
    getLevel(): LogLevel;
}
export declare class ConsoleLogService extends AbstractLogService implements ILogService {
    constructor(logLevel?: LogLevel);
    trace(message: string): void;
    debug(message: string): void;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    critical(message: string): void;
}
