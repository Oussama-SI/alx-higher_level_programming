#!/usr/bin/node
const x = process.argv[2];
/*a script that prints x times “C is fun”*/
if (isNaN(parseInt(x)) || x === undefined) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < parseInt(x); i++) { console.log("C is fun"); }
}
