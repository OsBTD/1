const sign = (n) => {if (n === 0){return 0} else { if (n < 0) {return -1} else { return 1}}}

console.log(sign(0))

console.log(sign(10))

console.log(sign(-10))

const sameSign = (a,b) => (sign(a) === sign(b))

console.log(sameSign(-3,-4))