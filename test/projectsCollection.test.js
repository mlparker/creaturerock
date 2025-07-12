const assert = require('assert');
const configFunction = require('../.eleventy.js');

const collections = {};
const fakeConfig = {
  addPassthroughCopy: () => {},
  addCollection: (name, fn) => {
    collections[name] = fn;
  },
  addFilter: () => {}
};

configFunction(fakeConfig);

assert.ok(collections.projects, 'projects collection is defined');
console.log('projects collection test passed');
