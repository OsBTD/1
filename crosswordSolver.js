const emptyPuzzle = `2001
0..0
1000
0..0`


function Parse(str) {
    let splitted = str.split("\n")
    let coordinates = []
    for (let y = 0; y < splitted.length; y++) {
        for (let x = 0; x < splitted[y].length; x++) {
            coordinates.push({
                x: x,
                y: y,
                value: splitted[y][x]
            })

        }
    }

    return coordinates
}

console.log(Parse(emptyPuzzle));
