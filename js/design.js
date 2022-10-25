//set the basic tabe color by boxes
let basicColor = (size, values) => {
    let Size = Math.sqrt(size);

    let length = [];
    let length2 = [];
    let j = 0
    for (let o = 0; o < Size; o++) {
        for (let i = 0; i < Size; i++) {
            length.push(j)
        }
        j++;
    }

    let w = 1;
    for (let o = 0; o < Size; o++) {
        for (let i = 0; i < Size; i++) {
            length2.push(w)
        }
        w++;
    }

    console.log(length);
    console.log(length2);

    let length3 = [];
    for (let o = 0; o < Size / 2; o++) {
        for (let o = 0; o < Size; o++) {
            length3.push(length)
        }
        for (let o = 0; o < Size; o++) {
            length3.push(length2)
        }
    }

    console.log(length3);

    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if (length3[i][j] % 2 == 0) {
                let input = document.getElementsByClassName(`${i}_${j}`)[0];
                input.classList.add('basic')
            }
        }
    }
}

//chage background of element witch contain a wrong number
let chageCh = (boxresult, rowresult, colresult) => {
    let message = document.getElementsByClassName("resultmessage")[0];
    let message2 = document.getElementsByClassName("doit")[0];

    function check(result, addClass) {
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result.length; j++) {
                if (result[i][j] == true) {
                    let td = document.getElementsByClassName(`${i}_${j}`)[0];
                    td.classList.add(addClass)
                }
            }
        }
    }

    check(boxresult, "red")
    check(rowresult, "row")
    check(colresult, "col")

    function errorcounter(result) {
        let counter = 0;
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result.length; j++) {
                if (result[i][j] == true) {
                    counter++;
                }
            }
        }
        return counter;
    }

    let boxcounter = errorcounter(boxresult);
    let rowcounter = errorcounter(rowresult);
    let colcounter = errorcounter(colresult);

    let totalError = parseInt(boxcounter) + parseInt(rowcounter) + parseInt(colcounter);

    if (totalError == 0) {
        message.innerText = "Your Sudoku is PERPECT!!"
        message2.innerText = "";
    } else {
        message.innerText = `You have ${boxcounter} Errors in boxs, ${rowcounter} in rows and ${colcounter} in columns`;
        message2.innerText = "Correct the mistakes and validate the Sudoku again.";
    }
}