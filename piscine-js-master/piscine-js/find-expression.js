function findExpression(n) {
    if (n === 1) {
      return "1";
    }
    
    // Try division by 2 first
    if (n % 2 === 0) {
      let expr = findExpression(n / 2);
      if (expr !== undefined) {
        return expr + mul2;
      }
    }
    
    // Try subtracting 4
    if (n >= 4) {
      let expr = findExpression(n - 4);
      if (expr !== undefined) {
        return expr + add4;
      }
    }
     
    return undefined;
  }

console.log(findExpression(8))
// let us look at the problem from the opposite side 

// we will use backtracking and recursion , starting from n can we substract by 4 or divide by two and get 1 at the end

// const add4 = (n) => (n+4)
// const mu2 = (n) => (n*2)

// const findExpression = (n) => {
//     const add4 = "+4"
//     const mu12 = "*2"
//     // backtracking ??


// }

// oh shyte , determining if a number could theoretically be written that way is easy but printing the steps is a bit harder haha

// Your goal is to try to find a sequence, starting from the number 1, and repeatedly either adding 4 or multiplying by 2, to produce the number given as a parameter.

// the question is am i allowed to go back to 1 again
// basically have 1 * 2 and 1 * 2 * 2 and many fours

// let assume we are allowed to go back to make things interesting

// numbers of the binary form but first in decimal :
// 1 
// 2 = 1*2
// 3 = no
// 4 = 1*2*2
// 5 = 1 + 4
// 6 = 1*2 + 4
// 7 = no
// 8 = 1*2*2*2 or 4 + 4
// 9 = 

// the thing is i could create a map for each number and then check if i can decompose the number to another in the map

// imma return to this later