function fibonacci(){
    var num = document.getElementById('num').value;
    var num0 = 0
    var num1
    var num2
    var sequencia = [1]
    for(var i = 0; i < num; i++){
       num1 = sequencia[i]
       num2 = num0 + num1
       sequencia[i + 1] = num2
       num0 = num1
    }
    document.getElementById("new").innerHTML = sequencia;
}