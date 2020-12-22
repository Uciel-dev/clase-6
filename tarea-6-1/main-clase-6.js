/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


function numeroPositivo(number) {
    return number > 0;
}

function vaciarInput() {
    document.querySelector('#cantidad-familia').value = '';
}

function intentaloOtraVez() {
    vaciarInput()
    alert('El numero debe ser mayor a cero.');
}

function crearLabel() {
    const $label = document.createElement('label');
    const $texto = document.createTextNode('Familar:');
    $label.appendChild($texto);

    return $label;
}

function crearInput() {
    const $input = document.createElement('input');
    $input.type = "number";
    $input.className = "input-integrantes";
    $input.placeholder = "Ingrese edad";

    return $input;
}


function desabilitarClassOculto() {
    document.querySelector('.hidden').className = '';
}

function styleBoxTwo() {
    document.querySelector('#labels-inputs').className = 'box-two';
}

function styleBoxThree() {
    document.querySelector('#resultados').className = 'box-three';
}

function crearBotonEmpezarDeNuevo() {
    const $input = document.createElement('input');
    $input.type = "button";
    $input.value = "Empezar de nuevo";
    $input.onclick = 'document.location.reload(true)'

}

function mostrarResultados(promedio, mayor, menor) {

    desabilitarClassOculto()
    styleBoxThree()
    crearBotonEmpezarDeNuevo()

    document.querySelector('#promedio').innerHTML = `El promedio es: ${promedio}`;
    document.querySelector('#mayor').innerHTML = `El mayor es: ${mayor}`;
    document.querySelector('#menor').innerHTML = `El menor es: ${menor}`;
}


function crearBotonCalcular() {
    const $calcular = document.createElement('button');
    $calcular.textContent = "Calcular";
    $calcular.id = "calcular-promedio";
    $calcular.classList = "button-rounded";

    $calcular.onclick = function() {
        const $edadIputs = document.querySelectorAll('.input-integrantes')
        const listaEdad = [];
        for (let i = 0; i < $edadIputs.length; i++) {
            listaEdad.push(Number($edadIputs[i].value));
        }
        let mayor = determinarEdadMayor(listaEdad);
        let menor = determinarEdadMenor(listaEdad);
        let promedio = calcularElPromedio(listaEdad);

        mostrarResultados(promedio, mayor, menor);


    }
    return $calcular;
}



function crearLabelsEInptus(cantidad) {

    const $div = document.querySelector('#labels-inputs');

    for (let i = 0; i < cantidad; i++) {
        const $label = crearLabel();
        $div.appendChild($label);

        const $input = crearInput();
        $div.appendChild($input);

        $div.appendChild(document.createElement('br'));
    }
    const $botonCalcular = crearBotonCalcular();
    $div.appendChild($botonCalcular);
    styleBoxTwo()

}




const $botonCantidadFamilia = document.querySelector('#enviar-cantidad-familia');

$botonCantidadFamilia.onclick = function() {

    const $cantidadFamiliar = Number(document.querySelector('#cantidad-familia').value);

    if (numeroPositivo($cantidadFamiliar)) {
        vaciarInput()
        crearLabelsEInptus($cantidadFamiliar);
    } else {
        intentaloOtraVez()
    }

    return false;
}