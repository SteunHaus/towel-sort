module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix.length == 0) return [];

  let result = [];
  let x = 0;
  let resultIndex = 0;
  for (let i = 0; i < matrix.length; i++) {

    if (x == 0 || x == -1) {
      while (x < matrix[i].length) {
        result[resultIndex] = matrix[i][x];
        resultIndex++;
        x++;
      }

    } else if (x > 0){
      x = matrix[i].length;
      while (x >= 0) {
        result[resultIndex] = matrix[i][x];
        resultIndex++;
        x--;
      }
    }
  }

  result = result.filter(function(element) {
    return element !== undefined;
  });
  return result;
}
