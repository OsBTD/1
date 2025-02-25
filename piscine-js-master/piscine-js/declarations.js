// escapeStr: a string which contains the following special characters: `, \, /, " and '.

const backtick = "`"
const single_quote = "'"
const double_quote = '"'
const backslash = "\\" // needs espcaping
const slash = "/"

const escapeStr = `This string contains all special characters : ${backtick} and ${single_quote} and ${double_quote} and ${slash} and ${backslash} and ${slash}`;


//console.log(escapeStr)

// let me test my theory
// arr: an array containing the values 4 and '2'.

const four_int = 4
const two_string = '2'

const arr = [four_int , two_string]  // try to console log it


Object.freeze(arr)


// obj: an object containing primitive values:

const obj = {str: "string", num: 5, bool:true, undef: undefined}

Object.freeze(obj)

// str: with a string value.
// num: with a number value.
// bool: with a boolean value.
// undef: with a undefined value.
// nested: an object containing:

const obj2 = {str: "string", num: 5, bool:true}

Object.freeze(obj2)

const arr2 = [4, undefined , '2']

Object.freeze(arr2)

const nested = {arr:arr2, obj:obj2} // try to console log it

//nested.arr.push('hot stuff') --> forgot to remove this totally deserved

//console.log(nested)

Object.freeze(nested)

//console.log(nested)

// arr: an array of 3 values: 4, undefined and '2'.
// obj: an object with 3 properties
// str with a string value.
// num with a number value.
// bool with a boolean value.

// nested.obj.str = "modified boohoo"

// console.log(nested)




//nested, arr and obj must be frozen, so that their elements or properties cannot be changed.

//nested.arr[0] = 0

//console.log(nested) // the first value of the array effectively became zero so const oesnt do shit

// i could have started by defining units say {const four = 4} and then created the nested object like thi