
function calularPromo() {
    //entrada - criar referencias
    const inName = document.getElementById('inName')
    const inPrice = document.getElementById('inPrice')
    const outName = document.getElementById('outName')
    const outPromo = document.getElementById('outPromo')


    //processamentp
    const name = inName.value 
    const price = inPrice.value 
    
    const promo = Math.floor(price * 2)

    //saida
    outName.textContent = 'Promoção de ' + name
    outPromo.textContent = 'Leve 2 por apenas RS: ' + promo

}
//criar referencia botão
const btnMostra = document.getElementById('btnMostrar')
btnMostra.addEventListener('click', calularPromo)