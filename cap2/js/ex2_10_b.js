
function calularPreco() {
    //entrada - cria referencias
    const inPrice = document.getElementById('inPrice')
    const inTime = document.getElementById('inTime')
    const outPrice = document.getElementById('outPrice')

    //processamento
    const price = Number(inPrice.value) 
    const time = Number(inTime.value)

    const total = Math.ceil(time / 15) * price

    //saida
    outPrice.textContent = 'Valor a Pagar R$: ' + total

}

// referencia do botão
const btnCalc = document.getElementById('btnCalc')
btnCalc.addEventListener('click', calularPreco)