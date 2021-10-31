/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let test = String(n);
  let ans = 10;
  while (ans > 9) {
    ans = 0;
    for (let i = 0; i < test.length; i++) {
      ans += Number(test[i]);
    }
    test = String(ans);
  }
  return ans;
}

module.exports = getSumOfDigits;