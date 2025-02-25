function crosswordSolver(emptyPuzzle, words) {
    // Check for duplicate words
    if (new Set(words).size !== words.length) {
        console.log('Error');
        return 'Error';
    }

    // Parse the puzzle into a grid
    const grid = emptyPuzzle.split('\n').map(row => [...row]);
    const height = grid.length;
    const width = height > 0 ? grid[0].length : 0;

    // Validate grid dimensions
    for (const row of grid) {
        if (row.length !== width) {
            console.log('Error');
            return 'Error';
        }
    }

    // Find all word slots (horizontal and vertical)
    const slots = [];

    // Find horizontal slots
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (grid[y][x] !== '.' && !isNaN(grid[y][x])) {
                if (x === 0 || grid[y][x - 1] === '.') {
                    let length = 0;
                    let tx = x;
                    while (tx < width && grid[y][tx] !== '.') {
                        length++;
                        tx++;
                    }
                    if (length >= 2) {
                        slots.push({ row: y, col: x, direction: 'horizontal', length });
                    }
                }
            }
        }
    }

    // Find vertical slots
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            if (grid[y][x] !== '.' && !isNaN(grid[y][x])) {
                if (y === 0 || grid[y - 1][x] === '.') {
                    let length = 0;
                    let ty = y;
                    while (ty < height && grid[ty][x] !== '.') {
                        length++;
                        ty++;
                    }
                    if (length >= 2) {
                        slots.push({ row: y, col: x, direction: 'vertical', length });
                    }
                }
            }
        }
    }

    // Check if the number of slots matches the number of words
    if (slots.length !== words.length) {
        console.log('Error');
        return 'Error';
    }

    // Group words by length
    const wordsByLength = {};
    for (const word of words) {
        const len = word.length;
        if (!wordsByLength[len]) wordsByLength[len] = [];
        wordsByLength[len].push(word);
    }

    // Check if there are enough words for each slot length
    for (const slot of slots) {
        if (!wordsByLength[slot.length] || wordsByLength[slot.length].length === 0) {
            console.log('Error');
            return 'Error';
        }
    }

    // Create a solution grid
    const solution = Array.from({ length: height }, (_, y) =>
        Array.from({ length: width }, (_, x) => grid[y][x] === '.' ? '.' : ' ')
    );

    // Backtracking to assign words to slots
    const usedWords = new Set();

    const backtrack = (index) => {
        if (index === slots.length) return true;

        const slot = slots[index];
        const possibleWords = wordsByLength[slot.length] || [];

        for (const word of possibleWords) {
            if (usedWords.has(word)) continue;

            if (canPlaceWord(word, slot)) {
                placeWord(word, slot);
                usedWords.add(word);

                if (backtrack(index + 1)) return true;

                removeWord(slot);
                usedWords.delete(word);
            }
        }
        return false;
    };

    const canPlaceWord = (word, slot) => {
        const { row, col, direction, length } = slot;

        for (let i = 0; i < length; i++) {
            const y = direction === 'horizontal' ? row : row + i;
            const x = direction === 'horizontal' ? col + i : col;

            if (solution[y][x] !== ' ' && solution[y][x] !== word[i]) {
                return false;
            }
        }
        return true;
    };

    const placeWord = (word, slot) => {
        const { row, col, direction, length } = slot;

        for (let i = 0; i < length; i++) {
            const y = direction === 'horizontal' ? row : row + i;
            const x = direction === 'horizontal' ? col + i : col;
            solution[y][x] = word[i];
        }
    };

    const removeWord = (slot) => {
        const { row, col, direction, length } = slot;

        for (let i = 0; i < length; i++) {
            const y = direction === 'horizontal' ? row : row + i;
            const x = direction === 'horizontal' ? col + i : col;
            solution[y][x] = ' ';
        }
    };

    if (!backtrack(0)) {
        console.log('Error');
        return 'Error';
    }

    const solutionStr = solution.map(row => row.join('')).join('\n');
    console.log(solutionStr);
    return solutionStr;
}

//module.exports = crosswordSolver;


// function crosswordSolver(emptyPuzzle, words) {
//     if (new Set(words).size !== words.length) {
//         console.log('Error');
//         return 'Error';
//     }

//     const grid = emptyPuzzle.split('\n').map(row => [...row]);
//     const height = grid.length;
//     const width = height > 0 ? grid[0].length : 0;

//     for (const row of grid) {
//         if (row.length !== width) {
//             console.log('Error');
//             return 'Error';
//         }
//     }

//     const solution = Array.from({ length: height }, (_, y) =>
//         Array.from({ length: width }, (_, x) => grid[y][x] === '.' ? '.' : ' ')
//     );

//     const wordSlots = [];

//     for (let y = 0; y < height; y++) {
//         for (let x = 0; x < width; x++) {
//             const cell = grid[y][x];
//             if (cell === '.' || !/\d/.test(cell)) continue;

//             const N = parseInt(cell, 10);

//             let canHorizontal = false;
//             let horizontalLength = 0;
//             if (x === 0 || grid[y][x - 1] === '.') {
//                 let tx = x;
//                 while (tx < width && grid[y][tx] !== '.') {
//                     horizontalLength++;
//                     tx++;
//                 }
//                 canHorizontal = horizontalLength >= 2;
//             }

//             let canVertical = false;
//             let verticalLength = 0;
//             if (y === 0 || grid[y - 1][x] === '.') {
//                 let ty = y;
//                 while (ty < height && grid[ty][x] !== '.') {
//                     verticalLength++;
//                     ty++;
//                 }
//                 canVertical = verticalLength >= 2;
//             }

//             const availableDirections = [];
//             if (canHorizontal) availableDirections.push('horizontal');
//             if (canVertical) availableDirections.push('vertical');

//             if (availableDirections.length !== N) {
//                 console.log('Error');
//                 return 'Error';
//             }

//             for (const dir of availableDirections) {
//                 const length = dir === 'horizontal' ? horizontalLength : verticalLength;
//                 wordSlots.push({ row: y, col: x, direction: dir, length });
//             }
//         }
//     }

//     if (wordSlots.length !== words.length) {
//         console.log('Error');
//         return 'Error';
//     }

//     const wordsByLength = {};
//     for (const word of words) {
//         const len = word.length;
//         if (!wordsByLength[len]) wordsByLength[len] = [];
//         wordsByLength[len].push(word);
//     }

//     const slotLengths = {};
//     for (const slot of wordSlots) {
//         const len = slot.length;
//         slotLengths[len] = (slotLengths[len] || 0) + 1;
//     }

//     for (const len in slotLengths) {
//         if (!wordsByLength[len] || wordsByLength[len].length < slotLengths[len]) {
//             console.log('Error');
//             return 'Error';
//         }
//     }

//     const usedWords = new Set();

//     const backtrack = (index) => {
//         if (index === wordSlots.length) return true;

//         const slot = wordSlots[index];
//         const possibleWords = wordsByLength[slot.length] || [];

//         for (const word of possibleWords) {
//             if (usedWords.has(word)) continue;

//             if (canPlaceWord(word, slot)) {
//                 placeWord(word, slot);
//                 usedWords.add(word);

//                 if (backtrack(index + 1)) return true;

//                 removeWord(slot);
//                 usedWords.delete(word);
//             }
//         }
//         return false;
//     };

//     const canPlaceWord = (word, slot) => {
//         const { row, col, direction, length } = slot;

//         if (word.length !== length) return false;

//         for (let i = 0; i < length; i++) {
//             const y = direction === 'horizontal' ? row : row + i;
//             const x = direction === 'horizontal' ? col + i : col;

//             const currentChar = solution[y][x];
//             if (currentChar !== ' ' && currentChar !== word[i]) {
//                 return false;
//             }
//         }
//         return true;
//     };

//     const placeWord = (word, slot) => {
//         const { row, col, direction, length } = slot;

//         for (let i = 0; i < length; i++) {
//             const y = direction === 'horizontal' ? row : row + i;
//             const x = direction === 'horizontal' ? col + i : col;
//             solution[y][x] = word[i];
//         }
//     };

//     const removeWord = (slot) => {
//         const { row, col, direction, length } = slot;

//         for (let i = 0; i < length; i++) {
//             const y = direction === 'horizontal' ? row : row + i;
//             const x = direction === 'horizontal' ? col + i : col;

//             let isUsed = false;
//             for (const otherSlot of wordSlots) {
//                 if (otherSlot === slot) continue;

//                 const oDir = otherSlot.direction;
//                 const oRow = otherSlot.row;
//                 const oCol = otherSlot.col;
//                 const oLen = otherSlot.length;

//                 if (oDir === 'horizontal') {
//                     if (y === oRow && x >= oCol && x < oCol + oLen) {
//                         isUsed = true;
//                         break;
//                     }
//                 } else {
//                     if (x === oCol && y >= oRow && y < oRow + oLen) {
//                         isUsed = true;
//                         break;
//                     }
//                 }
//             }

//             if (!isUsed) {
//                 solution[y][x] = ' ';
//             }
//         }
//     };

//     if (!backtrack(0)) {
//         console.log('Error');
//         return 'Error';
//     }

//     const solutionStr = solution.map(row => row.join('')).join('\n');
//     console.log(solutionStr);
//     return solutionStr;
// }

// //module.exports = crosswordSolver;

//   const emptyPuzzle = 
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
// ..........0....`
// const words = [
//   'sun',
//   'sunglasses',
//   'suncream',
//   'swimming',
//   'bikini',
//   'beach',
//   'icecream',
//   'tan',
//   'deckchair',
//   'sand',
//   'seaside',
//   'sandals',
// ]

// crosswordSolver(emptyPuzzle, words)

