let par1
let par2
let operator

function sum (par1, par2) {
    return par1 + par2;
}
console.log(sum(1,2));

function subtract (par1, par2) {
    return par1 - par2;
}
console.log(subtract(1,2));

function multiply (par1, par2) {
    return par1 * par2;
}
console.log(multiply(1,2));

function divide (par1, par2) {
    if (par2 === 0) return 'ERROR';
    return par1 / par2;
}
console.log(divide(1,2));

function operate (par1, par2, operator) {
    if (operator === "+") return sum (par1, par2);
    if (operator === "-") return subtract (par1, par2);
    if (operator === "*") return multiply (par1, par2);
    if (operator === "/") return divide (par1, par2);

}