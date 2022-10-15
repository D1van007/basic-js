const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */


function getSeason(dat) {
  const season = {
    0: 'winter',
    1: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'autumn',
    9: 'autumn',
    10: 'autumn',
    11: 'winter',
  }

  let res = season[dat.getMonth()]

  // for (key in season) {
  // if (dat.toString == season[key]){
  // return dat}}

  if (res == 'winter' || 'spring' || 'summer'|| 'autumn') {
    return res}
  else if ( !isNaN(Date.parse(dat))){
       throw new Error("Invalid date!")}
 else if ( arguments.length > 1 || typeof arguments !== 'object'){
    throw new Error("Invalid date!")}
  else if ( arguments.length == 0){
      throw new Error( "Unable to determine the time of year!")}
//   else if ( arguments.length > 1 || typeof arguments !== 'object')
// {  return true}
//   else if ( isNaN(Date.parse(dat)))
//  { return  true}
//  else if ( dat && Object.prototype.toString.call(dat) === "[object Date]" && !isNaN(dat))
//   return true
//   else if (res == true)
// return res
// else if (res == false)
// return res
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
