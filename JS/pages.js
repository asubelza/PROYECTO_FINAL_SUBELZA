// Inicialización de AOS
AOS.init();

// Función para convertir el tipo de cambio
async function convertCurrency(event) {
    event.preventDefault(); // Evitar que el formulario se recargue

    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
    const amount = document.getElementById("amount").value;

    if (!amount || amount <= 0) {
        alert("Por favor ingrese una cantidad válida.");
        return;
    }

    const apiKey = '0e75eed42d880da181290e56';  // API KEY PERSONAL FREE x 2 Semanas
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === "error") {
            alert("Hubo un problema al obtener las tasas de cambio.");
            return;
        }

        const exchangeRate = data.conversion_rates[toCurrency];
        const convertedAmount = (amount * exchangeRate).toFixed(2);

        document.getElementById("converted-amount").textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } catch (error) {
        console.error(error);
        alert("Ocurrió un error al intentar obtener el tipo de cambio.");
    }
}

// Evento para convertir la moneda cuando el formulario se envíe
document.getElementById("currency-form").addEventListener("submit", convertCurrency);

// Vamos a agregar cotizaciones tambien con js

// Función para obtener la cotización del dólar en tiempo real
async function getDollarRate() {
    const apiKey = '08841b5a5a-5529cb60f1-sqto88';  // Reemplaza con tu clave API de Exchangerate
    const url = `https://v6.exchangerate-api.com/v6/0e75eed42d880da181290e56/latest/USD`; // Obtiene el tipo de cambio desde USD

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === "success") {
            const rate = data.conversion_rates.ARS; // Cotización del dólar a pesos argentinos
            document.getElementById("dolar-valor").textContent = `$${rate}`;
        } else {
            document.getElementById("dolar-valor").textContent = 'Error al obtener cotización';
        }
    } catch (error) {
        console.error('Error al obtener la cotización:', error);
        document.getElementById("dolar-valor").textContent = 'Error al obtener cotización';
    }
}

// Llamar a las funciones para obtener y mostrar las cotizaciones en la página
getDollarRate();

