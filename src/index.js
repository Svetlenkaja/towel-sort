
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    const arr = i % 2 === 0 ? matrix[i] : matrix[i].reverse();
    result.push(...arr)
  }
  return result;
}
