// @flow
const NoLogger = require('../NoLogger');

// Mocks
global.console = { log: jest.fn() };

describe('No Logger', () => {
  test('will call the console', () => {
    NoLogger.log('HELLO');
    expect(console.log).toHaveBeenCalledTimes(0) ; // eslint-disable-line
  });
});
