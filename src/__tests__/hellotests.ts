import HelloClass from '../hello';

test('should return 120 for 51', () => {
  expect(HelloClass.fact(5)).toBe(120);
});
