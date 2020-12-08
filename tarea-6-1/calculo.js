function determinarEdadMayor(listaEdad) {
    let mayor = listaEdad[0];
    for (let i = 1; i < listaEdad.length; i++) {
        if (listaEdad[i] > mayor) {
            mayor = listaEdad[i];
        }
    }

    return mayor;
}

function determinarEdadMenor(listaEdad) {
    let menor = listaEdad[0];
    for (let i = 1; i < listaEdad.length; i++) {
        if (listaEdad[i] < menor) {
            menor = listaEdad[i];
        }
    }

    return menor;
}

function calcularElPromedio(listaEdad) {
    let sumaTotal = 0;
    for (let i = 0; i < listaEdad.length; i++) {
        sumaTotal += listaEdad[i];
    }

    return (sumaTotal / listaEdad.length).toFixed(2);
}