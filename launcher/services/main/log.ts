export enum LogLevel {
  Trace,
  Debug,
  Info,
  Warning,
  Error,
  Critical,
}

export const DEFAULT_LOG_LEVEL: LogLevel = LogLevel.Info;

export interface ILogService {
  trace(message: string | Error): void;
  debug(message: string | Error): void;
  info(message: string | Error): void;
  warn(message: string | Error): void;
  error(message: string | Error): void;
  critical(message: string | Error): void;
}

export abstract class AbstractLogService {
  private level: LogLevel = DEFAULT_LOG_LEVEL;

  setLevel(level: LogLevel): void {
    if (this.level !== level) {
      this.level = level;
    }
  }

  getLevel(): LogLevel {
    return this.level;
  }
}

export class LogService extends AbstractLogService implements ILogService {
  constructor(logLevel: LogLevel = DEFAULT_LOG_LEVEL) {
    super();
    this.setLevel(logLevel);
  }

  trace(message: string): void {}

  debug(message: string): void {}

  info(message: string): void {}

  warn(message: string): void {}

  error(message: string): void {}

  critical(message: string): void {}
}
