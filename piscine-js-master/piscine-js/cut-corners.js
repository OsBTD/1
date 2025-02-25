const integerPart = (n) => { // i could solve it recursively
    if (n >= 0) {
      // For numbers between 0 and 1, the integer part is 0.
      if (n < 1) return 0;
      
      let candidate = 0;
      // Find the largest power of 2 that does not exceed n.
      let power = 1;
      while (power <= n) {
        power = power * 2;
      }
      power = power / 2;
      
      // Greedily add powers of 2 (halving the power each iteration)
      // to build up the integer part.
      while (power >= 1) {
        if (candidate + power <= n) {
          candidate = candidate + power;
        }
        power = power / 2; // binary approximation , basically base 2 ... ooof this is so beautiful haha two is the sweet spot
      }
      return candidate;
      
    } else {
      // For negative numbers, compute for -n and flip the sign
      // (this gives truncation toward 0)
      return -integerPart(-n);
    }
  };
  
  // Extract the fractional (decimal) part:
  const decimalPart = (n) => {
    return n - integerPart(n);
  };

const closestN = (n) => {
    //nah this will take forever for n that is big
    // seraching between maxint and 0 is also computationally unecessarily expensive
    // multiply till i get an int ?
    
    // how can i detect that n is an int lol
    if (Number.isInteger(n)) {
        return n
    } 

    var sign = 1
    if (n < 0) {
        sign = -1;
        n = -n
    }
    var counter = 0
    while (!Number.isInteger(n)){
        counter++
        n = n*10
    }
    // i need to find int part somehow 
    // if the counter is useless in finding the int part then its redundant and absolutely not needed

    

}

// const round = (n) => {

// }

// const floor = (n) => {
    
// }

// const ceil = (n) => {
    
// }


const trunc = (n) => {
    return integerPart(n)
}

const ceil = (n) => {
    if (n < 0 && trunc(n) !== n){
      return trunc(n)
    }
  
    if (n >= 0 && trunc(n) !== n){
      return trunc(n) + 1
    }
    return n
  }
  
  
  console.log(ceil(-1.255))
  
  const floor = (n) => {
    if (trunc(n) === n){
      return n
    }
  
    return ceil(n) - 1
  }
  
  const round = (n) => {
    var sign = 1
    if (n < 0) { // this should come first
      n=-n
      sign = -1
    }
  
    const decPart = n - trunc(n) // fuck the issue is the sign ...
   
   
    if (decPart < 0.5){
      return sign * floor(n)
    } else {
      return sign * ceil(n)
    }
  }
  


console.log(integerPart(-1.2554))

// Compute the integer (truncated) part using a binary search style algorithm.



  
  // Examples:
  console.log(decimalPart(3.14));   // Approximately 0.14
  console.log(decimalPart(5));      // 0 (since 5 is already an integer)
  console.log(decimalPart(-3.14));  // Approximately -0.14
  

// console.log("Math.round(1.23456) is = ", Math.round(1.23456));
// console.log("Math.round(1.23456) is = ", Math.ceil(1.23456));
// console.log("Math.round(1.23456) is = ", Math.floor(1.23456));
// console.log("Math.round(1.23456) is = ", Math.trunc(1.23456));
//console.log("Math.round(1.23456) is = ", Math.round(1.23456));

// const nums = [3.7, -3.7, 3.1, -3.1]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))