// @flow
import ConsoleLogger from '../ConsoleLogger';

// Mocks
global.console = { log: jest.fn() };

describe('ConsoleLogger', () => {
  test('will call the console', () => {
    ConsoleLogger.log('HELLO');
    expect(console.log).toHaveBeenCalled(); // eslint-disable-line
  });

  test('will call the console with correct data', () => {
    const args = 'Hello';
    ConsoleLogger.log(args);
    expect(console.log).toBeCalledWith(args); // eslint-disable-line
  });
});
