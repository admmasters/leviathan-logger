// @flow
export interface Logger {
  +log: (...data: Array<any>) => any
}
