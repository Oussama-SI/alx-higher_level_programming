#!/usr/bin/node
exports.nbOccurences = function (list ,searchElement) {
  let x = 0;
  for (let i in list) {
    if (list[i] === searchElement) {
      x += 1;
    }
  }
  return x;
}
