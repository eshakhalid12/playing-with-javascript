const {default : TestRunner} = require("jest-runner");
const add = require('./index.js');

test('multiply values', function() {
    expect(add(2)).toBe(5);
})

