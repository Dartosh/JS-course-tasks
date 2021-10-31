module.exports = function check(str, bracketsConfig) {
  let key = true;
  str = str.split('');
  while(key)
  {
    key = false;
    for(let i = 1; i < str.length; i++)
    {
      for (let elem of bracketsConfig)
      {
        if(elem[0]==str[i-1] && elem[1]==str[i])
        { 
          str.splice(i-1, 2); 
          i--; 
          key = true; 
          break;
        }
      }
    }
  }
  str = str.join('');
  if(str !== '')
    return false;
  else 
    return true;
}
