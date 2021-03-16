const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (position === undefined ||
      !Number.isInteger(position) ||
      position < 1 || position > this.chain.length) {
        this.chain = [];
        throw new Error();
      }
    this.chain = this.chain.filter((item, index) => index != position - 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    this.chain.forEach((item,index) => {
      if (index == 0) str = str + '( ' + item + ' )';
      else str = str + '~~( ' + item + ' )';   
    })
    this.chain = [];
    return str;
  },
};

module.exports = chainMaker;
