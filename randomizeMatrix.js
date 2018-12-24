let matrix = [
    [1, 2],
    [3, 4]
];

// console.log(randomizeMatrix(matrix));
function readValues(matrix) {
    let values = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            values.push(matrix[i][j]);
        }
    }
    return values;
}

function generateRandomizedMatrix(matrix, values) {
    let transformedMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        let column = [];
        for (let j = 0; j < matrix[i].length; j++) {
            let randomIndex = Math.floor(Math.random() * values.length);
            column.push(values[randomIndex]);
            values.splice(randomIndex, 1);
        }
        transformedMatrix.push(column);
    }
    return transformedMatrix;
}

function randomizeMatrix(matrix) {
    let values = readValues(matrix);
    return generateRandomizedMatrix(matrix, values);
}

console.log(randomizeMatrix(matrix));

// This code has been written with the help of ItClub experts.