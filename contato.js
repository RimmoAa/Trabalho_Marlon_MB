
// muda pelo id
document.getElementById('primeiro').style.color='red'

// muda pelo nome da tag -> em forma de array
document.getElementsByTagName('p')[0].style.background='pink'

// muda pelo nome da classe -> em forma de array
// document.getElementsByClassName('texto')[3].style.display='none'

// muda o primeiro encontro de seletor específico, apenas
document.querySelector('.texto').style.fontSize = '1.5rem'

// muda o conjunto de seletor específico -> em forma de array
document.querySelectorAll('.texto')[2].style.textShadow = '3px 3px 3px black'

function mostraAviso(ordem){
    if(ordem === 'primeiro'){
        let nome = document.getElementById('nome').value
        if(nome.length>2){
            document.getElementsByClassName('aviso')[0].innerHTML=''
        }else{
            document.getElementsByClassName('aviso')[0].innerHTML='mín. de 3 caracteres'
        }
    }else{
        let senha = document.getElementById('senha').value
        if(senha.length>2){
            document.getElementsByClassName('aviso')[1].innerHTML=''
        }else{
            document.getElementsByClassName('aviso')[1].innerHTML='mín. de 3 caracteres'
        }
    }
}
function mostra(){
     if(document.getElementById('senha').type==="password"){
         document.getElementById('senha').type="text"
     }else{
         document.getElementById('senha').type="password"
     }
    let nome = document.getElementById('nome').value
    let senha = document.getElementById('senha').value
    if(nome.length>2 && senha.length>2){
        alert('Logado!')
        location.href = 'index.html'
    }

}