// Professor Davoodis Code
function addition() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) + Number(second);
    document.getElementById("output").innerHTML = String(result);
}

function subtraction() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) - Number(second);
    document.getElementById("output").innerHTML = String(result);
}

function multiplication() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) * Number(second);
    document.getElementById("output").innerHTML = String(result);
}

function division() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = Number(first) / Number(second);
    document.getElementById("output").innerHTML = String(result);
}

function power() {
    let first = document.getElementById("first-number").value;
    let second = document.getElementById("second-number").value;
    let result = 1;
    for (let i = 0; i < Number(second); i++) {
        result *= Number(first);
    }

function clear(){
        document.getElementById("first-number").value = "";
        document.getElementById("second-number").value = "";
        document.getElementById("output").innerHTML = "";

}


    document.getElementById("output").innerHTML = String(result);
}
