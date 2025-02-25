const trunc = (n) => {
  if (typeof(n) === NaN){
    return NaN
  }
  const nArr = [...(n+"")];
  const dotIndex = nArr.indexOf(".")
  if (dotIndex === -1){
    return n
  }

  const intPart = nArr.slice(0,dotIndex)
  const int = Number(intPart.join("")) //or ParseFloat or rather ParseInt since we seperated
  const decPart = nArr.slice(dotIndex+1,dotIndex+2)
  const dec = Number(decPart[0])
  // if (dec < 5){
  //   return int
  // } else {
  //   return int + 1
  // }
  return int
}
  


// console.log(trunc(-1225,78))

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



// const nums = [3.7, -3.7, 3.1, -3.1]
// console.log(floor(-3.7))
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))

// console.log("ceil(-5.2)", ceil(-5.2))
// console.log("floor(-5.2)", floor(-5.2))
// console.log("round(-5.2)", round(-5.2))

// // first intuition , turn numbers into strings
// // find the dot , take one number after discard the rest
// // decide based on the number after the . for func = round

// console.log(1.23456 + "" === "1.23456") // true

// const itoarr = (n) => {return [...(""+n)]}

// // const round = (n) => {
// //     const arr = itoarr(n)
// //     const dot = arr.indexOf('.')
// //     const numArr = arr.slice(0,dot+2) //+2 not +1 dummy ... learn to debug instead of gpts ...
// //     const round_down = ['0','1','2','3','4']
// //     const round_up = ['5','6','7','8','9']
// //     if (round_down.includes(numArr[numArr.length -1])) {
// //         return numArr.slice(0,-2).join('')
// //     }

// //     if (round_up.includes(numArr[numArr.length -1])) {
// //         let i = 0
// //         while (numArr[numArr.length -3] === '9') {
// //             i--
// //             numArr[numArr.length -3 - i] = '0'
// //         }

// //         //const target = numArr.indexOf(numArr[numArr.length -2])
// //         const zero2nine =  ['0','1','2','3','4','5','6','7','8','9']
// //         const target = numArr[numArr.length -1 - i]
// //         const replaced = zero2nine[zero2nine.indexOf(target) + 1]
// //         numArr[numArr.length -1 - i] = replaced

// //         //increase by one the first one that stops and append 0
        
// //         return numArr.slice(numArr.length - 2).join('')
        
// //         // i need to add one
// //     }
// // }

// // const round2 = (n) => {
// //     // 1. Convert the number to a string.
// //     const str = String(n);
// //     const dotIndex = str.indexOf('.');
// //     // If there's no decimal point, return n as is.
// //     if (dotIndex === -1) return str;
  
// //     // 2. Extract the integer part and the first decimal digit.
// //     const intPart = str.slice(0, dotIndex);
// //     const decPart = str.slice(dotIndex + 1);
// //     const firstDec = decPart[0];  // only the first decimal digit matters
  
// //     // 3. Create a one-to-one mapping between string digits and integer digits.
// //     const digitMap = {
// //       '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
// //       '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
// //     };
  
// //     // 4. If the first decimal digit is less than 5, round down.
// //     if (digitMap[firstDec] < 5) {
// //       return intPart;
// //     }
  
// //     // 5. If rounding up:
// //     // Convert the integer part to an array for easy manipulation.
// //     const intArr = intPart.split('');
// //     let indexToIncrement = -1;
  
// //     // Find the rightmost digit that is not '9'.
// //     for (let i = intArr.length - 1; i >= 0; i--) {
// //       if (intArr[i] !== '9') {
// //         indexToIncrement = i;
// //         break;
// //       }
// //     }
  
// //     // 6. Handle the case where all digits are '9'.
// //     if (indexToIncrement === -1) {
// //       // For example, 99.7 should become "100".
// //       return '1' + '0'.repeat(intArr.length);
// //     } else {
// //       // Increment the found digit.
// //       let digit = digitMap[intArr[indexToIncrement]];
// //       digit++;
// //       intArr[indexToIncrement] = String(digit);
// //       // Set all digits to the right to '0'.
// //       for (let j = indexToIncrement + 1; j < intArr.length; j++) {
// //         intArr[j] = '0';
// //       }
// //       return intArr.join('');
// //     }
// //   };

//   console.log("round2(1.7)", round2(1.7))
  
// const round3 = (n) => {
//     // turn to string
//     // have a one to one map with string nums and int nums
//     // be mindful of powers
//     // round down is easy ... suggestion lol
//     // ignore the dot

//     // [int part, decimal first part, index of first non-nine to be incremented]
// }

// console.log("round(1.7) is = ", round(1.7))

// const ceil = (n) => {
//     if (round2(n) === n) {
//         return n
//     }

//     if (n > 0) {
//         if (round2(n) <= n){
//             return round2(n) + 1
//         } else {
//             return round2(n)
//         }
//     } 

//     if (n < 0) {
//         if (round2(n) >= n){
//             return round2(n)
//         } else {
//             return round2(n) + 1
//         }
//     }
// }

// console.log("ceil(1.5)", ceil(1.5))

// console.log("ceil(-3.5)", ceil(-3.5))

// console.log("ceil(-3.5)", ceil(-3.5))

// const floor = (n) => {
//     return ceil(n) - 1
// }

// console.log("floor(-3.5) = ", floor(-3.5))

// const trunc = (n) => {

// }

// console.log("Math.round(1.23456) is = ", Math.round(1.23456));
// console.log("Math.round(1.23456) is = ", Math.ceil(1.23456));
// console.log("Math.round(1.23456) is = ", Math.floor(1.23456));
// console.log("Math.round(1.23456) is = ", Math.trunc(1.23456));
// //console.log("Math.round(1.23456) is = ", Math.round(1.23456));
