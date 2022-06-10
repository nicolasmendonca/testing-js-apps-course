const { sum } = require('../src/math')

test('sum adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
})