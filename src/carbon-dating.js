const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== "string" || sampleActivity === undefined) return false;
  let sA ;
  sampleActivity.includes(".") ? sA = parseFloat(sampleActivity) : sA = Number(sampleActivity);
  if (isNaN(sA)) return false;
  let age = Math.log(MODERN_ACTIVITY/sA)*HALF_LIFE_PERIOD/0.693;
  if (age == Infinity || age < 0 || isNaN(age)) return false;
  return Math.ceil(age);
};
