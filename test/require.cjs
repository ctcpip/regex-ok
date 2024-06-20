const isRegexOk = require('../src/index');
const t = require('tap');

t.test('cjs require', t => {
  t.ok(isRegexOk('^yee$'));
  t.end();
});
