const { add, a } = require("./local1");
const { add: add2, a: a2 } = require("./local2");

const local1 = add(a, a2);

const local2 = add2(local1, a, a2);
console.log(local2);
