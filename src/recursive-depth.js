const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let depthes = [];
    arr.forEach(item => {
      if (Array.isArray(item)) depthes.push(this.calculateDepth(item));
    })
    return depth + (depthes.length > 0 ? depthes.sort((a,b) => b - a)[0] : 0);
  }
};