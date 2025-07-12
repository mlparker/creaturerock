const assert = require('assert');
const configFunction = require('../.eleventy.js');

const filters = {};
const fakeConfig = {
  addPassthroughCopy: () => {},
  addCollection: () => {},
  addFilter: (name, fn) => {
    filters[name] = fn;
  }
};

configFunction(fakeConfig);

const date = new Date('2025-06-29T00:00:00Z');
const result = filters.date(date);
assert.strictEqual(result, 'June 29, 2025');
console.log('date filter test passed');
