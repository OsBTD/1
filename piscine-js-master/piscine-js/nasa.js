const nasaHelper = (n) => {
    //nasa my ass
    var res = ""

    if (n%3 !== 0 && n%5 !== 0){
        res = n+""
        return res
    }
    if (n%3 === 0){
        res += "NA"
    } 

    if (n%5 === 0){
        res += "SA"
    }



    return res
}

// read the fucking subject ...

const nasa = (N) => {
    var resArr = []
    for (let i= 1 ; i <= N; i++){
        resArr.push(nasaHelper(i))
    }

    return resArr.join(" ")

}

console.log(nasa(15))