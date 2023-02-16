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
let output:string = ''

const updateNums = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (first) {
    if (firstHalf.length > 9) return;
    if (target.value === '.' && firstHalf.includes('.')) return;
    firstHalf += target.value;
    $display.textContent = firstHalf;
  } else if (!first) {
    if (secondHalf.length > 9) return;
    if (target.value === '.' && secondHalf.includes('.')) return;
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
  console.log(operation)
  first = false;
}

const runOperation = (event: Event) => {
  if (operation === '') return;
  if (operation === '/') {
    output = String(+firstHalf / +secondHalf);
  } else if (operation === '*') {
    output = String(+firstHalf * +secondHalf);
  } else if (operation === '-') {
    output = String(+firstHalf - +secondHalf);
  } if (operation === '+') {
    output = String(+firstHalf + +secondHalf);
  }

  if (output.length > 9 && output.includes('.')) {
    output = output.slice(10);
  }
  else if (output.length > 9 && +output > 1000000) {
    const second = output.slice(8, output.length)
    output = output.slice(8) + 'e' + second;
  }
  firstHalf = output;
  secondHalf = '';
  operation = '';
  $display.textContent = output;
}

$numbers.forEach(number => {
  number.addEventListener('click', updateNums);
})

$operands.forEach(operator => {
  operator.addEventListener('click', updateOperator);
})

$equals.addEventListener('click', runOperation);
$clearEntry.addEventListener('click', clearEntry);
$clearAll.addEventListener('click', clearAll);
