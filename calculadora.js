function insert(num) {
    let numero = document.getElementById('resultado')
    numero.innerHTML += num
}

function clean() {
    let expressao = document.getElementById('resultado')
    expressao.innerHTML = ''
}

function back() {
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
    else {
        alert('Insira uma expressão para calcular')
    }
}