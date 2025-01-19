document.getElementById('convert').onclick = function() {
    let temperture = parseFloat(document.getElementById('temperateure').value);
    let unit = document.getElementById('unit').value;

    if (unit === 'celsius') { // C to F
        temperture = (temperture * 9 / 5 + 32).toFixed(2) + ' F';
    } else if (unit === 'fahrenheit') {     // F to C
        temperture = ((temperture - 32) * 5 / 9).toFixed(2) + ' C';
    }else{ // K to F
        temperture = ((temperture - 273.15) * 9 / 5 + 32).toFixed(2) + ' F';
    }
    document.getElementById('result').textContent = temperture;  
};