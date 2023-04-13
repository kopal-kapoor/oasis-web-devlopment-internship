let result = document.getElementById('result');

function insert(char) {
    result.value += char;
}


function values(char) {
    result.value=2.71828182845;
}

function clearResult() {
    result.value = '';
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}