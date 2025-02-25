// const revMap = (map) => {
//     // the map should be unique ... should test for it but whatever ...
//     // turn it into an array and then map into the opposite and then return into a map
//     return new Map([...map].map(([k , v]) => [v , k])) //revisit
// }

// fuck

const revMap = (obj) => {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [value, key])
    );
};

const DNA2RNA = { 
    'G':'C', 
    'C':'G',
    'T':'A',
    'A':'U'
}

const RNA2DNA = revMap(DNA2RNA)

console.log(DNA2RNA['G'])

const RNA = (s) => {
    var r = "" 
    for (let i= 0 ; i < s.length ; i++ ){
        r += DNA2RNA[s[i]]
        console.log(DNA2RNA[s[i]])
        //console.log("next")
        
    }
    return r
}

console.log(RNA("GCTA"))

const DNA = (s) => {
    var d = "" 
    for (let i= 0 ; i < s.length ; i++ ){
        d += RNA2DNA[s[i]]
        console.log(RNA2DNA[s[i]])
        console.log("next")
        
    }
    return d

    

}

console.log(DNA("CGAU"))

