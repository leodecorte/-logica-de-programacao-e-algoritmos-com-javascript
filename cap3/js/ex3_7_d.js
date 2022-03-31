
function createTriangle() {
    // entrada - criar referências
    const inSideA = document.getElementById('inSideA')
    const inSideB = document.getElementById('inSideB')
    const inSideC = document.getElementById('inSideC')
    const outResponse = document.getElementById('outResponse')
    const outTriangle = document.getElementById('outTriangle')

    // processamento
    const sideA = Number(inSideA.value)
    const sideB = Number(inSideB.value)
    const sideC = Number(inSideC.value)

    // verifica se campos foram preenchidos
    if (sideA == 0 || isNaN(sideA) || sideB == 0 || isNaN(sideB) || sideC == 0 || isNaN(sideC)) {
        alert('Informe os valores válidos')
        inSideA.focus();
        return;
    }

    // verifica se é possivel formar um triângulo
    if (sideA > (sideB + sideC) || sideB > (sideA + sideC) || sideC > (sideA + sideB)) {
        alert('Não se pode formar um triângulo')
        sideA.focus();
        return;
    }

    let triangle;

    if (sideA == sideB && sideB == sideC) {
        triangle = 'Equilátero'
    } else if (sideA == sideB || sideB == sideC || sideA == sideC) {
        triangle = 'Isósceles'
    } else {
        triangle = 'Escaleno'
    }

    // saída - exibir resposta
    outResponse.textContent = 'Lados podem formar um triângulo'
    outTriangle.textContent = 'Tipo: ' + triangle
}

// criar referencia botão
const btnVerify = document.getElementById('btnVerify')
btnVerify.addEventListener('click', createTriangle)