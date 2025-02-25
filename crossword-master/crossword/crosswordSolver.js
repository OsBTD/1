function crosswordSolver(emptyPuzzle, words) {
    // Check for duplicate words
    if (new Set(words).size !== words.length) {
        console.log('Error: Duplicate words found.');
        return 'Error';
    }

    // Parse the puzzle into a grid
    const grid = emptyPuzzle.split('\n').map(row => [...row]);
    const height = grid.length;
    const width = grid[0]?.length || 0;

    // Validate grid dimensions
    for (const row of grid) {
        if (row.length !== width) {
            console.log('Error: Invalid grid dimensions.');
            return 'Error';
        }
    }

    // Function to count the number of '1' and '2' in the grid
    const countNumbers = (grid) => {
        let count = 0;
        for (let y = 0; y < grid.length; y++) {
            for (let x = 0; x < grid[y].length; x++) {
                if (grid[y][x] === '1')  {
                    count++;
                }
                if (grid[y][x] === '2') {
                    count += 2;
                }
            }
        }
        return count;
    };

    // Run this check before backtracking
    const totalNumbers = countNumbers(grid);
    if (totalNumbers !== words.length) {
        console.log("Error: The number of '1' and '2' in the grid doesn't match the number of words.");
        return;
    }

    // Find all word slots (horizontal and vertical)
    const slots = [];
    const directions = { horizontal: [0, 1], vertical: [1, 0] };

    // Extract word slots from the grid
    const extractSlots = () => {
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const gridValue = grid[y][x];
                if (gridValue === '1' || gridValue === '2') {
                    // Check horizontal slots
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
                    // Check vertical slots
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
    };

    // Initialize the solution grid
    const solution = Array.from({ length: height }, (_, y) =>
        Array.from({ length: width }, (_, x) => grid[y][x] === '.' ? '.' : ' ')
    );

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
            console.log('Error: Not enough words for slot size.');
            return 'Error';
        }
    }

    // Backtracking to assign words to slots
    const solutions = [];
    const usedWords = new Set();

    const backtrack = (index) => {
        if (index === slots.length) {
            solutions.push(solution.map(row => row.slice()));
            return;
        }

        const slot = slots[index];
        const possibleWords = wordsByLength[slot.length] || [];

        for (const word of possibleWords) {
            if (usedWords.has(word)) continue;

            if (canPlaceWord(word, slot)) {
                placeWord(word, slot);
                usedWords.add(word);

                backtrack(index + 1);
                if (solutions.length > 1) return;
                removeWord(slot);
                usedWords.delete(word);
            }
        }
    };

    // Function to check if a word can be placed in a slot
    const canPlaceWord = (word, slot) => {
        const { row, col, direction, length } = slot;

        // Ensure word starts at a valid position: 1 or 2
        const gridValue = grid[row][col];
        if (gridValue !== '1' && gridValue !== '2') {
            return false;
        }

        for (let i = 0; i < length; i++) {
            let y = row + directions[direction][0] * i;
            let x = col + directions[direction][1] * i;

            if (solution[y][x] !== ' ' && solution[y][x] !== word[i]) {
                return false;
            }
        }

        return true;
    };

    // Function to place word in a slot
    const placeWord = (word, slot) => {
        const { row, col, direction, length } = slot;

        for (let i = 0; i < length; i++) {
            let y = row + directions[direction][0] * i;
            let x = col + directions[direction][1] * i;
            solution[y][x] = word[i];
        }
    };

    // Function to remove word from a slot
    const removeWord = (slot) => {
        const { row, col, direction, length } = slot;

        for (let i = 0; i < length; i++) {
            let y, x;

            if (direction === 'horizontal') {
                y = row;
                x = col + i;
            }

            if (direction === 'vertical') {
                y = row + i;
                x = col;
            }

            solution[y][x] = ' ';
        }
    };

    // Run backtracking
    extractSlots();
    backtrack(0);

    if (words.length !== slots.length) {
        console.log("Error: words didn'f fit all the slots possible", solutions)
        return;
    }
    if (solutions.length !== 1) {
        console.log("Error: Expected one unique solution, but found", solutions.length, solutions);
        return;
    }

    // Output the solution as a string
    const solutionStr = solutions[0].map(row => row.join('')).join('\n');
    console.log(solutionStr);
    return;
}

const puzzle = `2010
0..0
1000
0..0`;

const words = ['casa', 'alan', 'ciao', 'anta'];

crosswordSolver(puzzle, words);
