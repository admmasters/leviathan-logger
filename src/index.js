// @flow
import type { Logger } from './interfaces';

const ConsoleLogger: Logger = require('./ConsoleLogger');
const NoLogger: Logger = require('./NoLogger');

exports.ConsoleLogger = ConsoleLogger;
exports.NoLogger = NoLogger;
