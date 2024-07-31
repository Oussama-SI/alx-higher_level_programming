#!/usr/bin/node
const { argv } = require('node:process');
/*a script that prints x times “C is fun”*/
if (isNaN(parseInt(argv[2])) || argv[2] === undefined) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < parseInt(argv[2]); i++) { console.log("C is fun"); }
}
