const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arrayEmail = email.split('')
  let res;

  for (let i = 0; i < arrayEmail.length; i++ ) {

   if (arrayEmail[i] === "@") {
      res = arrayEmail.slice(i + 1, arrayEmail.length)
   }
  }
  return res.join('')
 }

module.exports = {
  getEmailDomain
};
