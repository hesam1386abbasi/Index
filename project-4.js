function inputt () {
    const input = [{"name": "a", "value": 1}, {"name": "b", "value": 3}, {"name": "c", "value": 2}];
    input.sort(function(a, b){return b.value-a.value});
    console.log(input)
}
