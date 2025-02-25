const isPositive = (n) => (n>0) // >= apparently not

const abs = (n) => {

    if (n === 0) {
        return 0; //  avoid -0 bs
    }
    if (!isPositive(n)) {
        return -n;
    } 
    return n;
};

console
console.log(-1)
console.log(abs(-1))