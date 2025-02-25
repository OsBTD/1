// const sourceObject = {
//     num: 42,
//     bool: true,
//     str: 'some text',
//     log: console.log,
//   }

const get = (k) => sourceObject[k]

const set = (k, v) => (sourceObject[k] = v)

// console.log(get("num"))
// console.log(set("bool",false))
// console.log(sourceObject)
// could use return with curly bbraces

//const sourceObject = { test: {test: 1}}

//console.log(get(test)) // wtf this doesnt work , its interpreted as a

//console.log(get("test"))



//set(sourceObject.test.test, 2)

//onsole.log(set("test.test", 10))

//console.log(sourceObject)

//const set2 = (k, v) => get(k) = v

//console.log(set(sourceObject.test.test, 3))


//console.log(set2(sourceObject.test.test, 3))