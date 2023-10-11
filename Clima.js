/*function Maximo() {
    const temperaturas = [
        parseFloat(document.getElementById('1').value),
        parseFloat(document.getElementById('2').value),
        parseFloat(document.getElementById('3').value),
        parseFloat(document.getElementById('4').value),
        parseFloat(document.getElementById('5').value),
        parseFloat(document.getElementById('6').value),
        parseFloat(document.getElementById('7').value)
    ];

    const maxTemp = Math.max(...temperaturas);
    const diaMaxTemp = temperaturas.indexOf(maxTemp);

    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    alert("El día con la temperatura máxima es " + diasSemana[diaMaxTemp] + " con " + maxTemp + " grados Celsius.")
}

function Minimo() {
    const temperaturas2 = [
        parseFloat(document.getElementById('1').value),
        parseFloat(document.getElementById('2').value),
        parseFloat(document.getElementById('3').value),
        parseFloat(document.getElementById('4').value),
        parseFloat(document.getElementById('5').value),
        parseFloat(document.getElementById('6').value),
        parseFloat(document.getElementById('7').value)
    ];

    const minTemp = Math.min(...temperaturas2);
    const diaMinTemp = temperaturas2.indexOf(minTemp);

    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

    alert("El día con la temperatura minima es " + diasSemana[diaMinTemp] + " con " + minTemp + " grados Celsius.")
}*/
const temperaturas = [];
let dia = 1;
const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
let isInputEnabled = true; 

function agregarTemperatura() {
    if (!isInputEnabled) {
        return;
    }
    const tempInput = document.getElementById('tempInput');
    const temperatura = parseFloat(tempInput.value);
    if (!isNaN(temperatura)) {
        temperaturas.push({dia,temperatura});
        actualizarResumen();
        actualizarTemperaturas();
        tempInput.value = '';
        dia++

        if (dia > 7) {
            isInputEnabled = false; // Deshabilitar el ingreso después de 7 días.
        }

    }
}

function calcularTemperaturaMaxima() {
    return Math.max(...temperaturas.map(item => item.temperatura));
}

function calcularTemperaturaMinima() {
    return Math.min(...temperaturas.map(item => item.temperatura));
}

function calcularTemperaturaPromedio() {
   /* for (let f = 0; f<7; f++){

    }
    const sum = temperaturas.reduce((acc, temp) => acc + temp, 0);
    return sum / 7;*/

    const sum = temperaturas.reduce((acc, item) => acc + item.temperatura, 0);
    return sum / temperaturas.length;
}
/*
function actualizarResumen() {
    const tempMax = document.getElementById('tempMax');
    const tempMin = document.getElementById('tempMin');
    const tempPromedio = document.getElementById('tempPromedio');
    
    tempMax.textContent = calcularTemperaturaMaxima().toFixed(2);
    tempMin.textContent = calcularTemperaturaMinima().toFixed(2);
    tempPromedio.textContent = calcularTemperaturaPromedio().toFixed(2);
    
    const ulTemperaturas = document.getElementById('temperaturas');
    ulTemperaturas.innerHTML = '';
    for (let i = 0; i < temperaturas.length; i++) {
        const li = document.createElement('li');
        li.textContent = temperaturas[i].dia+":" +temperaturas[i].temperatura.toFixed(2);
        ulTemperaturas.appendChild(li);
    }
    
    for (let i = 0; i < 7; i++) {
        const li = document.createElement('li');
        li.textContent = diasSemana[i]+ ":" +temperaturas[i].toFixed(2);
        ulTemperaturas.appendChild(li);
    }
}*/
function actualizarResumen() {
    const tempMax = document.getElementById('tempMax');
    const tempMin = document.getElementById('tempMin');
    const tempPromedio = document.getElementById('tempPromedio');
    
    tempMax.textContent = calcularTemperaturaMaxima().toFixed(2);
    tempMin.textContent = calcularTemperaturaMinima().toFixed(2);
    tempPromedio.textContent = calcularTemperaturaPromedio().toFixed(2);
}

function actualizarTemperaturas() {
    const ulTemperaturas = document.getElementById('temperaturas');
    ulTemperaturas.innerHTML = '';
    for (let i = 0; i < temperaturas.length; i++) {
        const li = document.createElement('li');
        li.textContent = "Día "+diasSemana[i]+ ":"+temperaturas[i].temperatura.toFixed(2);
        ulTemperaturas.appendChild(li);
    }
}

