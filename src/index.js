// @flow
import { Logger } from './interfaces';

import ConsoleLogger from './ConsoleLogger';
import NoLogger from './NoLogger';

type LoggerDictionary = {
  [value: string]: Logger
};

const Loggers: LoggerDictionary = {
  ConsoleLogger,
  NoLogger,
};

export default Loggers;
