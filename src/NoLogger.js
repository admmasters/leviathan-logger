// @flow
class NoLogger {
  log(...data: Array<any>) {  // eslint-disable-line
  }
}

export default new NoLogger();
