export const vowels = /[aeiou]/gi //case insensitive, g jus in case

const vowelDots = (str) => {
    let result = '';
    
    let strArr = [...str]
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].match(vowels)){
            result += strArr[i] + '.';
        } else {
            result += strArr[i];
        }
    }
    return result
}

console.log(vowelDots("hello"))

//module.exports = { vowels, vowelDots };
