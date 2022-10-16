const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
// const chainMaker = {
//   getLength() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   addLink(/* value */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   removeLink(/* position */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   reverseChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   },
//   finishChain() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// };

let chain = []
let valueArr = []
const chainMaker = {


  getLength() {
    return chain.length;
  },

  addLink(value) {
    value = String(value);

    if(value.length>0) {
      chain.push(`( ${value} )`);
    } else if(typeof value == 'number' && Number.isInteger(value) ){
    valueArr.push(value)
    }  else {
      chain.push('()');
    } 
    return this;
  },

  removeLink(position) {
    // if (typeof position != 'number' || !Number.isInteger(position) || position < 1 || position > Math.max.apply(null, valueArr)){
    
    //   throw new Error("You can't remove incorrect link!");
    // }

    chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    chain.reverse();
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    const result = chain.join('~~');
    return result;

  }
} 





module.exports = {
  chainMaker
};
