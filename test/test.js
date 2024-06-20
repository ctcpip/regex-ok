// verify our check is stricter than the other checker alone
const isRegexOk = require('../src/index');
const safeRegex = require('safe-regex2');
const t = require('tap');

t.test('our validation is more strict than safe-regex2 alone', t => {
  const halfBad = /^yee/;

  t.ok(safeRegex(halfBad));
  t.notOk(isRegexOk(halfBad));

  const good = /^yee$/;

  t.ok(safeRegex(good));
  t.ok(isRegexOk(good));

  t.end();
});

t.test('string and regexp types are good', t => {
  const string = '^yee$';
  const regexp = /^yee$/;

  t.ok(isRegexOk(string));
  t.ok(isRegexOk(regexp));

  t.end();
});

t.test('good values', t => {
  const good = [
    /^yee$/,
    /^[yee|ree]$/,
    /^yee+$/,
    /^yee*$/,
    /^yee?$/,
    /^yee|ree$/,
  ];

  for (const re of good) {
    t.ok(isRegexOk(re), `${re} shall pass`);
  }

  t.end();
});

t.test('bad values', t => {
  const bad = [
    /^(([a-z])+.)+[A-Z]([a-z])+$/,  // java classname (evil)
    /^(([a-z])+\.)+[A-Z]([a-zA-Z])+$/,  // java classname (not as evil),
    null,
    0,
    undefined,
    new Error(),
    {},
    1,
    false,
    true,
    '',
    '    ',
  ];

  for (const re of bad) {
    t.notOk(isRegexOk(re), `${re} shall not pass`);
  }

  t.end();
});
