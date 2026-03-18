const combSort = require("./comb_sort");

const data = require("../data/data32");

console.log(">>>", combSort([...data]).join("-"));
console.log(">>>", combSort([...data], 3, 10).join("-"));
