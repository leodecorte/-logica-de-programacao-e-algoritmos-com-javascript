
function chinchilasCalc() {
    // cria referências
    const inNumber = document.getElementById('inNumber')
    const inYears = document.getElementById('inYears')
    const outResult = document.getElementById('outResult')

    // obtém valores
    const number = Number(inNumber.value)
    const years = Number(inYears.value)

    if(number < 2 || isNaN(number) || years == 0 || isNaN(years)) {
        alert('Informe corretamente os dados')
        inNumber.focus()
        return;
    }

    let countNumbers = number
    let result = ''

    for(let i = 1; i <= years; i++) {
        result = result + i + ' Ano: ' + countNumbers + ' Chinchilas\n';
        countNumbers = countNumbers * 3;
    }

    outResult.textContent = result
}

// cria referência botão
const btnShow = document.getElementById('btnShow')
btnShow.addEventListener('click', chinchilasCalc)