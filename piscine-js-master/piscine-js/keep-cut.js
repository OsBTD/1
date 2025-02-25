const cutFirst = (s) => {
    const sArr = [...s]
    return sArr.slice(2).join("")
}

const cutLast = (s) => {
    const sArr = [...s]
    return sArr.slice(0,sArr.length - 2).join("")
}

const cutFirstLast = (s) => {
    return cutFirst(cutLast(s))
}

const keepFirst = (s) => {
    const sArr = [...s]
    return sArr.slice(0,2).join("")
}

const keepLast = (s) => {
    const sArr = [...s]
    return sArr.slice(sArr.length - 2).join("")
}

const keepFirstLast = (s) => {
    //return keepFirst(keepLast(s)) // wtf ...
   // const temp = keepLast(s)
   if (s.length <= 4) {
    return s
   }
    return keepFirst(s) + keepLast(s)
}

console.log("cutFirstLast('abcdef') === 'cd' , my version gives : ", cutFirstLast('abcdef'))

console.log("keepFirst('abcdef')", keepFirst("abcdef"))
console.log("keepLast('abcdef'))", keepLast("abcdef"))
console.log("keepFirstLast('abcdef')", keepFirstLast("abcdef")) // this is not

console.log("() => keepFirstLast('af') === 'af'", keepFirstLast('af'))