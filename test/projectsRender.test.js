const assert = require('assert');
const { execSync } = require('child_process');
const fs = require('fs');

// Build the site quietly
execSync('npx eleventy', { stdio: 'ignore' });

const html = fs.readFileSync('_site/projects/index.html', 'utf8');
assert(html.includes('Circle and Spiral'), 'Circle and Spiral is listed');
assert(html.includes('Dummy Project'), 'Dummy Project is listed');
console.log('projects render test passed');
