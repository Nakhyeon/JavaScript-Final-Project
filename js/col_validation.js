
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
    }return nums;
};
