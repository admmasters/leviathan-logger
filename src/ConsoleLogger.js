// @flow
import type { Logger } from './interfaces';

class ConsoleLogger implements Logger {
  log(...data: Array<any>) {  // eslint-disable-line
    console.log(...data);  // eslint-disable-line
  }
}

export default new ConsoleLogger();
