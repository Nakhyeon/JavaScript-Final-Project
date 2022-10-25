// function colValidation(size,values) {
//     let colval = [];
//     let colrow = [];
//     let check = [];


//     for(let j = 0; j < size; j++){
//         for(let i = 0; i < size; i++){
//             colrow.push(values[i][j]);
//         }
//         colval.push(colrow);
//         colrow=[];
//     }


//     for (var rowIdx = 0; rowIdx < size; rowIdx++) {
//         let validRow = [];
//         let row = colval[rowIdx];
//         let boolRow = [];
//         for (var _ = 0; _ < size; _++) {
//             boolRow.push(false);
//         }
//         validRow = findDuplicateNumber(row, boolRow);
//         check.push(validRow);
//     }

    
//     let recolval = check;
//     let output = [];
//     let colrow2 = [];
//     for(let j = 0; j < size; j++){
//         for(let i = 0; i < size; i++){
//             colrow2.push(recolval[i][j]);
//         }
//         output.push(colrow2);
//         colrow2=[];
//     }


//     function findDuplicateNumber(row, boolRow) {
//         for (firstIdx = 0; firstIdx < row.length; firstIdx++) {
//             for (secondIdx = 0; secondIdx < row.length; secondIdx++) {
//                 if (row[firstIdx] == row[secondIdx] && firstIdx != secondIdx) {
//                     boolRow.splice(firstIdx, 1, true);
//                 }
//             }
//         }
//         return boolRow;
//     }
    
    
//     return output;
// }



    


function colValidation(size,values) {
    let nums = [];
    let array = [];
    // let output = [];
    for(let rowIdx = 0; rowIdx < size; rowIdx++){
        for(let value = 0; value < size; value++){
            array.push(values[value][rowIdx]);
        }  
        nums.push(array);
        array = [];
    }

    

    let output = [];
    for (var colIdx = 0; colIdx < nums.length; colIdx++) {
        let validCol = [];
        let col = nums;
        let boolCol = [];
        for (var _ = 0; _ < col.length; _++) {
            boolCol.push(false);
        }
        validCol = findDuplicateNumber(col, boolCol);
        output.push(validCol);
    }

    function findDuplicateNumber(col, boolCol) {
        for (firstIdx = 0; firstIdx < col.length; firstIdx++) {
            for (secondIdx = 0; secondIdx < col.length; secondIdx++) {
                if (col[firstIdx] == col[secondIdx] && firstIdx != secondIdx) {
                    boolCol.splice(firstIdx, 1, true);
                }
            }
        }
        return boolCol;
    }
    return output;
}
