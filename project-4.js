function input () {
    let input = [{"name":"a", "value":1}, {"name":"b", "value":3}, {"name":"c", "value":2}];
    if (input[0].value > input[1].value )
    {
        if (input[1].value > input[2].value)
        {
            document.getElementById("text").innerHTML = input[0].name.toString() + input[1].name.toString() + input[2].name.toString();
        }
        else
        {
            if (input[0].value > input[2].value)
            {
                document.getElementById("text").innerHTML = input[0].name.toString() + input[2].name.toString() + input[1].name.toString();
            }
            else
            {
                document.getElementById("text").innerHTML = input[2].name.toString() + input[0].name.toString() + input[1].name.toString();
            }
        }
    }
    else
    {
        if (input[1].value > input[2].value)
        {
            if (input[0].value > input [2].value)
            {
                document.getElementById("text").innerHTML = input[1].name.toString() + input[0].name.toString() + input[2].name.toString();
            }
            else
            {
                document.getElementById("text").innerHTML = input[1].name.toString() + input[2].name.toString() + input[0].name.toString();
            }
        }
        else
        {
            document.getElementById("text").innerHTML = input[2].name.toString() + input[1].name.toString() + input[0].name.toString();
        }
    }

}