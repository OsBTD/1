const reverse = (s) => {
    var isString = false
    const arr = s
    if (typeof(s) === "string"){
        const arr = [...s]
        isString = true
    }
    var r = []

    for (let i= arr.length ; i >= 0 ; i--) {
        r.push(arr[i])
    }
    if (isString) {
        return r.join("")
    }
    return r.slice(1)
}

console.log(reverse([1,2,3]))

console.log(reverse("abcdef"))