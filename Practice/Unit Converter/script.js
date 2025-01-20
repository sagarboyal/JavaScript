const unitConverter = {
    mToFt: function(meters){
        return meters * 3.28084;
    },  
    kgToLbs: function(kilograms){
        return kilograms * 2.20462;
    },
    cToF: function(celsius){    
        return celsius * 9/5 + 32;
    }
};

document.getElementById('button').onclick = () => {
    let value = parseFloat(document.getElementById('input').value);
    let unit = document.getElementById('unit').value;
    
    if(isNaN(value)){
        alert('Please enter a valid number');
        return;
    }

    let result = 0;
    result = unit === 'mToFt' ? unitConverter.mToFt(value) : 
    unit === 'kgToLbs' ? unitConverter.kgToLbs(value) : unitConverter.cToF(value);

    document.getElementById('result').textContent = result.toFixed(2);
}
