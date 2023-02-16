const $numbers = document.querySelectorAll('.num')!;
// const $operands = document.querySelectorAll('.operator')!;
const $clearEntry = document.querySelector('.clear-entry')!;
// const $clearAll = document.querySelector('.all-clear')!;
const $display = document.querySelector('.display')!;

let first:boolean = true;
let firstHalf:string = ''
let secondHalf:string = ''
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

$numbers.forEach(number => {
  number.addEventListener('click', updateNums);
})

$clearEntry.addEventListener('click', clearEntry);
