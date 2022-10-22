function colValidation(size,values) {
    let nums = [];

    for(let j = 0; j < size; j++){
        for(let i = 0; i < size; i++){
            if(nums.includes(values[j][i])){
                return true;
            }else{
                nums.push(values[j][i]);
            }
        }return false;

    }
    return colValidation(size,values);
}