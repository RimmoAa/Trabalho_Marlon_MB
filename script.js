let imagens = [
    // 0
    'pessoa1.png',
    // 1
    'pessoa2.jpg',
    // 2
    'pessoa3.jpg'
]
let contador = 1
function mudaImagem(){
    document.getElementById('carousel').src=imagens[contador]
    contador++
    if(contador>imagens.length-1){
        contador = 0
    }
}
// função períodica
setInterval(mudaImagem,5000)

function mostraDetalhes(valor){
    document.getElementsByClassName('detalhes')[valor].style.height="195px"
}
function escondeDetalhes(valor){
    document.getElementsByClassName('detalhes')[valor].style.height="0px"
}

function aumenta(){
    document.querySelector('.menu-container').style.width = "75%"
}
function diminui(){
    document.querySelector('.menu-container').style.width = "0%"
}
// function mode(){
//     let header = document.getElementsByTagName('header')[0]
//     let link1 = document.getElementsByClassName('.link')[0]
//     let link2 = document.getElementsByClassName('.link')[1]
//     let link3 = document.getElementsByClassName('.link')[2]
//     link1.classList('link-light').toggle()
//     link2.classList('link-light').toggle()
//     link3.classList('link-light').toggle()
// }
