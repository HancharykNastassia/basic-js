const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error();
  let month = date.getMonth() + 1;
  if (month < 3 || month == 12) return 'winter';
  else if (month < 6) return 'spring';
  else if (month < 9) return 'summer';
  else return "autumn";
};
