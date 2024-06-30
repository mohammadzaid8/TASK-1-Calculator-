function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let displayValue = document.getElementById('display').value;
    let result = eval(displayValue); // Using eval to evaluate the string expression

    document.getElementById('display').value = result;
}
