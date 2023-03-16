const namesList = require("../country/state/city/index");
const getFirstName = require("../utilities/utils/index");

function getPeopleInCity(namesList) {
  return getFirstName(namesList);
}

module.exports = getPeopleInCity;
