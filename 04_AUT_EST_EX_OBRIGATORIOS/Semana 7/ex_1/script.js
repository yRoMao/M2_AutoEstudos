function addOne(){
    var num = document.getElementById('num').value;
    var result = +num + 1
    document.getElementById("new").innerHTML = result;
    document.getElementById('num').value = result
}

function subOne(){
    var num = document.getElementById('num').value;
    var result = +num - 1
    document.getElementById("new").innerHTML = result;
    document.getElementById('num').value = result
}