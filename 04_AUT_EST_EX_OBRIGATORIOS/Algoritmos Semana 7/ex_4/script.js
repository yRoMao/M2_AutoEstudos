function calculo(){
    var people = document.getElementById('people').value
    var time = document.getElementById('time').value
    var price
    if (time == 'Noturno'){
        if (people > 50){
            price = 80 * people
        }else{
            price = people * 100
        }
    }
    else{
        if (people > 50){
            price = 120 * people
        }else{
            price = 200 * people
        }
    }
    document.getElementById("result").innerHTML = 'O valor total da compra é: ' + price;
}