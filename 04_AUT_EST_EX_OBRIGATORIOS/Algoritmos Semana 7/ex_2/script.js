function troca(){
    var first = document.getElementById('first').value;
    var second = document.getElementById('second').value;
    document.getElementById('first').value = second;
    document.getElementById('second').value = first;
}