let chageCh = (boxresult,rowresult,colresult) => {
    let message = document.getElementsByClassName("resultmessage")[0];
    let message2 = document.getElementsByClassName("doit")[0];

    function check (result,addClass){
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result.length; j++) {
                if(result[i][j] == true){
                    let td = document.getElementsByClassName(`${i}_${j}`)[0];
                    td.classList.add(addClass)
                }
            }
        }
    }
    
    check (boxresult,"red")
    check (rowresult,"row")
    check (colresult,"col")


    function errorcounter(result){
        let counter = 0;
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result.length; j++) {
                if(result[i][j] == true){
                    counter++;
                }
            }
        }
        return counter;
    }


    let boxcounter = errorcounter(boxresult);
    let rowcounter = errorcounter(rowresult);
    let colcounter = errorcounter(colresult);


    let totalError = parseInt(boxcounter)+parseInt(rowcounter)+parseInt(colcounter);


    if(totalError ==0){
        message.innerText = "Your Sudoku is PERPECT!!"
        message2.innerText = "";
    }else{
        message.innerText = `You have ${boxcounter} Errors in boxs, ${rowcounter} in rows and ${colcounter} in columns`;
        message2.innerText = "Correct the mistakes and press RESET to validate the Sudoku again.";
    }
}


