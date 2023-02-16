"use strict";
const $numbers = document.querySelectorAll('.num');
const $operands = document.querySelectorAll('.operator');
const $clearEntry = document.querySelector('.clear-entry');
const $clearAll = document.querySelector('.all-clear');
const $display = document.querySelector('.display');
const $equals = document.querySelector('.equal-sign');
let first = true;
let firstHalf = '';
let secondHalf = '';
let operation = '';
const updateNums = (event) => {
    const target = event.target;
    if (first) {
        if (firstHalf.length > 9)
            return;
        firstHalf += target.value;
        $display.textContent = firstHalf;
    }
    else if (!first) {
        if (secondHalf.length > 9)
            return;
        secondHalf += target.value;
        $display.textContent = secondHalf;
    }
};
const clearEntry = (event) => {
    if (first)
        firstHalf = '';
    else
        secondHalf = '';
    $display.textContent = '';
};
const clearAll = (event) => {
    first = true;
    firstHalf = '';
    secondHalf = '';
    operation = '';
    $display.textContent = '';
};
const updateOperator = (event) => {
    const target = event.target;
    operation = target.value;
    first = false;
    console.log(operation);
};
// const runOperation = (event: Event) => {
//   if (operation === '') return;
//   value =
// }
$numbers.forEach(number => {
    number.addEventListener('click', updateNums);
});
$operands.forEach(operator => {
    operator.addEventListener('click', updateOperator);
});
$clearEntry.addEventListener('click', clearEntry);
$clearAll.addEventListener('click', clearAll);
//# sourceMappingURL=index.js.map