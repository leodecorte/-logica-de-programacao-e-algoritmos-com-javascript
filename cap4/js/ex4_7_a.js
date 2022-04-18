
function repeatName() {
    // cria referência
    const inName = document.getElementById('inName');
    const inNumber = document.getElementById('inNumber');
    const outResult = document.getElementById('outResult')

    // obtem conteudo dos campos
    const name = inName.value;
    const num = Number(inNumber.value);

    // verifica preenchimento dos campos
    if(num == 0 || isNaN(num) || name == '') {
        alert('Informe os dados corretamente...')
        inName.focus()
        return;
    }

    let result = name;

    for(let i = 2; i <= num; i++) {
        result = result + ' * ' + name
    }
    
    outResult.textContent = result;
}

// cria referencia botao
const btnRepeat = document.getElementById('btnRepeat')
btnRepeat.addEventListener('click', repeatName)
