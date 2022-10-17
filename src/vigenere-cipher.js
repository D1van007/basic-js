const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(arguments1,arguments2) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
   let VIGONum = {
       "A": "0",
       "B": "1" ,
       "C": "2" ,
       "D": "3" ,
       "E": "4" ,
       "F": "5" ,
       "G": "6" ,
       "H": "7" ,
       "I": "8" ,
       "J": "9" ,
       "K": "10" ,
       "L": "11" ,
       "M": "12" ,
       "N": "13",
       "O": "14" ,
       "P": "15" ,
       "Q": "16" ,
       "R": "17" ,
       "S": "18" ,
       "T": "19" ,
       "U": "20" ,
       "V": "21",
       "W": "22",
       "X": "23",
       "Y": "24",
       "Z": "25",
       " ": " ",
    }

     let VIGO = {
      0: "A",
      1: "B",
      2: "C",
      3: "D",
      4: "E",
      5: "F",
      6: "G",
      7: "H",
      8: "I" ,
      9: "J" ,
      10: "K" ,
      11: "L" ,
      12: "M" ,
      13: "N" ,
      14: "O" ,
      15: "P" ,
      16: "Q" ,
      17: "R" ,
      18: "S" ,
      19: "T" ,
      20: "U" ,
      21: "V" ,
      22: "W" ,
      23: "X" ,
      24: "Y" ,
      25: "Z" ,
      " ": " ",
     }
  let keys = Object.keys(VIGO) //  массив ключей '0'... '25'

      let originalText = [...arguments1]
      let secretKey = [...arguments2]
      let valuesText = []
      let valuesKeys = []
      let streamKey = []
      let valuesSum = []

      let mainDeObj = {}
      let mainDe = []
      for (i=0; i<originalText.length; i++){
        if ( /^[a-zA-Z]+$/.test(originalText[i]))
        valuesText.push(VIGONum[originalText[i].toUpperCase()])
        else
        valuesText.push(originalText[i])
      } 
  
      for (i=0; i<secretKey.length; i++){
        valuesKeys.push(VIGONum[secretKey[i].toUpperCase()])
      }

      

      // for (i=0; i<valuesText.length; i++){
        // if (streamKey.length<valuesText.length){
        // if (i==valuesKeys.length){
        //   i=0 ;
        //   streamKey.push(valuesKeys[i])
        // }
        // else if (valuesText[i]==" ") {
        //   streamKey.push(" ")
        // }
        for (let i = 0; i < valuesText.length; i++) {
          if (valuesText[i] == " ") {
            streamKey.push(' ');
  
          } 
          
          streamKey.push(valuesKeys[i % valuesKeys.length])
        
        //   else if (valuesText[i-1]==" ") {
        //   streamKey.push(valuesKeys[i-1])
        
        // }
        // else {streamKey.push(valuesKeys[i])}
        
      } return streamKey.join(',')
    
      for (i=0; i<valuesText.length; i++){
        if (valuesText[i]==" " || valuesKeys[i]==" ") {
          valuesSum.push(" ")
        } else 
        {let mod = (+streamKey[i] + +valuesText[i]) % 26
        valuesSum.push(mod + "")}

      }
      

      let objKeys = Object.keys(VIGONum)
for (i=0; i<objKeys.length; i++){
  mainDeObj[VIGONum[objKeys[i]]]=objKeys[i]
}
for (i=0; i<valuesSum.length; i++){
mainDe.push(mainDeObj[valuesSum[i]])

}
      
  
     return mainDe.join('')}
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
