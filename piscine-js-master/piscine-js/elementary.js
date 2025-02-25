const multiply = (a, b) => {
    var res = 0
    if (b < 0 && a >= 0) {
        let temp = a
        a = b
        b = temp
    }

    if (a < 0 && b < 0) {
        a = -a
        b = -b
    }

    for (let i = 0; i < b; i++) {
        res += a
    }
    return res
}

console.log(multiply(4,0))

const abs = (n) => {
    if (n === 0) {
        return 0
    }

    if (n < 0) {
        return -n
    }

   return n
}

const divide = (a, b) => {
    let counter = 0
    let sign = 1
    if (multiply(a,b) < 0) {
        sign = -1
    }

    a = abs(a)
    b = abs(b)

    while (a >= b) {
        a -= b
        counter++ 
    }

    return multiply(sign,counter)
}

console.log(divide(4,-2))

const modulo = (a,b) => {
    let sign = 1
    if (a < 0) {
        sign = -1
    }
    //return a - divide(a,b)*b
    let mod = a - multiply(divide(a,b),b)
    if (multiply(a,mod)<0) {
        return -mod
    }
    // console.log("3 mod 5 is : ", 3 % 5)
    // console.log("3 mod -5 is : ", 3 % -5)
    // console.log("-3 mod 5 is : ", -3 % 5)
    // console.log("3 mod -5 is : ", -3 % -5)
    return mod
} 

// modulo(-123, 22) === -13 ... bs both answers are mathematically correct but whatever

console.log("-123 mod 22 should be 1 --> ", "my answer --> " , modulo(-123,22))

// This still leaves a sign ambiguity if the remainder is non-zero: two 
// possible choices for the remainder occur, one negative and the other 
// positive; that choice determines which of the two consecutive quotients 
// must be used to satisfy equation (1). In number theory, the positive 
// remainder is always chosen, but in computing, programming languages 
// choose depending on the language and the signs of a or n

// console.log("testing javascript modulo")
// console.log("3 mod 5 is : ", 3 % 5)
// console.log("3 mod -5 is : ", 3 % -5)
// console.log("-3 mod 5 is : ", -3 % 5)
// console.log("3 mod -5 is : ", -3 % -5)