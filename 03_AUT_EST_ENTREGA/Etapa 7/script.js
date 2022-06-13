function AddLine()
{
    var click = false
    if (!click) {
        const node = document.createElement("h1");
        const textnode = document.createTextNode("Segredinho, shiuuu!!");
        node.appendChild(textnode);
        document.getElementById("info").prepend(node);
        var click = true
    } else {
        document.getElementById('info').removeChild(document.getElementById('info').getElementsByTagName('h1')[0]);
    }
}

function load(){
    var url = "http://127.0.0.1:3031/user";
   var xhttp = new XMLHttpRequest();
   xhttp.open("GET", url, false);
   xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
   //var retorno = JSON.parse(xhttp.responseText);
   var retorno = xhttp.responseText;
   document.getElementById('info').innerHTML = 'nome: ' + retorno
    }
