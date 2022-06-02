
function qtAlunos(){
    var qt = parseInt(document.getElementById('qt').value);
    var text = ''
    for(i=0; i<qt; i++){
        text += '<input type="text" placeholder="nome" class="nome">' + 
        '<input type="text" placeholder="nota da prova" class="prova">' +
        '<input type="text" placeholder="nota do trabalho" class="trabalho"><BR>'
    }
    document.getElementById('inputs').innerHTML = text
}

function geral(){
    var prova = document.querySelectorAll('.prova');
    var trabalho = document.querySelectorAll('.trabalho')
    var ind = ''
    var geral = 0
    var soma = 0
    for(var i = 0; i<prova.length; i++){
        var media = ((parseInt(prova[i].value) * 2) + (parseInt(trabalho[i].value) * 3)) / 5
        ind += 'aluno ' + (i + 1) + ': ' + media + ' '
        soma += media
        }
    if (i == prova.length){
        geral = soma / prova.length
        alert(ind + 'Média geral: ' + geral)
    }
}

//function 