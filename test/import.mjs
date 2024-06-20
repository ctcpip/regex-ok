import isRegexOk from '../src/index.js';
import t from 'tap';

t.test('mjs import', t => {
  t.ok(isRegexOk('^yee$'));
  t.end();
});
