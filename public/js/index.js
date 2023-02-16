"use strict";
const $numbers = document.querySelectorAll('.num');
const $operands = document.querySelectorAll('.operator');
const $clearEntry = document.querySelector('.clear-entry');
const $clearAll = document.querySelector('.all-clear');
const $display = document.querySelector('.display');
const $equals = document.querySelector('.equal-sign');
const $posNeg = document.querySelector('.negative');
let first = true;
let pos = true;
let firstHalf = '';
let secondHalf = '';
let operation = '';
let output = '';
const updateNums = (event) => {
    const target = event.target;
    if (first) {
        if (firstHalf.length > 9)
            return;
        if (target.value === '.' && firstHalf.includes('.'))
            return;
        firstHalf += target.value;
        $display.textContent = firstHalf;
    }
    else if (!first) {
        if (secondHalf.length > 9)
            return;
        if (target.value === '.' && secondHalf.includes('.'))
            return;
        secondHalf += target.value;
        $display.textContent = secondHalf;
    }
};
const posNeg = (event) => {
    if (first) {
        if (pos) {
            pos = false;
            firstHalf = '-' + firstHalf;
        }
        else {
            pos = true;
            firstHalf = firstHalf.slice(1);
        }
        $display.textContent = firstHalf;
    }
    else {
        if (pos) {
            pos = false;
            secondHalf = '-' + secondHalf;
        }
        else {
            pos = true;
            secondHalf = secondHalf.slice(1);
        }
        $display.textContent = secondHalf;
    }
};
const clearEntry = (event) => {
    if (first)
        firstHalf = '';
    else
        secondHalf = '';
    $display.textContent = '0';
};
const clearAll = (event) => {
    first = true;
    firstHalf = '';
    secondHalf = '';
    operation = '';
    $display.textContent = '0';
};
const updateOperator = (event) => {
    const target = event.target;
    operation = target.value;
    first = false;
    pos = true;
};
const runOperation = (event) => {
    if (operation === '')
        return;
    if (operation === '/') {
        output = String(+firstHalf / +secondHalf);
    }
    else if (operation === '*') {
        output = String(+firstHalf * +secondHalf);
    }
    else if (operation === '-') {
        output = String(+firstHalf - +secondHalf);
    }
    if (operation === '+') {
        output = String(+firstHalf + +secondHalf);
    }
    if (output.length > 9 && output.includes('.')) {
        output = output.slice(10);
    }
    else if (output.length > 9 && +output > 1000000) {
        output = Number.parseFloat(output).toExponential(5);
    }
    else if (output.length > 9 && +output < 0) {
        output = Number.parseFloat(output).toExponential(5);
    }
    firstHalf = output;
    secondHalf = '';
    operation = '';
    pos = true;
    $display.textContent = output;
};
$numbers.forEach(number => {
    number.addEventListener('click', updateNums);
});
$operands.forEach(operator => {
    operator.addEventListener('click', updateOperator);
});
$posNeg.addEventListener('click', posNeg);
$equals.addEventListener('click', runOperation);
$clearEntry.addEventListener('click', clearEntry);
$clearAll.addEventListener('click', clearAll);
//# sourceMappingURL=index.js.map