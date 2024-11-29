let imagensPessoa1 = [
    // 0
    'diversao1.jpg',
    // 1
    'diversao2.jpg',
    // 2
    'diversao3.jpg'
]
let contador = 1
function mudaImagem(){
    document.getElementById('carousel').src=imagensPessoa1[contador]
    contador++
    if(contador>imagensPessoa1.length-1){
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

let imagensPessoa2 = [
    // 0
    'pratica1.jpg',
    // 1
    'pratica2.jpg',
    // 2
    'pratica3.jpg'
]
let contador2 = 1
function mudaImagem2(){
    document.getElementById('carousel1').src=imagensPessoa2[contador2]
    contador2++
    if(contador2>imagensPessoa2.length-1){
        contador2 = 0
    }
}
// função períodica
setInterval(mudaImagem2,5000)

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


let imagensPessoa3 = [
    // 0
    'frances1.jpg',
    // 1
    'frances2.jpg',
    // 2
    'frances3.jpg'
]
let contador3 = 1
function mudaImagem3(){
    document.getElementById('carousel2').src=imagensPessoa3[contador3]
    contador3++
    if(contador3>imagensPessoa3.length-1){
        contador3 = 0
    }
}
// função períodica
setInterval(mudaImagem3,5000)

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

