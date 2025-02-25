const get = (src, path) => {
    // recursion ...
    // extract array
    
    const recursive = (src,arr) => {
        // forgot the stopping condition
        
        if (arr.length === 0){
            return src
        }
        const temp = src[arr[0]] // wait whaaaat not this bs !!!
        if (temp === undefined){
            return undefined
        }
        return recursive(temp,arr.slice(1))
    }

    const pathArr = path.split('.')

    return recursive(src, pathArr)
    // for (let i = 0 ; i < pathArr.length ; i++) {
        
    // }
}

// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// //get(src, path) // -> 'peekaboo'

// console.log(get(src,path))

console.log(get({ nested: { key: 'value' } }, 'nx.nx'))

