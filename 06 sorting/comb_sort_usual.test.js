const combSort = require("./comb_sort_usual");

const data = require("../data/data32");

console.log(">>>", combSort([...data]).join("-"));
console.log(">>>", combSort([...data], 3, 10).join("-"));
