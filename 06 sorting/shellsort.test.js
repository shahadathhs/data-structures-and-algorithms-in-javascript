const shellSort = require("./shellsort");

const data = require("../data/data32");

console.log("===", data.join("-"));
console.log(">>>", shellSort([...data]).join("-"));
console.log(">>>", shellSort([...data], 3, 10).join("-"));
