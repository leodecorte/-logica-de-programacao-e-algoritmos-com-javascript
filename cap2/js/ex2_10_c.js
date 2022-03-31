

function calcularPromo() {
    // entrada - criar referencias
    const inName = document.getElementById('inName')
    const inPrice = document.getElementById('inPrice')
    const outPromo = document.getElementById('outPromo')
    const outDiscount = document.getElementById('outDiscount')

    //processamento
    const name = inName.value 
    const price = inPrice.value

    const discount = price / 2
    const promo = price * 2 + discount

    //saida - mostra valores promo e desconto
    outPromo.textContent = name + ' - Promoção: Leve 3 por R$: ' + promo
    outDiscount.textContent = 'O 3o produto custa apenas R$:' + discount.toFixed(2)

}

// criar referencia botão
const btnPromo = document.getElementById('btnPromo')
// adiciona evento
btnPromo.addEventListener('click', calcularPromo)