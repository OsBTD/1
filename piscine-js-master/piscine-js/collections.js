// const arrToSet = (arr) => {
//    //const s = new Set([]) //not sure
//     //return s.union(arr)
//     return new Set(arr)
// }

// console.log(arrToSet([1,2]))

// const arrToStr = (arr) => {
//     var s = ""
//     for (let i = 0; i< arr.length ; i++){
//         s +=arr[i]+""
//     }
//     return s
// }

// const strToSet = (str) => {
//     return new Set(str)
// }

// console.log(arrToStr([1,2]))


// const setToArr = (set) => {
//     //return new Array(set)
//     return [...set]
// }

// console.log(setToArr(new Set([1,2,3])))

// const setToStr = (set) => {
//     return arrToStr(setToArr(set))
// }

// console.log(setToStr(new Set([1,2,3])))


// const strToArr = (str) => {
//     return [...str]
// }

// console.log(strToArr("hello"))

// const mapToObj = (map) => {
//     //return Object.create(map)
//     return Object.fromEntries(map)
// }

// console.log(typeof(mapToObj(new Map())))

// const mapToArr = (map) => {
//    //pick the keys or values ?
//    return [...map]
// }

// const objToMap = (str) => {
//     // very similar just need to get around to it
//     return new Map(Object.entries(str))
// }

// // const arrToObj = (str) => {
// //     // it is an object so why do i need to convert
// //     // it once again ?
// //     // return Object.fromEntries(arr)
// //     return mapToObj(arrToMap(strToArr(str)))
// // }

// const arrToMap = (arr) => {return new Map(arr)}

// const strToObj = (str) => {
//     // new String() or something i saw earlier
//     //return new String(str) // not sure
//     // alright from the example clearly false lol
//     //return mapToObj(arrToMap(strToArr(str)))
//     return mapToObj(arrToMap(strToArr(str).map((char,index) => [index, char])))
// } // phew wtf !!!

// // When you write:

// // javascript

// // arr.map((char, index) => [index, char]);
// // JavaScript automatically knows that:

// // char is the current value (the element at that index in the array).
// // index is the index of that value in the array.

// console.log(strToObj("hello"))

// // const superTypeOf = (elem) => {
// //     // case Array
// //     // object
// //     if (typeof(mapToArr(objToMap(elem))) === Array()){
// //         return "Array"
// //     }
// //     // map
// //     if (typeof(mapToArr(elem) === Array())){
// //         return "Array"
// //     }
// //     // array

// //     if (typeof(elem) === Array()){
// //         return "Array"
// //     }

// //     // case map

// //     if (typeof(mapToArr(mapToObj(elem))) === Array()){
// //         return "Array"
// //     }
// //     // map
// //     if (typeof(mapToArr(elem) === Array())){
// //         return "Array"
// //     }
// //     // array

// //     if (typeof(elem) === Array()){
// //         return "Array"
// //     }

    
// // }

// // const typeOfArr = (elem) => {
// //     if (typeof(mapToArr(objToMap(elem))) === Array()){
// //         return "Array"
// //     }
// //     // map
// //     if (typeof(mapToArr(elem) === Array())){
// //         return "Array"
// //     }
// //     // array

// //     if (typeof(elem) === Array()){
// //         return "Array"
// //     }

// //     return "error" + elem + "is unknown"
// // }

// // const typeOfObj = (elem) => {
// //     if (typeOfArr(elem) === "Array") {
// //         return "error"
// //     }

// //     if (typeof(elem) === "object") {
// //         return "Object"
// //     }

// //     if 
// //     return "error" + elem + "is unknown"
// // }

// // console.log(superTypeOf([]))

// const str = 'hello';
// const arr = [1, 2, 1, 3];
// const obj = { x: 45, y: 75, radius: 24 };
// const set = new Set();
// const map = new Map();
// set.add(1);
// set.add(2);
// set.add(1);
// set.add(3);
// map.set('a', 1);
// map.set('b', 2);
// map.set(3, 'c');
// map.set(4, 'd');

const arrToSet = (arr) => new Set(arr);

// Contract: Given a Set, return an array of its elements.
const setToArr = (set) => [...set];

// 2. Array <-> String
// Contract: Given an array, concatenate its elements into a string.
const arrToStr = (arr) => arr.join('');

// Contract: Given a string, return an array of its characters.
const strToArr = (str) => [...str];

// 3. String <-> Set
// Contract: Given a string, return a Set of its characters (duplicates removed).
const strToSet = (str) => new Set(str);

// Contract: Given a Set, return a string made by concatenating its elements.
const setToStr = (set) => arrToStr(setToArr(set));

// 4. Map <-> Object
// Contract: Given a Map, return an Object from its entries.
const mapToObj = (map) => Object.fromEntries(map);

// Contract: Given an Object, return a Map from its entries.
const objToMap = (obj) => new Map(Object.entries(obj));

// 5. Object <-> Array
// Contract: Given an object, return an array of its values.
const objToArr = (obj) => Object.values(obj);

// Contract: Given an array, return an object where keys are indices.
const arrToObj = (arr) => Object.fromEntries(arr.map((v, i) => [i, v]));

// 6. String to Object
// Contract: Given a string, return an object mapping each index to its character.
const strToObj = (str) =>
  Object.fromEntries([...str].map((char, index) => [index, char]));

// 7. Array -> Map
// (Less common but provided for completeness)
// Contract: Given an array of key-value pairs, return a Map.
const arrToMap = (arr) => new Map(arr);

// 8. Type detection function
// Contract: Given any element, return a string indicating its "super type".
const superTypeOf = (elem) => {
  if (Array.isArray(elem)) return 'Array';
  if (elem instanceof Map) return 'Map';
  if (elem instanceof Set) return 'Set';
  if (typeof elem === 'object' && elem !== null) return 'Object';
  if (typeof elem === 'string') return 'String';
  if (typeof elem === 'number') return 'Number';
  if (elem === null) return 'null';
  if (elem === undefined) return 'undefined';
  if (typeof elem === 'function') return 'Function';
  return 'Unknown';
};



