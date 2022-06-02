function telefone(){
    var telefone = document.getElementById('num').value;
    if (telefone.length == 14){
        if (telefone.indexOf('(') == 0){
            if (telefone.indexOf(')') == 3){
                if (telefone.indexOf('-') == 9){
                    alert('VAMOOOOOOOOOOOOOS SIIIIIIIIII')
                }
            }
        }
    }else{
        alert('Ta errado champs')
    }
}