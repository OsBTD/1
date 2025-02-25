// const words = (s) => {
//     var words = []
//     var word = ""
//     for (let i = 0 ; i < s.length; i++) {
//         if (s[i] !== " "){
//             word += s[i]
//         }

//         if (s[i] === " " && word.length !== 0){
//             if (s[i] == " "){words.push("")}
//             words.push(word)
//             word = ""
//         }
//     }

//     if (word.length !== 0){
//         words.push(word)
//     }
//     return words
// }

const words = (s) => {
    let result = [];
    let word = "";
    for (let i = 0; i < s.length; i++) {
      if (s[i] === " ") {
        result.push(word);
        word = "";
      } else {
        word += s[i]; // ok ...
      }
    }
    result.push(word);
    return result;
  };
  
console.log(words("Hello  world")); // [ 'Hello', '', 'world' ]
  

console.log(words("hello  hi  hi  hi"))

const sentence = (words) => {
    var sentence = ""// this is a mistake in js cause sentence should be defined or initialised

    for (let i = 0; i < words.length; i++) { //c2 in english my ass
        if (i !== words.length -1){
            sentence += words[i]+ " "
        } else {
            sentence += words[i]
        }
        
    }

    return sentence // need to remove the last space
}

console.log(sentence(["first"," ", "last"]))
console.log(sentence(["first","last"]) === "first last")

const yell = (str) => {
    return str.toUpperCase()
}

const whisper = (str) => {
   return "*"+str.toLowerCase()+"*"
}

const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1,str.length).toLowerCase()
}

console.log(capitalize('hAAAAhAHAHA'))
console.log(yell('hAAAAhAHAHA'))
console.log(whisper('hAAAAhAHAHA'))



