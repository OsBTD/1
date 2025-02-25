// const getURL = (str) => {
//     const re_URL = /(https?:\/\/\w+\.[a-z]+)\/?/g
//     return [...str.match(re_URL)].map(m => m[0]);
// }

// const greedyQuery = (str) => {
//     const URLs = getURL(str)
//     const reGreedy = /(\w+=\w+){3,}/
//     let result = []
//     for (i = 0 ; i < URLs.length ; i++) {
//         if (URLs[i].match(reGreedy)) {
//             result.push(URLs[i])
//         }
//     }

//     return result

// }

// const notSoGreedy = (str) => {
//     const URLs = getURL(str)
//     const reGreedy = /(\w+=\w+){2,3}/
//     for (i = 0 ; i < URLs.length ; i++) {
//         if (URLs[i].match(reGreedy)) {
//             result.push(URLs[i])
//         }
//     }
//     return result  
// }

const getURL = (str) => {
    const re_URL = /(https?:\/\/\S+)/g; // approximation rather than exact
    return [...str.match(re_URL)] || [];
};

const greedyQuery = (str) => {
    const URLs = getURL(str);
    //const reGreedy = /(\w+=\w+&){2,}\w+=\w+/; // At least 3 query parameters
    const reGreedy = /\?[^&]+=[^&]+(?:&[^&]+=[^&]+){2,}$/

    return URLs.filter(url => reGreedy.test(url));
};

const notSoGreedy = (str) => {
    const URLs = getURL(str);
    const reNotSoGreedy = /\?[^&]+=[^&]+(?:&[^&]+=[^&]+){1,2}$/; // 2 or 3 query parameters
    return URLs.filter(url => reNotSoGreedy.test(url));
};

// const test = "qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq http://example.com/hello?you=something&something=you&test=pass";

// console.log("getURL(test):", getURL(test));
// console.log("greedyQuery(test):", greedyQuery(test));
// console.log("notSoGreedy(test):", notSoGreedy(test));


