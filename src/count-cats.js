const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  count = 0
  let newArr = matrix.flat()
 for (let i = 0 ; i < newArr.length; i++ ) {
  if (newArr[i] === '^^') {
    count ++
  }
  
 }
 return count
}

module.exports = {
  countCats
};
