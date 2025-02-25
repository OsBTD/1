const groupPrice = (str) => {
    const re = /(?:USD|\$)(\d+)\.(\d+)+/g // i have look ahead to find USD
    return [...str.matchAll(re)].map(match => [match[0], match[1],match[2]])
}

console.log(groupPrice("the total is USD19.98 USD17.45"))