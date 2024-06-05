document.getElementById('convertButton').addEventListener('click', function() {
    const inputTemperature = document.getElementById('inputTemperature').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputTemperature = document.getElementById('outputTemperature');

    if (isNaN(inputTemperature)) {
        outputTemperature.textContent = 'Please enter a valid number';
        return;
    }

    const temperature = parseFloat(inputTemperature);
    let convertedTemperature = '';

    if (inputUnit === 'Celsius') {
        convertedTemperature = `Fahrenheit: ${(temperature * 9/5 + 32).toFixed(2)}°F, Kelvin: ${(temperature + 273.15).toFixed(2)}K`;
    } else if (inputUnit === 'Fahrenheit') {
        convertedTemperature = `Celsius: ${((temperature - 32) * 5/9).toFixed(2)}°C, Kelvin: ${((temperature - 32) * 5/9 + 273.15).toFixed(2)}K`;
    } else if (inputUnit === 'Kelvin') {
        convertedTemperature = `Celsius: ${(temperature - 273.15).toFixed(2)}°C, Fahrenheit: ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
    }

    outputTemperature.textContent = convertedTemperature;
    outputTemperature.style.color = '#7b4397';
});
