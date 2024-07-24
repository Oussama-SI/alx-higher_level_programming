#!/usr/bin/node
const { argv } = require('node:process');
if (isNaN(parseInt(argv[2])) || (argv[2] === undefined)) {
  console.log('Not a number');
} else {
<<<<<<< HEAD
  console.log(parseInt('My number: '+argv[2]));
=======
  console.log('My number: ' + parseInt(argv[2]));
>>>>>>> 6a7f3bc9055fa4ec849133459e711e6931fbffed
}
