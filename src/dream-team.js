const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {

  if (Array.isArray(members) === true) {

  } else {
    return false
  }

  const test = []

  for (key of members)  {

    if (typeof key === typeof 'string') {

      test.push(key)

    }
  }

  countArr = []

  for (let i = 0 ; i < test.length; i++) {

    let test1 = test[i].trim().toUpperCase().slice(0,1);
    countArr.push(test1)
    if (Number(countArr[i]) == !NaN) { 
     delete countArr[i]

    }
   }

 return  countArr.sort().join('').toUpperCase()
 
}


module.exports = {
  createDreamTeam
};
