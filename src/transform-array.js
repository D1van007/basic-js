const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
arrOut =[]
if (!Array.isArray(arr))
{
  throw new Error ("'arr' parameter must be an instance of the Array!")
}
  for (i=0; i<arr.length; i++){


 if (i == arr.length - 1 && arr[i]=='--double-next' ){

}else if (i == arr.length - 1 && arr[i]=='--discard-next' ){

}else if (i == 0 && arr[i]=='--double-prev'){
  
}else if (i == 0 && arr[i]=='--discard-prev'){

    }

      else if (arr[i]=='--discard-next' && (arr[i+2] == '--double-prev')){
        i=i+2}
        else if(arr[i]=='--discard-next' && arr[i+2] == '--discard-prev'){
          i=i+2}
          else if(arr[i]=='--double-next' && arr[i+2] == '--discard-prev'){
            arrOut.push(arr[i+1]);
             i=i+2}
          else if (arr[i]=='--double-next'){
            arrOut.push(arr[i+1])
          }
        else if (arr[i]=='--double-prev'){
      arrOut.push(arr[i-1])
    }else if (arr[i]=='--discard-next'){
      i=i+2
    } else if (arr[i]=='--discard-prev'){
      arrOut.slice(0, -1)
    } 
 
    
    else arrOut.push(arr[i])

  }return arrOut
}

module.exports = {
  transform
};
