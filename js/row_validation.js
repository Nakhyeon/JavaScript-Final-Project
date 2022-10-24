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