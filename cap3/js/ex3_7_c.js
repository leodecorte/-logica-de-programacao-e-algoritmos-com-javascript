
function calulateTime() {
    // cria referências
    const inMoney = document.getElementById('inMoney')
    const outTime = document.getElementById('outTime')
    const outChange = document.getElementById('outChange')

    // processamento
    const money = Number(inMoney.value)

    if (money == 0 || isNaN(money)) {
        alert('Informe o valor')
        inMoney.focus();
        return;
    }


    if (money < 1) {
        alert('Valor Insuficiente')
        inMoney.focus();
        return;
    }

    let time;
    let change;
    
    if (money >= 3) {
        change = money - 3;
        time = 120

    } else if (money >= 1.75) {
        change = money - 1.75
        time = 60

    } else {
        change = money - 1
        time = 30
    }


    // saida - exibe respostas
    outTime.textContent = 'Tempo: ' + time + ' min'
    if (change > 0) {
        outChange.textContent = 'Troco R$: ' + change
    }

}

// cria referência botão
const btnEnter = document.getElementById('btnEnter')
btnEnter.addEventListener('click', calulateTime)