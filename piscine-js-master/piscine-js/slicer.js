const slice = (arr, start, o_end) => {
    // check for validity
    // end and start equality is problematic too
    const actualStart = start < 0 ? arr.length + start : start; // not enough because of modulo by let test
    const isString = typeof(arr) === "string" 
    const myArr = isString ? [...arr] : arr //not sure if this is the right way to do it
    // var actualEnd = o_end === undefined ? arr.length : o_end;
    // var actualEnd = o_end < 0 ? arr.length + o_end : o_end;
    let actualEnd;
    if (o_end === undefined) {
    actualEnd = arr.length;
    } else if (o_end < 0) {
    actualEnd = arr.length + o_end;
    } else {
    actualEnd = o_end;
    }
    const newArr = []
    for (let i = actualStart; i < actualEnd; i++) {
        newArr.push(myArr[i])
    }

    if (isString) {
        return newArr.join('')
    }

    return newArr
}

// const slice = (arr, start, o_end) => {
//     var isString = false
//     if (typeof(arr) === "string") {
//         isString = true;
//         var arr = [...arr]
//     }
//     if (start >= arr.length || o_end <= start) {
//         return "invalid arguments" // shoul return a well formatted error instead of this bs
//     }

//     var end
//     const newArr = []
//     if (start ===0 && o_end === undefined) {
//         end = arr.length
//         if (isString) {
//             return arr.join("")
//         }
//         return arr // no need to waste calculations 
//         // it actually more optimal maybe to stitch two arrays two if towards the end
//     } else {
//         end = o_end
//     }
//     for (let i= start; i < end ; i++){
//         newArr.push(arr[i])
//     }
//     if (isString) {
//         return arr.join("")
//     }
//     return newArr
// }

console.log(slice('abcdef', 0,-2))

//ok i get it if the typoe is string tuirn it into an array and then join it back