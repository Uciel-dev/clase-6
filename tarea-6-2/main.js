/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels 
para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
function createDiv(index) {
    const $div = document.createElement('div')
    $div.id = 'card-' + index
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


function createBtn(index) {
    const $btn = document.createElement('button')
    $btn.className = 'fonts btn-remove'
    $btn.type = 'button'
    $btn.textContent = 'Quitar'


    $btn.onclick = function() {
        document.querySelector('#card-' + index).remove()
    }

    return $btn
}

function createSalaryCards(index) {

    const $div = createDiv(index)

    const $label = createLabel()
    const $input = createInput()
    const $btn = createBtn(index)


    $div.appendChild($label)
    $div.appendChild($input)
    $div.appendChild($btn)

    return $div
}



const $btnAdd = document.querySelector('#add')
let numberOfSalaryCards = 0

$btnAdd.onclick = function() {

    document.querySelector('#btn-calculate').className = 'fonts btn-calculate'


    const $salaryCards = createSalaryCards(numberOfSalaryCards++)
    document.querySelector('#salary-cards').appendChild($salaryCards)

}



function showResult(average, higher, lower) {

    disableHiddenClass()

    document.querySelector('#average-salary').innerHTML = `El promedio es: ${average}`;
    document.querySelector('#higher-salary').innerHTML = `El mayor es: ${higher}`;
    document.querySelector('#lower-salary').innerHTML = `El menor es: ${lower}`;
}

function disableHiddenClass() {

    document.querySelector('#result').classList = ''
}



const $btnCalculate = document.querySelector('#btn-calculate')

$btnCalculate.onclick = function() {


    const $salaryNode = document.querySelectorAll('#salary')
    const salaryList = []

    console.log($salaryNode.length)

    for (let i = 0; i < $salaryNode.length; i++) {
        if ($salaryNode[i].value !== '') {

            salaryList.push(Number($salaryNode[i].value))
        }

    }
    console.log(salaryList.length)


    const averageSalary = calculateAverage(salaryList)
    const higherSalary = determineHigherSalary(salaryList)
    const lowerSalary = determineLowerSalary(salaryList)


    showResult(averageSalary, higherSalary, lowerSalary)
}