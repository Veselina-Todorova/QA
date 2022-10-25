const fs = require('fs');
const fileData = fs.readFileSync('./test_scenarious/normal/config.json');

const file      = fileData + '';
const jsObject  = JSON.parse(file);
console.log(jsObject);
console.log(jsObject.numberOfRestartsForToday);