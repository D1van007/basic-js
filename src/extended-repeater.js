const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
//  options =
//   { repeatTimes: 3, 
//     separator: '**', 
//     addition: 'PLUS',
//     additionRepeatTimes: 3,
//     additionSeparator: '00' }


let optionsArrKeys = Object.keys(options)
 
for (let key of optionsArrKeys) {
  options[key]
}

let optionsArrValue = Object.values(options)
let optionsArr =[]
let myArr = [] 
let additionArr = []

for (let i=0; i< optionsArrValue.length; i++){
  optionsArr.push(String(optionsArrValue[i]))
}

if (optionsArr.length==1 && options.hasOwnProperty('repeatTimes')){
  for (let i=0; i< +optionsArr[0]; i++){
    myArr.push(str)
  } 
  return String(myArr.join('+'))
}



if (optionsArr.length==2  && options.hasOwnProperty('repeatTimes')  && options.hasOwnProperty('separator')){
  for (let i=0; i< optionsArr[0]; i++){
    myArr.push(str)
  } 
  return String(myArr.join(`${optionsArr[1]}`))
}

if (optionsArr.length==4 && options.hasOwnProperty('repeatTimes')  && options.hasOwnProperty('separator') && options.hasOwnProperty('addition')  && options.hasOwnProperty('additionRepeatTimes')){
  for (let i=0; i< optionsArr[3]; i++){
  additionArr.push(optionsArr[2])
}  
let addSimple = String(additionArr.join(''))
for (let i=0; i< optionsArr[0]; i++){
  myArr.push(str + addSimple)
} return String(myArr.join(`${optionsArr[1]}`))
}

if (optionsArr.length==3  && options.hasOwnProperty('separator') && options.hasOwnProperty('addition')  && options.hasOwnProperty('additionSeparator')){
 return String(str + optionsArr[1])
}

if (options.hasOwnProperty('repeatTimes')  && options.hasOwnProperty('separator') && options.hasOwnProperty('addition')  && options.hasOwnProperty('additionRepeatTimes')  && options.hasOwnProperty('additionSeparator')){
  for (let i=0; i< optionsArr[3]; i++){
  additionArr.push(optionsArr[2])
}  
let addSimple = String(additionArr.join(optionsArr[4]))
for (let i=0; i< optionsArr[0]; i++){
  myArr.push(str + addSimple)
} return String(myArr.join(`${optionsArr[1]}`))
}




}
module.exports = {
  repeater
}
