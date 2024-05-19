import {
  LogLevel,
} from './constants';

export type Colors = { [key in LogLevel]: string; } & {
  prefix: string;
};
