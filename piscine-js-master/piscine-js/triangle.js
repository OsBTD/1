const triangle = (symbol,height) => {
    var line = ''
    var triangle = ''
    for (let i= 0 ; i < height ; i++){
        line += symbol 

        triangle += line
        
        if (i < height - 1) {
            triangle += "\n"
        }
        //stars.push(line)
    }
    return triangle
}

console.log(triangle('*',5))