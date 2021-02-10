//Se realizan los test de la clase6-1
const nodeListAge = getAgesAllMembers()

console.log(nodeListAge)

function getQuantityFamily() {

    document.querySelector('#quantity-family').value
}


function getAgesAllMembers() {

    return document.querySelectorAll('.input-members')
}


function isANumberWithComma(number) {

    if (/,/.test(number) || /\./.test(number)) {
        return true
    }

    return false
}


function validateQuantityFamily(quantityFamily) {

    if (isANumberWithComma(quantityFamily)) {
        return 'El numero no debe contener coma o punto'
    }

    return ''
}

//--------------------------Se testean las validaciones --------------------------

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