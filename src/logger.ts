import {
  LogLevel,
} from './constants';

import {
  type Colors,
} from './types';

const defaultColors: Colors = {
  prefix: '#EDEDED',
  debug: '#A4ABB6',
  info: '#2CCCFF',
  warn: '#FFB302',
  error: '#FE3839',
};

class Logger {
  private _colors: Colors;
  private _prefix?: string;

  constructor(prefix?: string, colors = defaultColors) {
    this._prefix = prefix;
    this._colors = colors;
  }

  log(level: LogLevel, ...data: unknown[]) {
    console[level](`%c${this._prefix ? `[${this._prefix}]` : ''}%c[${level.toUpperCase()}]`, `color: ${this._colors.prefix}`, `color: ${this._colors[level]}`, ...data);
  }

  debug(...data: unknown[]) {
    this.log(LogLevel.Debug, ...data);
  }

  info(...data: unknown[]) {
    this.log(LogLevel.Info, ...data);
  }

  warn(...data: unknown[]) {
    this.log(LogLevel.Warn, ...data);
  }

  error(...data: unknown[]) {
    this.log(LogLevel.Error, ...data);
  }
}

export default Logger;
