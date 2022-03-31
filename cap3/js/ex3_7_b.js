
function verifySpeed() {
    // cria referencia
    const inMaxSpeed = document.getElementById('inMaxSpeed')
    const inYourSpeed = document.getElementById('inYourSpeed')
    const outResponse = document.getElementById('outResponse')

    // processamento
    const maxSpeed = Number(inMaxSpeed.value)
    const yourSpeed = Number(inYourSpeed.value)
    
    // verificar que campos foram preenchidos
    if (maxSpeed == 0 || isNaN(maxSpeed) || yourSpeed == 0 || isNaN(yourSpeed)) {
        alert('Informe o número válido!')
        maxSpeed.focus()
        return;
    }
    
    if (yourSpeed <= maxSpeed) {
        outResponse.textContent = 'Situação: Sem Multa'
    } else {
        if (yourSpeed <= (maxSpeed * 1.2)) {
            outResponse.textContent = 'Situação: Multa Leve'
        } else {
            outResponse.textContent = 'Situação: Multa Grave!'
        }
    }

}

// cria referencia botão
const btnVerifySpeed = document.getElementById('btnVerifySpeed')
btnVerifySpeed.addEventListener('click', verifySpeed)