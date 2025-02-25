const join = (arr, pattern) => {
    var res = ""
    for (let i=0 ; i < arr.length; i++){
        res += arr[i]
        if (i < arr.length - 1) {
            res += pattern
        }
    }
    return res
}

const split = (str, splitBy) => {
    if (splitBy === "") return [...str]; // Special case for empty string

    let newArr = [];
    let temp = "";

    for (let i = 0; i < str.length; i++) {
        if (str.slice(i, i + splitBy.length) === splitBy) {
            newArr.push(temp);
            temp = "";
            i += splitBy.length - 1; 
        } else {
            temp += str[i];
        }
    }
    newArr.push(temp);
    return newArr;
};

console.log(split("a-b-c", "-")); // ["a", "b", "c"]
console.log(split("The quick brown fox jumps over the lazy dog", "")); 
// ["T", "h", "e", " ", "q", "u", "i", "c", "k", ...]

console.log(split("hello world", " ")); // ["hello", "world"]

console.log(split("a-b-c", "-")); // ["a", "b", "c"]

const str = 'The quick brown fox jumps over the lazy dog'

console.log(split(str, ""))
console.log(join(['ee', 'ff', 'g', ''], ','))