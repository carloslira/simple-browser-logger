import SimpleBrowserLogger from './logger';

export * from './constants';
export type * from './types';

export { SimpleBrowserLogger };

const logger = new SimpleBrowserLogger();

export default logger;
