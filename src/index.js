module.exports = function reverse (n) {
    if(n<0)n *= -1;
    let str = String(n);
    let ans = str[str.length-1];
    for(let i = str.length - 2; i>=0; i--)
    {
        ans += str[i];
    }
    return ans;
  }