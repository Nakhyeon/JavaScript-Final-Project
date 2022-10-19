function boxValidation(size, values) {
    var output = [];

    // define box size
    var boxSize = Math.sqrt(size);

    // convert box to array
    function boxToArray(size, values, boxSize) {
        var boxArray = [];
        for (var idx = 0; idx < boxSize; idx++) {
            var singleBox = [];
            for (var row = 0; row < size; row++) {
                singleBox.push(values[row].slice(boxSize * idx, boxSize * (idx + 1)));
                if (singleBox.length == boxSize) {
                    var singleArray = [];
                    for (var i = 0; i < singleBox.length; i++) {
                        singleArray = singleArray.concat(singleBox[i]);
                    }
                    boxArray.push(singleArray);
                    singleBox = [];
                }
            }
        }
        return boxArray;
    }

    // convert array to box
    function arrayToBox(size, validateArray, boxSize) {
        var arrayBox = [];
        // init arrayBox
        for (var idx = 0; idx < size; idx++) {
            arrayBox.push([]);
        }
        // set row index for revert
        var rowIndex = 0;
        for (var idx = 0; idx < size; idx++) {
            for (var row = 0; row < boxSize; row++) {
                arrayBox[row + (rowIndex * boxSize)].push(validateArray[idx].slice(boxSize * row, boxSize * (row + 1)));
            }
            rowIndex++;
            if (rowIndex == boxSize) {
                rowIndex = 0;
            }
        }
        // reduce dimension
        var box = [];
        for (var idx = 0; idx < arrayBox.length; idx++) {
            var singleBox = [];
            for (var row = 0; row < arrayBox[idx].length; row++) {
                singleBox = singleBox.concat(arrayBox[idx][row]);
            }
            box.push(singleBox);
        }
        return box;
    }

    // validate array (detect duplicates)
    function validater(array) {
        var validateArray = [];
        for (var i = 0; i < array.length; i++) {
            var validateMap = new Map();
            var rowArray = [];
            for (var j = 0; j < array[i].length; j++) {
                if (validateMap.has(array[i][j])) {
                    rowArray.push(true);
                    var col = validateMap.get(array[i][j])[1][0];
                    // update duplicated value
                    rowArray[col] = true;
                } else {
                    rowArray.push(false);
                    // save position
                    validateMap.set(array[i][j], [[i], [j]]);
                }
            }
            validateArray.push(rowArray);
        }
        return validateArray;
    }

    boxArray = boxToArray(size, values, boxSize);
    // console.log("boxArray");
    // console.log(boxArray);

    validateArray = validater(boxArray);
    // console.log("validateArray");
    // console.log(validateArray);

    output = arrayToBox(size, validateArray, boxSize);
    console.log("boxValidation output");
    console.log(output);

    return output;
}