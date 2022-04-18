
function verifyPerfectNumber() {
    // cria referências
    const inNumber = document.getElementById('inNumber')
    const outDivisors = document.getElementById('outDivisors')
    const outResponse = document.getElementById('outResponse')

    // obtém valor
    const number = Number(inNumber.value)
    // verifica se campo foi preenchido
    if(number == 0 || isNaN(number)) {
        alert('Informe corretamente o número')
        inNumber.focus();
        return;
    }

    var divisors = 'Divisores do ' + number + ': 1';
    var sum = 1;

    for(let i = 2; i <= number / 2; i++) {
        if(number % i == 0) {
            divisors = divisors + ', ' + i;
            sum = sum + i;
        }
    }

    divisors = divisors + ' (Soma: ' + sum + ')';

    // altera conteudo do outDivisor
    outDivisors.textContent = divisors;

    if(sum === number) {
        outResponse.textContent = number + ' É um Número Perfeito'
    } else {
        outResponse.textContent = number + ' Não é um Número Perfeito'
    }
}

// cria referência botão
const btnVerify = document.getElementById('btnVerify')
btnVerify.addEventListener('click', verifyPerfectNumber)