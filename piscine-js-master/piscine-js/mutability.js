// const person = {
//     name: 'Rick',
//     age: 77,
//     country: 'US',
//   }

  
const clone1 = {...person}

//Object.freeze(clone1)

const clone2 = {...person}

//Object.freeze(clone2)

const samePerson = person

person.age += 1
person.country = 'FR'
//person.name = "Red" ... hhh ya oueld l3ebd !!!

// console.log(samePerson)
// console.log(clone1)
// console.log(clone2)


