/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y 
el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, 
borrando los inputs ya creados (investigar cómo en MDN).
*/


function positiveNumber(number) {
    return number > 0;
}

function emptyInput() {
    document.querySelector('#quantity-family').value = '';
}

function tryAgain() {
    emptyInput()
    alert('El numero debe ser mayor a cero.');
}

function createLabel() {
    const $label = document.createElement('label');
    const $texto = document.createTextNode('Familar:');
    $label.appendChild($texto);

    return $label;
}

function createInput() {
    const $input = document.createElement('input');
    $input.type = "number";
    $input.className = "input-members";
    $input.placeholder = "Ingrese su edad";

    return $input;
}


function disableHiddenClass() {
    document.querySelector('.hidden').className = '';
}

function styleBoxTwo() {
    document.querySelector('#labels-inputs').className = 'box-two';
}

function styleBoxThree() {
    document.querySelector('#result').className = 'box-three';
}

function createButtonStartOver() {
    const $input = document.createElement('input');
    $input.type = "button";
    $input.value = "Empezar de nuevo";
    $input.onclick = 'document.location.reload(true)'

}

function showResult(average, higher, lower) {

    disableHiddenClass()
    styleBoxThree()
    createButtonStartOver()

    document.querySelector('#average').innerHTML = `El promedio es: ${average}`;
    document.querySelector('#higher').innerHTML = `El mayor es: ${higher}`;
    document.querySelector('#lower').innerHTML = `El menor es: ${lower}`;
}


function createCalculateButton() {
    const $calculate = document.createElement('button');
    $calculate.textContent = "Calcular";
    $calculate.id = "calculate-average";
    $calculate.classList = "button-rounded";

    $calculate.onclick = function() {
        const $inputAge = document.querySelectorAll('.input-members')
        const ageList = [];

        for (let i = 0; i < $inputAge.length; i++) {
            ageList.push(Number($inputAge[i].value));
        }

        let higher = determineOlderAge(ageList);
        let lower = determineMinorAge(ageList);
        let average = calculateAverage(ageList);

        showResult(average, higher, lower);


    }
    return $calculate;
}



function createLabelsAndInptus(cantidad) {

    const $div = document.querySelector('#labels-inputs');

    for (let i = 0; i < cantidad; i++) {
        const $label = createLabel();
        $div.appendChild($label);

        const $input = createInput();
        $div.appendChild($input);

        $div.appendChild(document.createElement('br'));
    }
    const $btnCalculate = createCalculateButton();
    $div.appendChild($btnCalculate);
    styleBoxTwo()

}




const $familyQuantityBtn = document.querySelector('#send-family-amount');

$familyQuantityBtn.onclick = function() {

    const $quantityFamily = Number(document.querySelector('#quantity-family').value);

    if (positiveNumber($quantityFamily)) {
        emptyInput()
        createLabelsAndInptus($quantityFamily);
    } else {
        tryAgain()
    }

    return false;
}