const temperaturas = [];
let dia = 1;
const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
let InputEnabled = true; 

function agregarTemperatura() {
    if (!InputEnabled) {
        return;
    }
    const tempInput = document.getElementById('tempInput');
    const temperatura = parseFloat(tempInput.value);
    if (!isNaN(temperatura)) {
        temperaturas.push({dia,temperatura});

        actualizarResumen();
        actualizarTemperaturas();
        dibujarGrafico();
        tempInput.value = '';
        dia++

        if (dia > 7) {
            InputEnabled = false; 
        }

    }
}

function dibujarGrafico() {
    const data = temperaturas.map(item => item.temperatura);
    const labels = temperaturas.map((item, i) => "Día " + diasSemana[i]);


    const ctx = document.getElementById('temperaturaChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
             datasets: [{
                label: 'Temperatura',
                data: data,
                borderColor: 'white',
                fill: false,

            }]
            
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function calcularTemperaturaMaxima() {
    return Math.max(...temperaturas.map(item => item.temperatura));
}

function calcularTemperaturaMinima() {
    return Math.min(...temperaturas.map(item => item.temperatura));
}

function calcularTemperaturaPromedio() {

    const sum = temperaturas.reduce((acc, item) => acc + item.temperatura, 0);
    return sum / temperaturas.length;
}

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
        li.textContent = "Día "+diasSemana[i]+ ": "+temperaturas[i].temperatura.toFixed(2);
        ulTemperaturas.appendChild(li);
    }
}

