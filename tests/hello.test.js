const hello = require('../hello');

test('greets my friend', () => {
  expect(hello('my friend')).toBe("Hello, my friend");
});

