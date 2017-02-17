// @flow
import type { Logger } from './interfaces';

class NoLogger implements Logger {
  log(...data: Array<any>) {  // eslint-disable-line
  }
}

module.exports = new NoLogger();
