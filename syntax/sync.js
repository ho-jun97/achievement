var fs = require('fs');

/*
//readFileSync
console.log('A'); // 1
var result = fs.readFileSync('syntax/sample.txt', 'utf8'); //2
console.log(result); //3
console.log('C');
*/

console.log('A'); //1
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
  console.log(result); //3
});
console.log('C'); //2
