function colValidation(size, values) {
    let array = [];
    let row = [];
    let validateArray = [];
    let output = [];

    // Convert the columns into rows
    for (let rowIdx = 0; rowIdx < size; rowIdx++) {
        for (let value = 0; value < size; value++) {
            row.push(values[value][rowIdx]);
        }
        array.push(row);
        row = [];
    }

    // Convert the array to Col
    function arrayToCol(array) {
        let arrayCol = [];
        for (let rowIdx = 0; rowIdx < array.length; rowIdx++) {
            for (let value = 0; value < array.length; value++) {
                row.push(array[value][rowIdx]);
            }
            arrayCol.push(row);
            row = [];
        }
        return arrayCol;
    }

    // Check for duplicates
    function rowValidation(size, values) {
        let output = [];
        for (var rowIdx = 0; rowIdx < size; rowIdx++) {
            let validRow = [];
            let row = values[rowIdx];
            let boolRow = [];
            for (var _ = 0; _ < size; _++) {
                boolRow.push(false);
            }
            validRow = findDuplicateNumber(row, boolRow);
            output.push(validRow);
        }

        function findDuplicateNumber(row, boolRow) {
            for (firstIdx = 0; firstIdx < row.length; firstIdx++) {
                for (secondIdx = 0; secondIdx < row.length; secondIdx++) {
                    if (row[firstIdx] == row[secondIdx] && firstIdx != secondIdx) {
                        boolRow.splice(firstIdx, 1, true);
                    }
                }
            }
            return boolRow
        }
        return output
    }

    validateArray = rowValidation(size, array);
    output = arrayToCol(validateArray);
    return output;
}
