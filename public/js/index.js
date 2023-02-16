'use strict';
const $container = document.querySelector('.button-container');
const $display = document.querySelector('.display');
let first = true;
let firstHalf = '';
let secondHalf = '';
let operation;
const check = event => {
  const target = event.target;
  if (target.tagName !== 'BUTTON') { return; }
  if (first) {
    if (firstHalf.length > 9) { return; }
    firstHalf += target.value;
    $display.textContent = firstHalf;
  } else if (!first) {
    if (secondHalf.length > 9) { return; }
    secondHalf += target.value;
    $display.textContent = secondHalf;
  } else {
    operation = target.value;
  }
  if (operation === 'all-clear') {
    first = true;
    firstHalf = '';
    secondHalf = '';
    operation = '';
    $display.textContent = '';
  } else if (operation === 'clear-entry') {
    if (first) { firstHalf = ''; } else { secondHalf = ''; }
  }
};
// const runOperation = (first:string, second:string, operand:string) => {
// }
$container.addEventListener('click', check);
// # sourceMappingURL=index.js.map
