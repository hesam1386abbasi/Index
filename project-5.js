function clear1() {
    let output = document.getElementById("output");
    output.value = '0';
}
function display (value) {
    document.getElementById("output").value += value;
    document.getElementById("total").disabled = false;
    document.getElementById("subtraction").disabled = false;
    document.getElementById("multiplication").disabled = false;
    document.getElementById("division").disabled = false;
}
function calculate() {
    let p = document.getElementById("output").value;
    document.getElementById("output").value = eval(p);
}
function total() {
    document.getElementById("total").disabled = true;
    document.getElementById("subtraction").disabled = true;
    document.getElementById("multiplication").disabled = true;
    document.getElementById("division").disabled = true;
}
function subtraction() {
    document.getElementById("total").disabled = true;
    document.getElementById("subtraction").disabled = true;
    document.getElementById("multiplication").disabled = true;
    document.getElementById("division").disabled = true;
}
function multiplication () {
    document.getElementById("multiplication").disabled = true;
    document.getElementById("division").disabled = true;
    document.getElementById("total").disabled = true;
}
function division () {
    document.getElementById("multiplication").disabled = true;
    document.getElementById("division").disabled = true;
    document.getElementById("total").disabled = true;
}