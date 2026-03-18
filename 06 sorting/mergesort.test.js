const mergesort = require("./mergesort");

const data = require("../data/data32");

console.log(">>>", mergesort([...data]).join("-"));
console.log(">>>", mergesort([...data], 3, 10).join("-"));
