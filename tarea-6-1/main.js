/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y 
el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, 
borrando los inputs ya creados (investigar cómo en MDN).
*/


function isPositiveNumber(number) {
    return number > 0;
}

function resetFamilyQuantity() {
    document.querySelector('#quantity-family').value = '';
}

function tryAgain() {
    resetFamilyQuantity()
    alert('El numero debe ser mayor a cero.');
}

function createLabel() {
    const $label = document.createElement('label');
    const $txt = document.createTextNode('Familar:');
    $label.appendChild($txt);

    return $label;
}

function createInput() {
    const $input = document.createElement('input');
    $input.type = "number";
    $input.className = "input-members";
    $input.placeholder = "Ingrese su edad";

    return $input;
}


function showCalulate() {
    document.querySelector('.hidden').className = '';
}

function familyMembersStyleContainer() {
    document.querySelector('#family-members').className = 'family-members-card';
}

function styleResults() {
    document.querySelector('#result').className = 'result-card';
}


function showResults(average, major, minor) {

    showCalulate()
    styleResults()

    document.querySelector('#average').innerHTML = `El promedio es: ${average}`;
    document.querySelector('#major').innerHTML = `El mayor es: ${major}`;
    document.querySelector('#minor').innerHTML = `El menor es: ${minor}`;
}


function createCalculateButton($familyMembers) {
    const $calculateBtn = document.createElement('button');
    $calculateBtn.textContent = "Calcular";
    $calculateBtn.className = "button-rounded";

    $calculateBtn.onclick = function() {
        const $inputAge = document.querySelectorAll('.input-members');
        const ageList = [];

        for (let i = 0; i < $inputAge.length; i++) {
            ageList.push(Number($inputAge[i].value));
        }

        let major = getOldest(ageList);
        let minor = getYoungest(ageList);
        let average = getAverage(ageList);

        showResults(average, major, minor);
    }


    $familyMembers.appendChild($calculateBtn);
}

function renderFamilyMembersUI(totalFamilyMembers, $aFamilyMember) {

    for (let i = 0; i < totalFamilyMembers; i++) {
        const $label = createLabel();
        $aFamilyMember.appendChild($label);

        const $input = createInput();
        $aFamilyMember.appendChild($input);

        $aFamilyMember.appendChild(document.createElement('br'));
    }

}


function createFamilyMembersAgeInput(totalFamilyMembers) {

    const $familyMembers = document.querySelector('#family-members');

    renderFamilyMembersUI(totalFamilyMembers, $familyMembers)
    createCalculateButton($familyMembers);
    familyMembersStyleContainer();

}




const $familyQuantityBtn = document.querySelector('#send-family-amount');

$familyQuantityBtn.onclick = function() {

    const quantityFamily = Number(document.querySelector('#quantity-family').value);

    if (isPositiveNumber(quantityFamily)) {

        resetFamilyQuantity()
        createFamilyMembersAgeInput(quantityFamily);


    } else {
        tryAgain()
    }

    return false;
}