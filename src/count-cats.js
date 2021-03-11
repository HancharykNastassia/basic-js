const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  if ((backyard.length == 0) || backyard === undefined) return 0;
  let catNumber = 0;
  backyard.forEach(level => {
    level.forEach(cat => {
      if (cat === "^^") catNumber = catNumber + 1;
    })
  })

  return catNumber;
}
