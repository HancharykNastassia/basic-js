const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr.length === undefined) throw new Error();
  let resArr = [];
  let del = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      if (i == arr.length - 1) break;
      del = true;
      i = i+1;
      continue;
    }
    else if (arr[i] === "--discard-prev") {
      if (i == 0 || del) continue;
      resArr.pop();
    }
    else if (arr[i] === "--double-next") {
      if (i == arr.length - 1) break;
      resArr.push(arr[i+1]);
      del = false;
    }
    else if (arr[i] === "--double-prev") {
      if (i == 0 || del) continue;
      resArr.push(arr[i-1]);
    }
    else {
      resArr.push(arr[i]);
      del = false;
    }
  }
  return resArr;
};
