/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return str;
  const ans = [];
  let curr = str[0];
  let k = 1;
  for (let i = 1; i <= str.length; i++) {
    if (curr === str[i]) k++;
    else {
      if (k > 1) ans.push(String(k).concat(curr));
      else ans.push(curr);
      curr = str[i];
      k = 1;
    }
  }
  return ans.join('');
}

module.exports = encodeLine;
