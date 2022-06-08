const { sum } = require("../src/sum");

it('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
})