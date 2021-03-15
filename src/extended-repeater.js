const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = '';
  let repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;
  let additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
  let separator = options.separator === undefined ? '+' : options.separator;
  let additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;
  let addition = options.addition === undefined ? '' : options.addition;
  for (let i = 0; i < repeatTimes; i++){
    res = res + str;
    for( let j = 0; j < additionRepeatTimes; j++){
      res = res + addition + (j == additionRepeatTimes - 1 ? '' : additionSeparator);
    }
    res = res + (i == repeatTimes - 1 ? '' : separator);
  }
  return res;
};
  