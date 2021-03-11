const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === undefined || !Array.isArray(members)) return false;
  let teamMates = members.filter(m => typeof m === "string");
  let sName = [];
  teamMates.forEach(m => sName.push(m.trim().split("")[0].toUpperCase()));
  sName = sName.sort().join("");
  return sName;
};
