import canIterate from '../app';

test('check method true', () => {
  expect(canIterate('str')).toBeTruthy();
});
test('check method flse', () => {
  expect(canIterate(20)).toBeFalsy();
});
