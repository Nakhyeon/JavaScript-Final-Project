// render select box options
function renderSelectBox() {
    const select = document.getElementById('type');
    // Get files from the server folder
    $.ajax({
        url: './data/',
        success: function (data) {
            // Parse the data
            $(data).find("a").attr("href", function (i, val) {
                if (val.match(/\.json$/)) {
                    // Add optopm to select box without .json and /data/
                    select.innerHTML += `<option value="${val}">${val.replace(
                        /\/data\//, '').replace(/\.json$/, '')}</option>`;
                }
            });
        }
    });
}
renderSelectBox();

//select sudoku fils
let source_path;
function selectsudoku() {
    let type = document.getElementById("type").value
    $($(".valbtn")[0]).attr("disabled", false);
    source_path = `${type}`;
    // console.log(`source_path: ${source_path}`);
    loadJson(source_path);
    let selmessage = document.getElementsByClassName("selectMessage")[0];
    selmessage.innerText = "";
    $(".valbtn ").addClass("vhover");
    // reset messages
    let message = document.getElementsByClassName("resultmessage")[0];
    let msgDoit = document.getElementsByClassName("doit")[0];
    message.innerText = `Let's check if your Sudoku is right.`;
    msgDoit.innerText = "";
}

// table pop and the validate the sudoku & get the results in each variables.
let boxresult = {};
let rowresult = {};
let colresult = {};
let loadJson = (source_path) => {
    const xmlHTTP = new XMLHttpRequest();
    xmlHTTP.onload = function () {
        let output = JSON.parse(this.responseText)[0];
        // console.log(output);
        size = output.size;
        values = output.values;
        //box validate
        boxresult = boxValidation(size, values);
        // console.log("boxValidation output");
        // console.log(boxresult);
        //row validate
        rowresult = rowValidation(size, values);
        // console.log("rowValidation output");
        // console.log(rowresult);
        //column validate
        colresult = colValidation(size, values);
        // console.log("column output");
        // console.log(colresult);
        tablePop(values, size);
    }
    xmlHTTP.open("GET", source_path, true);
    xmlHTTP.send();
}

let size, values;
let tablePop = (values, size) => {
    const tabled = document.querySelector("table");
    tabled.parentNode.removeChild(tabled)
    const table = document.querySelector(".table");
    let tablemake = document.createElement("table")
    for (let rowidx in values) {
        let tr = document.createElement("tr");
        for (let colIdx in values[rowidx]) {
            let td = document.createElement("input");
            td.value = values[rowidx][colIdx];
            // add class to use it later
            td.className = `sudoku ${rowidx}_${colIdx}`;
            tr.appendChild(td);
            tablemake.appendChild(tr);
            table.appendChild(tablemake);
        }
    }
    //design.js --- set the basic tabe color by boxes
    basicColor(size, values);
}

// call validation function 
function validation() {
    //design.js --- chage background of element witch contain a wrong number
    chageCh(boxresult, rowresult, colresult);
    $($(".valbtn")).attr("disabled", true);
    let selmessage = document.getElementsByClassName("selectMessage")[0];
    selmessage.innerText = "";
    // console.log($("input"));
    $("input.red.row ").addClass("dubble");
    $("input.red.col ").addClass("dubble");
    $("input.row.col ").addClass("dubble");
    $("input.red.row.col ").addClass("tripple");
    $(".valbtn ").removeClass("vhover");
}

//reset  -  remove classes which is given to inputs when validation happen
function resetTable() {
    $("input").removeClass("red");
    $("input").removeClass("row");
    $("input").removeClass("col");
    $("input").removeClass("dubble");
    $("input").removeClass("tripple");
    $(".valbtn ").addClass("vhover");
    let message = document.getElementsByClassName("resultmessage")[0];
    message.innerText = `Let's check if your Sudoku is right.`;
    $($(".valbtn")).attr("disabled", false);

    //reset values
    let val = [];
    let row = [];

    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let td = parseInt(document.getElementsByClassName(`${i}_${j}`)[0].value);
            row.push(td);
        }
        val.push(row);
        row = [];
    }

    values = val;
    boxresult = boxValidation(size, values);
    rowresult = rowValidation(size, values);
    colresult = colValidation(size, values);
    tablePop(values, size);
}

// alert message
function meChage() {
    let selmessage = document.getElementsByClassName("selectMessage")[0];
    selmessage.innerText = `Click SELECT!!`;
    $($(".valbtn")[0]).attr("disabled", true);
    $($(".selbtn")[0]).attr("disabled", false);
    $(".valbtn ").removeClass("vhover");
}

// tmp alert message
function tmpAlert(msg, duration) {
    var div = document.createElement("div");
    var p = document.createElement("p");
    var divStyle = "display:flex;justify-content:center;position:fixed;top:50%;width:100%;padding:2%;border-radius:10px;";
    var pStyle = "text-align:center;background-color:rgba(0,0,0,0.5);color:white;font-size:20px;";
    div.setAttribute("style", divStyle);
    p.setAttribute("style", pStyle);
    p.innerHTML = msg;
    div.appendChild(p);
    setTimeout(function () {
        div.parentNode.removeChild(div);
    }, duration);
    document.body.appendChild(div);
}

// if input keydown, real time validation
$(document).on("keyup", "input", function () {
    if (this.value != "") {
        if (this.value < 1 || this.value > size) {
            this.value = "";
            tmpAlert("Please enter a number between 1 and " + size, 2000);
        } else {
            resetTable();
            validation();
        }
    }
});
