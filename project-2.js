function FindFibonacciSequence () {
    let n = parseInt(document.getElementById("number").value);
    let num1 = 1;
    let num2 = 1;
    let x = num1 + num2;
    let count = 2;
    while (count !== n)
    {
        num1 = num2;
        num2 = x;
        x = num1 + num2;
        count ++;
    }
    document.getElementById("text").innerText = num2.toString();
}