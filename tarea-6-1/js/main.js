/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y 
el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, 
borrando los inputs ya creados (investigar cómo en MDN).
*/

//---------------------Maneja los errores----------------------------


function handleQuantityFamilyError(error) {

    if (error === '') {
        return true
    } else {
        return false
    }
}


//--------------Se implementa la solucion-----------------------------
function isPositiveNumber(number) {
    return number > 0;
}

function resetFamilyQuantity() {
    document.querySelector('#quantity-family').value = '';
}

function tryAgain() {
    resetFamilyQuantity()
}

function createLabel(index) {

    const $label = document.createElement('label');
    const $txt = document.createTextNode(`Familiar${index}:`);

    $label.appendChild($txt);

    return $label;
}

function createInput(index) {

    const $input = document.createElement('input');

    $input.type = "number";
    $input.className = "input-members";
    $input.placeholder = "Ingrese su edad";
    $input.id = 'member-' + index
    return $input;
}


function showCalulate() {
    document.querySelector('#result').className = '';
}

function familyMembersStyleContainer() {
    document.querySelector('#family-members').className = 'family-members-card';
}

function styleResults() {
    document.querySelector('#result').className = 'result-card';
}


function showResults(average, oldest, youngest) {

    showCalulate()
    styleResults()

    document.querySelector('#average').innerHTML = `El promedio es: ${average}`;
    document.querySelector('#oldest').innerHTML = `El mayor es: ${oldest}`;
    document.querySelector('#youngest').innerHTML = `El menor es: ${youngest}`;
}


function createCalculateButton() {

    const $calculateBtn = document.createElement('button');
    $calculateBtn.textContent = "Calcular";
    $calculateBtn.className = "button-rounded";

    $calculateBtn.onclick = function() {

        const $nodeListAge = document.querySelectorAll('.input-members');
        const ageList = [];


        for (let i = 0; i < $nodeListAge.length; i++) {

            ageList.push(Number($nodeListAge[i].value))
        }

        const oldest = getOldest(ageList);
        const youngest = getYoungest(ageList);
        const average = getAverage(ageList);

        showResults(average, oldest, youngest);
    }

    return $calculateBtn;
}

function renderFamilyMembersUI(totalFamilyMembers) {

    const $familyMembers = document.querySelector('#family-members');

    for (let i = 0; i < totalFamilyMembers; i++) {
        const $label = createLabel(i + 1);
        $familyMembers.appendChild($label);

        const $input = createInput(i);
        $familyMembers.appendChild($input);

        $familyMembers.appendChild(document.createElement('br'));
    }
    return $familyMembers
}


function createFamilyMembersAgeInput(totalFamilyMembers) {

    const $totalFamilymembers = renderFamilyMembersUI(totalFamilyMembers);
    const $calculateBtn = createCalculateButton()

    $totalFamilymembers.appendChild($calculateBtn);

    familyMembersStyleContainer();
    resetFamilyQuantity();

}




document.querySelector('#send-family-amount').onclick = function() {

    const quantityFamily = Number(document.querySelector('#quantity-family').value);

    const errorQuantityFamily = validateQuantityFamily(quantityFamily)

    if (handleQuantityFamilyError(errorQuantityFamily) && isPositiveNumber(quantityFamily)) {

        createFamilyMembersAgeInput(quantityFamily);

    } else {

        tryAgain()
        alert('Revise el numero ingresado, tiene que ser mayor que cero y sin coma o punto');

    }

    return false;
}