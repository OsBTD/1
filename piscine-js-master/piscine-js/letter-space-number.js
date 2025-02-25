const letterSpaceNumber = (str) => {
    // every letter
    // followed by a space (one space or an number of spaces)
    // followed by a one digit number
    // the number not followed by any letter
    //const re = /([a-z]\s\d{1,1})[^\d][^[a-z]/
    // use negative look ahead instead
    const re = /([a-z]\s+\d)(?![A-Za-z0-9])/g
    const result = []
    let match;

    return [...str.matchAll(re)].map(m => m[1]);
}

console.log(letterSpaceNumber('example 1, example 20, example 5'))
// output: ['e 1']