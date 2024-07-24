#!/usr/bin/node
const { argv } = require('node:process');
if (isNaN(parseInt(argv[2])) || (argv[2] === undefined)) {
  console.log('Not a number');
} else {
  console.log(parseInt(argv[2]));
}
