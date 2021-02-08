//Se realizan los test de la clase6-1

function getQuantityFamily() {
    document.querySelector('#quantity-family').value
}

const quantityFamily = getQuantityFamily()

function isANumberWithComma(number) {
    if (/,/.test(number) || /\./.test(number)) {
        return false
    }

    return true
}


function validateQuantityFamily(quantityFamily) {
    if (!isANumberWithComma(quantityFamily)) {
        return 'El numero no debe contener coma o punto'
    }

    return ''
}


function testValidateQuantilyFamily() {
    console.assert(
        validateQuantityFamily('12,54') === 'El numero no debe contener coma o punto',
        'No valida que el nuemro no contenga coma o punto'
    )

    console.assert(
        validateQuantityFamily('15') === '',
        'Falla con un numero que no es decimal, es decir falla con el caso correcto'
    )
}


testValidateQuantilyFamily()