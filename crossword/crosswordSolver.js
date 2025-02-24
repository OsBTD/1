const emptyPuzzle =
    `2001
0..0
1000
0..0`

        `casa
i..l
anta
o..n`

const words = ['casa', 'alan', 'ciao', 'anta']


function Parse(str) {
    let splitted = str.split("\n")
    let coordinates = []
    let slots = []
    for (let y = 0; y < splitted.length; y++) {
        for (let x = 0; x < splitted[y].length; x++) {
            coordinates.push({
                'value': splitted[y][x],
                'x': x,
                'y': y,
                'length X': splitted[x].length,
                'lenght Y': splitted.length
            })

        }

    }

    for (const e of coordinates) {
        for (let i = coordinates['lengthY']; i >= 0; i--) {
if coordinates
        }
    }
    return coordinates
}

console.log(Parse(emptyPuzzle));
