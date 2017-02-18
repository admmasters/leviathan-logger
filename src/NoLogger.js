// @flow
class NoLogger {
  log(...data: Array<any>) {  // eslint-disable-line
  }
}

module.exports = new NoLogger();
