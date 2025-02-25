const emptcolumnIndexPuzzle = `2001\n0..0\n1000\n0..0`;

const puzzle1 = '1000\n0..0\n0000\n0..0';
const words = ['casa', 'alan', 'ciao', 'anta'];

let solution = [];

function puzzleSolve(puzzle, modifiedPuzzle, arrWords) {
    if (arrWords.length === 0) {
        solution.push(modifiedPuzzle);
        return;
    }

    for (let i = 0; i < puzzle.length; i++) {
        for (let j = 0; j < puzzle[i].length; j++) {
            let deepC = deepCopy(modifiedPuzzle);
            let deepCp1 = deepCopy(modifiedPuzzle);

            let modifiedH = canH(deepC, i, j, arrWords[0]);
            if (modifiedH !== 'error') {
                let cpPuzzle1 = deepCopy(puzzle);
                cpPuzzle1[i][j] = cpPuzzle1[i][j] === '2' ? '1' : '0';
                puzzleSolve(cpPuzzle1, modifiedH, arrWords.slice(1));
            }

            let modifiedV = canV(deepCp1, i, j, arrWords[0]);
            if (modifiedV !== 'error') {
                let cpPuzzle1 = deepCopy(puzzle);
                cpPuzzle1[i][j] = cpPuzzle1[i][j] === '2' ? '1' : '0';
                puzzleSolve(cpPuzzle1, modifiedV, arrWords.slice(1));
            }
        }
    }
}

function checkFormat(words, puzzle) {
    if (typeof puzzle !== 'string' || !Array.isArray(words)) {
        return false;
    }
    const rowIndexs = puzzle.split('\n');
    const validChars = new Set(['0', '1', '2', '.', '\n']);

    for (let char of puzzle) {
        if (!validChars.has(char)) {
            return false;
        }
    }

    const rowIndexLength = rowIndexs[0].length;
    for (let rowIndex of rowIndexs) {
        if (rowIndex.length !== rowIndexLength) {
            return false;
        }
    }

    if (!/[012]/.test(puzzle)) {
        return false;
    }

    const uniqueWords = new Set(words);
    return uniqueWords.size === words.length;
}

function canH(grid, rowIndex, columnIndex, word) {
    if (columnIndex + word.length > grid[rowIndex].length) {
        return 'error';
    }

    for (let i = columnIndex; i < columnIndex + word.length; i++) {
        if (grid[rowIndex][i] === '1' || grid[rowIndex][i] === '0' || grid[rowIndex][i] === '2') {
            grid[rowIndex][i] = word[i - columnIndex];
        } else if (grid[rowIndex][i] !== word[i - columnIndex]) {
            return 'error';
        }
    }
    return grid;
}

function canV(grid, rowIndex, columnIndex, word) {
    if (rowIndex + word.length > grid.length) {
        return 'error';
    }

    for (let i = rowIndex; i < rowIndex + word.length; i++) {
        if (grid[i][columnIndex] === '1' || grid[i][columnIndex] === '2' || grid[i][columnIndex] === '0') {
            grid[i][columnIndex] = word[i - rowIndex];
        } else if (grid[i][columnIndex] !== word[i - rowIndex]) {
            return 'error';
        }
    }
    return grid;
}

function arr(arg) {
    return arg.map(row => row.split(""));
}

function deepCopy(puzzle) {
    return puzzle.map(row => row.slice());
}

const arrayPuzzle = arr(puzzle1.split('\n'));
puzzleSolve(arrayPuzzle, arrayPuzzle, words);

console.log(checkFormat(words, puzzle1));
console.log(solution);
