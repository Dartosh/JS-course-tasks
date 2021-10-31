
module.exports = function towelSort (matrix) {
  let ans = [];
  let counter = false;
  if(!matrix || matrix.length == 0)
    return [];

  for(let i = 0; i < matrix.length; i++)
    {
      if(counter == false)
      {
        for(let j = 0; j < matrix[i].length; j++)
        {
          ans.push(matrix[i][j]);
          counter = true;
        }
      }
      else
      {
        for(let j = matrix[i].length - 1; j >= 0; j--)
        {
          ans.push(matrix[i][j]);
          counter = false;
        }
      }
    }
  return ans;
}
