const moduleName = require('./egenModule');
const name = moduleName.name.sayName('Max');

console.log(name);

const age = moduleName.name.showAge(33);

console.log(age);

const calculate = moduleName.name.calc(10, 10); // 100 

console.log(calculate);

const average = moduleName.name.genomSnitt(12345, 54321);

console.log(average);