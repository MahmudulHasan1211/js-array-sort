const numbers = [2, 3, 12, 4, 38,0]

// for ascending
const numbers_asc = [...numbers].sort(function(a,b){return a - b})

// for descending 
const numbers_dsc = [...numbers].sort(function(a,b){return b - a})

console.log(numbers_asc)
console.log(numbers_dsc)