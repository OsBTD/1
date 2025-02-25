

const flat = (arr, k) => {
    if (k === 0) {
        return arr
    }

    if (k === undefined){
        k = 1
    }

    // test flatness 

    //if (isFlat(arr)) ... i do that already ...

    let result = []

    for (let i = 0 ; i < arr.length; i++){
        if (Array.isArray(arr[i])) {
            result = result.concat(flat(arr[i], k - 1))
            // i need an early exit condition ... flatness test
        } else {
            result.push(arr[i])
        }
        
    }

    return result
  

}

const arr1 = [1,2,3,[4,5,[6,7,[8,9]]]]
//console.log(arr1.flat(2))


const flat1 = (arr) => {
    let result = []
    //let temp = []
    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            result.push(arr[i])
        } else {
            for (let j = 0; j < arr[i].length; j++) {
                result.push(arr[i][j])
                console.log("i just pushed : ", arr[i][j])
            }
            //result.concat(temp);
            //temp = []
        }
    }

    return result
}

console.log(flat([1, [2, [3]]]))
//console.log(flat(arr1,2))

// ({ eq }) => eq(flat([1, [2, [3]]]), [1, 2, [3]])

