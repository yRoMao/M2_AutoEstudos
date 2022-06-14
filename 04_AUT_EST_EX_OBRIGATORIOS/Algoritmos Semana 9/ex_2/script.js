function sum(){
    var num = document.getElementById('num').value;
    var split = num.split("")
    var i = 0
    for(Element of split){
        i += parseInt(Element)
    }
    document.getElementById("new").innerHTML = i;
}