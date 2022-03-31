
function oddOrEven() {
    // cria referencia
    const inNumber = document.getElementById('inNumber')
    const outResponse = document.getElementById('outResponse')

    // processamento
    const number = Number(inNumber.value)

    // verificar se foi preenchido o campo
    if (number == 0 || isNaN(number)) {
        alert('Informe um número válido')
        inNumber.focus()
        return;
    }
    
    // saida
    if (number % 2 == 0) {
        outResponse.textContent = 'Resposta: ' + number + ' é Par'
    } else {
        outResponse.textContent = 'Resposta: ' + number + ' é Ímpar'
    }

}

// cria referencia botão
const btnCheck = document.getElementById('btnCheck')
btnCheck.addEventListener('click', oddOrEven)