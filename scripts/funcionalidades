const compararNumeros = () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const resultado = document.getElementById("resultado-if");

    if (num1 > num2) {
        resultado.textContent = `El mayor es: ${num1}`;
    } else if (num2 > num1) {
        resultado.textContent = `El mayor es: ${num2}`;
    } else {
        resultado.textContent = "Ambos números son iguales.";
    }
};

const mostrarMes = () => {
    const mes = parseInt(document.getElementById("mes").value);
    const resultado = document.getElementById("resultado");

    let nombreMes;
    switch (mes) {
        case 1:
            nombreMes = "Enero";
            break;
        case 2:
            nombreMes = "Febrero";
            break;
        case 3:
            nombreMes = "Marzo";
            break;
        case 4:
            nombreMes = "Abril";
            break;
        case 5:
            nombreMes = "Mayo";
            break;
        case 6:
            nombreMes = "Junio";
            break;
        case 7:
            nombreMes = "Julio";
            break;
        case 8:
            nombreMes = "Agosto";
            break;
        case 9:
            nombreMes = "Septiembre";
            break;
        case 10:
            nombreMes = "Octubre";
            break;
        case 11:
            nombreMes = "Noviembre";
            break;
        case 12:
            nombreMes = "Diciembre";
            break;
        default:
            nombreMes = "Número inválido. Ingresa un número del 1 al 12.";
    }

    // Mostrar el mes o mensaje en el recuadro
    resultado.textContent = nombreMes;
};

const nombres = [];

const agregarNombre = () => {
    const nombre = document.getElementById("nombre").value.trim();
    if (nombre) {
        nombres.push(nombre);
        actualizarLista();
        document.getElementById("nombre").value = ""; // Limpiar el input
    }
};

const actualizarLista = () => {
    const lista = document.getElementById("lista-nombres");
    lista.innerHTML = nombres.map((n) => `<li>${n}</li>`).join("");
};
