const is = {} // dont forget to delete this little shite lol

is.num = function (n) {
    return (typeof(n) === "number") // or typeof(8)
}

// wait wait these are not boolens lol

is.nan = function (n) {
    //return typeof(n)
    return (n !== n) //wtf
    // or use Number.isNaN(n)
    // wtf NaN is the ONLY value not equal to itself lol

}

is.str = function (n) {
    return typeof(n) === "string"
}

is.bool = function (n) {
    return typeof(n) === typeof(true)
}

is.undef = function (n) {
    return typeof(n) === "undefined"
    // string not value bro
}

is.def = function (n) {
    return typeof(n) !== "undefined"
}

is.arr = function (n) {
    return Array.isArray(n)
    // hmmm ...
}

is.obj = function (n) { // i still wonder about nill objects
    return typeof(n) === "object" && !is.arr(n) && n !== null;
}

is.fun = function (n) {
    return typeof(n) === "function"
}

is.truthy = function (n) {
    if (n) {
        return true
    }

    return false
}

is.falsy = function (n) {
    //return !is.falsy
    return !n  //cleaner
}

console.log(is.num(5))
console.log(is.str(""))
console.log(is.nan(NaN)) //flagged
console.log(is.bool(true))
console.log(is.undef(undefined)) //flagged
console.log(is.def("hi"))
console.log(is.arr([1]))
console.log(is.obj([]))
console.log(is.obj(Object.create(null)))
console.log(is.obj(null))
//console.log(is.fun(function(){})) //flagged
//console.log(is.truthy(true))

//console.log(typeof(function(){}))
//console.log((_) => match(_, is.obj, [{}, { length: 10 }, Object.create(null)]))


//console.log(typeof([1,2]))