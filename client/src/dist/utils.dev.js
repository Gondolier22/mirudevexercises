"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformDecimalToBinary = exports.reverse = void 0;

var reverse = function reverse(s) {
  return s.split("").reverse().join("");
};

exports.reverse = reverse;

var transformDecimalToBinary = function transformDecimalToBinary(number) {
  var result = number;
  var binaryNumber = '';

  while (result > 0) {
    binaryNumber += result % 2 === 0 ? '0' : '1';
    result = parseInt(result / 2);
  }

  binaryNumber = reverse(binaryNumber);
  return binaryNumber;
};

exports.transformDecimalToBinary = transformDecimalToBinary;