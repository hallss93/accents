"use strict";
module.exports = function (txt) {
  return txt.normalize("NFD").replace(/\p{Diacritic}/gu, "");
};
