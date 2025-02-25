const indexOf = (arr, v, o_start) => { // not sure 
    if (o_start !== undefined && o_start < arr.length && o_start >= 0) {
        return indexOf(arr.slice(o_start,arr.length), v) + o_start; // add o_start
    }
    for (let i=0; i < arr.length ; i++){
        if (arr[i] === v) return i;
    }
    return -1;
}

console.log(indexOf([1,2,3,4,3,5], 5))

const lastIndexOf = (arr, v, o_start) => {
    // if (o_start !== undefined && o_start < arr.length && o_start >= 0) {
    //     return lastIndexOf(arr.slice(0,o_start)) // not sure if its the right call
    // }
    if (o_start !== undefined && o_start+1 < arr.length && o_start >= 0) {
        return lastIndexOf(arr.slice(0,o_start+1), v); // add o_start
    }
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] === v) return i;
    }

    return -1
}

console.log(lastIndexOf([1,2,3,4,3,5], 3,2))

const includes = (arr, v) => {
    if (indexOf(arr,v) !== -1 || lastIndexOf(arr,v) !== -1) return true;
    return false
}

console.log(includes(['a','b','c'], 'a'))

console.log(indexOf(["t", 0, 0, "t"], "t",1))

console.log(lastIndexOf(["t", 0, 0, "t"], "t",2)) // === 0