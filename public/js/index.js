'use strict';
const $numbers = document.querySelectorAll('.num');
// const $operands = document.querySelectorAll('.operator')!;
const $clearEntry = document.querySelector('.clear-entry');
// const $clearAll = document.querySelector('.all-clear')!;
const $display = document.querySelector('.display');
const first = true;
let firstHalf = '';
let secondHalf = '';
// let operation:string = ''
// const check = (event: Event) => {
//     const target = event.target as HTMLInputElement;
//     if (operation === 'all-clear') {
//       first = true;
//       firstHalf = '';
//       secondHalf = '';
//       operation = '';
//       $display.textContent = '';
//     } else if (operation === 'clear-entry') {
//       if (first) firstHalf = ''
//       else secondHalf = ''
//     }
//   }
const updateNums = event => {
  const target = event.target;
  if (first) {
    if (firstHalf.length > 9) { return; }
    firstHalf += target.value;
    $display.textContent = firstHalf;
  } else if (!first) {
    if (secondHalf.length > 9) { return; }
    secondHalf += target.value;
    $display.textContent = secondHalf;
  }
};
const clearEntry = event => {
  if (first) { firstHalf = ''; } else { secondHalf = ''; }
  $display.textContent = '';
};
$numbers.forEach(number => {
  number.addEventListener('click', updateNums);
});
$clearEntry.addEventListener('click', clearEntry);
// # sourceMappingURL=index.js.map
