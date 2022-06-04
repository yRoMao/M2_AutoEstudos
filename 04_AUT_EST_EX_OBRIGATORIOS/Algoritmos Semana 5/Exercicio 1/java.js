function Calculos()
{
    var num = document.getElementById('num').value;
    var sum = eval(num) + 5;
    var sub = num - 5;
    var mult = num * 5;
    var div = num / 5;
    var divint = Math.floor(num/5);
    var rest = num % 5;
    document.getElementById("alt").innerHTML = sum + ', ' + sub + ', ' + mult + ', ' +div + ', ' + divint + ', ' + rest;
}