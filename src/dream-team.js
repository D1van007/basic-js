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
function createDreamTeam(Arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let DreamArr = []
  if ( typeof Arr == 'number' || Arr == false || Arr == null || Arr == undefined ||(typeof Arr === 'object' && !Array.isArray(Arr)) ) return false
  else {
  for(i=0; i<Arr.length; i++){
    if (typeof Arr[i] == 'string' && Arr[i] !== "" && Arr[i] !== " ") 
    DreamArr.push(Arr[i].trim().slice(0, 1).toUpperCase())
    else false
  }
  return DreamArr.sort().join('')
}

}

module.exports = {
  createDreamTeam
};
