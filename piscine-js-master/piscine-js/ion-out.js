const ionOut = (str) => {
    // return an array of matches containing 'ion'
    return [...str.matchAll((/(\b\w*tion\b)/g))].map((match) => match[0].replace("tion","t"));
}

console.log(ionOut("bion tion tnbghion lion tion caption station"))