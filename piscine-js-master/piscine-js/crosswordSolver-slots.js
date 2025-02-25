// const puzzle = 
// `...1...........
// ..1000001000...
// ...0....0......
// .1......0...1..
// .0....100000000
// 100000..0...0..
// .0.....1001000.
// .0.1....0.0....
// .10000000.0....
// .0.0......0....
// .0.0.....100...
// ...0......0....
// ..........0....`;

// console.log(slots(puzzle));

// function slots(grid) {
//     const slots = [];
//     const rows = grid.split("\n");
//     const numRows = rows.length;
//     const numCols = rows[0].length;
//     const regexp = /[0-2]{2,}/g; // Sequences of 2+ digits (0,1,2)

//     // **Row-wise search**
//     for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
//         let row = rows[rowIndex];
//         let match;
//         while ((match = regexp.exec(row)) !== null) {
//             slots.push({ type: "row", row: rowIndex, col: match.index, value: match[0] });
//         }
//     }

//     // **Column-wise search**
//     for (let colIndex = 0; colIndex < numCols; colIndex++) {
//         let colString = rows.map(row => row[colIndex]).join(""); // Extract column as string
//         let match;
//         while ((match = regexp.exec(colString)) !== null) {
//             slots.push({ type: "col", row: match.index, col: colIndex, value: match[0] });
//         }
//     }

//     return slots;
// }

function canCreateCrossword(grid, wordList) {
    const rows = grid.split("\n");
    const numRows = rows.length;
    const numCols = rows[0].length;
    const regexp = /[0-2]{2,}/g; // Words: sequences of 2+ digits (0,1,2)
    
    let slots = new Set(); // Store all slot words

    // **Extract row words**
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        let row = rows[rowIndex];
        let match;
        while ((match = regexp.exec(row)) !== null) {
            slots.add(match[0]);
        }
    }

    // **Extract column words**
    for (let colIndex = 0; colIndex < numCols; colIndex++) {
        let colString = rows.map(row => row[colIndex]).join(""); // Extract column as string
        let match;
        while ((match = regexp.exec(colString)) !== null) {
            slots.add(match[0]);
        }
    }

    // **Compare extracted slots with provided word list**
    const validWords = new Set(wordList);
    return [...slots].every(word => validWords.has(word));
}

// **Example Usage**
const puzzle = 
`...1...........
..1000001000...
...0....0......
.1......0...1..
.0....100000000
100000..0...0..
.0.....1001000.
.0.1....0.0....
.10000000.0....
.0.0......0....
.0.0.....100...
...0......0....
..........0....`;

const words = [
  'sun',
  'sunglasses',
  'suncream',
  'swimming',
  'bikini',
  'beach',
  'icecream',
  'tan',
  'deckchair',
  'sand',
  'seaside',
  'sandals',
]


console.log(canCreateCrossword(puzzle, words)); // true or false
