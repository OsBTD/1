const repeat = (s,n) => {
    let result = ""
    for (let i = 0; i < n; i++) {
        result +=s
    }
    return result
}

console.log(repeat("ha",3))