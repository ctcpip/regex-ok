const safeRegex = require('safe-regex2');

/**
 *
 * @param { RegExp | String } regex regular expression to test
 * @returns { boolean }
 */
function isRegexOk(regex) {
  const re = /^\/\^.+\$\/$/;
  let isSafe = false;

  try {
    isSafe = safeRegex(regex);

    if (isSafe) {
      const r = new RegExp(regex).toString(); // normalize input
      isSafe = re.test(r);
    }
  }
  catch (error) {
    console.error(error);
    isSafe = false;
  }

  return isSafe;
}

module.exports = isRegexOk;
module.exports.default = isRegexOk;
module.exports.isRegexOk = isRegexOk;
