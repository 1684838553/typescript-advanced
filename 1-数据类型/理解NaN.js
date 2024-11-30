const isNaN = function(val){
    return Object.is(Number(val),NaN)
}

Object.is(NaN,NaN)  // true
Object.is(+0,-0)  // false
typeof +NaN  // number
Number.isNaN(NaN)  // true
isNaN(NaN)  // true


let arr = [NaN]
arr.indexOf(NaN)  // -1
arr.includes(NaN)  // true
