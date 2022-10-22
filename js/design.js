let chageCh = (boxresult) => {
    let message = document.getElementsByClassName("resultmessage")[0];
    for (let i = 0; i < boxresult.length; i++) {
        for (let j = 0; j < boxresult.length; j++) {
            if(boxresult[i][j] == true){
                let td = document.getElementsByClassName(`${i}_${j}`)[0];
                td.classList.add('red');
            }
        }
    }
    let counter = 0;
    for (let i = 0; i < boxresult.length; i++) {
        for (let j = 0; j < boxresult.length; j++) {
            if(boxresult[i][j] == true){
                counter++;
            }
        }
    }
    message.innerText = `You have ${counter} Errors`
}