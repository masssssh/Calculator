const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
let par1 = '';
let par2 = '';
let operator = null;

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return 'ERROR';
    return a / b;
}

function operate(par1, par2, operator) {
    par1 = parseFloat(par1);
    par2 = parseFloat(par2);

    if (isNaN(par1) || isNaN(par2)) return 'ERROR';

    let result;
    switch (operator) {
        case '+': result = sum(par1, par2); break;
        case '-': result = subtract(par1, par2); break;
        case '*': result = multiply(par1, par2); break;
        case '/': result = divide(par1, par2); break;
        default: return 'ERROR';
    }

    return Math.round(result * 1000) / 1000; 
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        if (value === '×') value = '*';
        if (value === '÷') value = '/';
        if (value === '−') value = '-'; 

        if (!isNaN(value) || value === '.') {
            
            if (operator === null) {
                par1 += value;
                display.textContent = par1;
            } else {
                par2 += value;
                display.textContent = par2;
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            
            if (par1 !== '' && par2 === '') {
                operator = value;
            }
        } else if (value === '=') {
            
            if (par1 !== '' && par2 !== '' && operator) {
                const result = operate(par1, par2, operator);
                display.textContent = result;
                par1 = result.toString(); 
                par2 = '';
                operator = null;
            }
        } else if (value === 'C') {

            par1 = '';
            par2 = '';
            operator = null;
            display.textContent = '';
        }
    });
});
