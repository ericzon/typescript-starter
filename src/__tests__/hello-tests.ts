import HelloClass from '../hello';

const mockLib = require('jest-mock-random');

describe('Hello tests', () => {
  let helloInstance: HelloClass;

  beforeEach(() => {
    helloInstance = new HelloClass();
  });
  it('should say hello with date', () => {
    const mockedDate = new Date(1595916364428);

    const spy = jest.spyOn(global, 'Date').mockImplementation(() => mockedDate);
    const response = helloInstance.sayHello();

    expect(response).toBe(`Hello on ${mockedDate} !`);

    spy.mockRestore();
  });

  it('should return a result of 120 given an input of 5', () => {
    expect(HelloClass.fact(5)).toBe(120);
  });

  mockLib.mockRandomForEach([0.1, 0.2, 0.3]);

  it('should return a random weather each time', () => {
    const weatherOptions = ['sunny', 'rainy', undefined];
    weatherOptions.forEach((option) => {
      expect(HelloClass.getWeather()).toBe(option);
    });
  });

  mockLib.resetMockRandom();
});
