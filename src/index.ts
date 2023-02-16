const $numbers = document.querySelectorAll('.num')!;
const $operands = document.querySelectorAll('.operator')!;
const $clearEntry = document.querySelector('.clear-entry')!;
const $clearAll = document.querySelector('.all-clear')!;
const $display = document.querySelector('.display')!;
const $equals =document.querySelector('.equal-sign')!;
let first:boolean = true;
let firstHalf:string = ''
let secondHalf:string = ''
let operation:string = ''

const updateNums = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (first) {
    if (firstHalf.length > 9) return;
    firstHalf += target.value;
    $display.textContent = firstHalf;
  } else if (!first) {
    if (secondHalf.length > 9) return;
    secondHalf += target.value;
    $display.textContent = secondHalf;
  }
}

const clearEntry = (event: Event) => {
  if (first) firstHalf = '';
  else secondHalf = '';
  $display.textContent = '';
}

const clearAll = (event: Event) => {
  first = true;
  firstHalf = ''
  secondHalf = ''
  operation = ''
  $display.textContent = ''
}

const updateOperator = (event: Event) => {
  const target = event.target as HTMLInputElement;
  operation = target.value;
  first = false;
}

// const runOperation = (event: Event) => {
//   if (operation === '') return;
//   value =
// }

$numbers.forEach(number => {
  number.addEventListener('click', updateNums);
})

$operands.forEach(operator => {
  operator.addEventListener('click', updateOperator);
})

$clearEntry.addEventListener('click', clearEntry);
$clearAll.addEventListener('click', clearAll);
