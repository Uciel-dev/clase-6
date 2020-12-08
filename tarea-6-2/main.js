/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels 
para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
function createDiv(indice) {
    const $div = document.createElement('div')
    $div.id = 'cards'
    $div.className = 'center card fonts'

    return $div
}

function createLabel() {
    const $label = document.createElement('label')
    $label.textContent = 'Ingrese su salario'

    return $label
}

function createInput() {
    const $input = document.createElement('input')
    $input.id = 'salary'
    $input.type = 'number'
    $input.className = 'inputs'

    return $input
}


function createBtn() {
    const $btn = document.createElement('button')
    $btn.className = 'fonts btn-remove'
    $btn.type = 'button'
    $btn.textContent = 'Quitar'

    $btn.onclick = function() {
        const $valor = document.querySelector('#cards')
        console.log($valor)
    }

    return $btn
}

function createSalaryCards(number) {

    const $div = createDiv(number);

    const $label = createLabel()
    const $input = createInput()
    const $btn = createBtn()


    $div.appendChild($label)
    $div.appendChild($input)
    $div.appendChild($btn)

    return $div
}

const $btnAdd = document.querySelector('#add')
let numberOfSalaryCards = 0;


$btnAdd.onclick = function() {
    const $salaryCards = createSalaryCards(numberOfSalaryCards + 1);
    document.querySelector('#salary-cards').appendChild($salaryCards)
}