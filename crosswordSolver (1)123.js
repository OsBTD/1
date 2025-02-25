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



    // TO DO : REPEAT THIS STEP , CREATE A FUNCTION FOR EXTRACTING SLOTS
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
        if (!wordsByLength[slot.length]) {
            console.log('Error');
            return 'Error';
        }
    }

    // Create a solution grid
    const solution = Array.from({ length: height }, (_, y) =>
        Array.from({ length: width }, (_, x) => grid[y][x] === '.' ? '.' : ' ')
    );

    // Backtracking to assign words to slots
    const solutions = [];
    const usedWords = new Set();

    const backtrack = (index) => {
        if (index === slots.length) {
            solutions.push(solution.map(row => row.slice()));
          // Instead of returning true, we simply return to continue searching
          return;
        }

        const slot = slots[index];
        const possibleWords = wordsByLength[slot.length] || [];

        for (const word of possibleWords) {
            if (usedWords.has(word)) continue;

            if (canPlaceWord(word, slot)) {
                placeWord(word, slot);
                usedWords.add(word);

                backtrack(index + 1); // WHEN DOES IT RETURN AN BACKTRACK

                removeWord(slot);
                usedWords.delete(word);
            }
        }
        
    };

    const canPlaceWord = (word, slot) => {
        const { row, col, direction, length } = slot;

        for (let i = 0; i < length; i++) {
            let y, x;
            
            if (direction === 'horizontal') {
                y = row;        // Stay on the same row
                x = col + i;    // Move right
            } 
            
            if (direction === 'vertical') {
                y = row + i;    // Move down
                x = col;        // Stay in the same column
            }

            if (solution[y][x] !== ' ' && solution[y][x] !== word[i]) {
                return false;
            }
        
        }
        
        return true;
    };

    const placeWord = (word, slot) => {
        const { row, col, direction, length } = slot;

        for (let i = 0; i < length; i++) {
            let y, x;
            
            if (direction === 'horizontal') {
                y = row;        // Stay on the same row
                x = col + i;    // Move right
            } 
            
            if (direction === 'vertical') {
                y = row + i;    // Move down
                x = col;        // Stay in the same column
            }

            solution[y][x] = word[i]
        }
    };

    const removeWord = (slot) => {
        const { row, col, direction, length } = slot;

        for (let i = 0; i < length; i++) {
            let y, x;
            
            if (direction === 'horizontal') {
                y = row;        // Stay on the same row
                x = col + i;    // Move right
            } 
            
            if (direction === 'vertical') {
                y = row + i;    // Move down
                x = col;        // Stay in the same column
            }

            solution[y][x] = ' ';
        }
    };

    backtrack(0);
    if (solutions.length !== 1) {
        console.log("Error: Expected one unique solution, but found", solutions.length);
        return "Error";
    }
    
    const solutionStr = solutions[0].map(row => row.join('')).join('\n');
    console.log(solutionStr);
    return solutionStr;

}


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
..........0....`
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

// const puzzle = '2000\n0...\n0...\n0...'
// const words = ['abba', 'assa']

crosswordSolver(puzzle, words)

