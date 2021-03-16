const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect){
    if (isDirect === undefined){
      this.direct = true;
    }
    else {
      this.direct = isDirect;
    }
  }
  encrypt(message, cKey) {
    if (message === undefined || cKey === undefined) throw new Error();
    let words = message.toUpperCase().split(' ');
    let wordLength = words.map(item => item.length);
    let arr = words.join('').split('');
    let key = cKey.toUpperCase();
    let res = arr.map((item, index) => {
      if (item.charCodeAt(0) > 64 && item.charCodeAt(0) < 91) 
      return String.fromCharCode((item.charCodeAt(0) + key.charCodeAt(index % key.length) - 130) % 26 + 65);
      else return item;
    });
    return this.finalizeStr(wordLength,res);
  }    
  decrypt(encryptedMessage, cKey) {
    if (encryptedMessage === undefined || cKey === undefined) throw new Error();
    let words = encryptedMessage.toUpperCase().split(' ');
    let wordLength = words.map(item => item.length);
    let arr = words.join('').split('');
    let key = cKey.toUpperCase();
    let res = arr.map((item, index) => {
      if (item.charCodeAt(0) > 64 && item.charCodeAt(0) < 91)
      return String.fromCharCode(((item.charCodeAt(0) - key.charCodeAt(index % key.length) + 26) % 26) + 65);
      else return item;
    });
    return this.finalizeStr(wordLength, res);
  }
  finalizeStr (wordLength, resArray) {
    let strRes ='';
    if (this.direct) {
      wordLength.forEach(item => {
        for (let i = 0; i < item; i++){
          strRes = strRes + resArray.shift();
        }
        strRes = strRes + ' ';
      } )
    } else {
      wordLength.reverse().forEach(item => {
        for (let i = 0; i < item; i++){
          strRes = strRes + resArray.pop();
        }
        strRes = strRes + ' ';
      } )
    }
    return strRes.trim();
  }
}

module.exports = VigenereCipheringMachine;
