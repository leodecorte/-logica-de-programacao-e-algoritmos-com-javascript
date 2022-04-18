
function createStars() {
    // cria referências
    const inNumber = document.getElementById('inNumber')
    const outStars = document.getElementById('outStars')

    // obtém valor
    const rowsNum = Number(inNumber.value);

    if(rowsNum == 0 || isNaN(rowsNum)) {
        alert('Informe corretamente o número')
        inNumber.focus();
        return;
    }

    let stars = '';
    // adiciona uma estrela a cada loop
    for(let i = 1; i <= rowsNum; i++) {
        for(let j = 1; j <= i; j++) {
            stars = stars + ' * '
        }
        stars = stars + '\n'
    }

    // altera outStars
    outStars.textContent = stars
}

const btnCreate = document.getElementById('btnCreate')
btnCreate.addEventListener('click', createStars)
