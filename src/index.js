// @flow
import type { Logger } from './interfaces';

const ConsoleLogger = require('./ConsoleLogger');
const NoLogger = require('./NoLogger');

type LoggerDictionary = {
  [value: string]: Logger
};

const Loggers: LoggerDictionary = {
  ConsoleLogger,
  NoLogger,
};

module.exports = Loggers;
