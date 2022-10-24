function colValidation(size,values) {
    let colval = [];
    let colrow = [];
    let check = [];


    for(let j = 0; j < size; j++){
        for(let i = 0; i < size; i++){
            colrow.push(values[i][j]);
        }
        colval.push(colrow);
        colrow=[];
    }


    for (var rowIdx = 0; rowIdx < size; rowIdx++) {
        let validRow = [];
        let row = colval[rowIdx];
        let boolRow = [];
        for (var _ = 0; _ < size; _++) {
            boolRow.push(false);
        }
        validRow = findDuplicateNumber(row, boolRow);
        check.push(validRow);
    }

    
    let recolval = check;
    let output = [];
    let colrow2 = [];
    for(let j = 0; j < size; j++){
        for(let i = 0; i < size; i++){
            colrow2.push(recolval[i][j]);
        }
        output.push(colrow2);
        colrow2=[];
    }


    function findDuplicateNumber(row, boolRow) {
        for (firstIdx = 0; firstIdx < row.length; firstIdx++) {
            for (secondIdx = 0; secondIdx < row.length; secondIdx++) {
                if (row[firstIdx] == row[secondIdx] && firstIdx != secondIdx) {
                    boolRow.splice(firstIdx, 1, true);
                }
            }
        }
        return boolRow;
    }
    
    
    return output;
}




// function colValidation(size,values) {
//     let nums = [];

//     for(let j = 0; j < size; j++){
//         for(let i = 0; i < size; i++){
//             if(nums.includes(values[j][i])){
//                 return true;
//             }else{
//                 nums.push(values[j][i]);
//             }
//         }return false;

//     }
//     return colValidation(size,values);
// }