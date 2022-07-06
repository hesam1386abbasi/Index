function Array2DRow () {
    let item =  [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    let count1=0;
    let count2=0;
    while (count1 <= 2)
    {
        while (count2 <= 2)
        {
            document.getElementById("text-row").innerHTML += item [count1][count2].toString();
            count2 ++;
        }
        count1 ++;
        count2 = 0;
    }
}
function Array2DColumn () {
    let item =  [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    let count1=0;
    let count2=0;
    while (count1 <= 2)
    {
        while (count2 <= 2)
        {
            document.getElementById("text-column").innerHTML += item [count2][count1].toString();
            count2 ++;
        }
        count1 ++;
        count2 = 0;
    }
}