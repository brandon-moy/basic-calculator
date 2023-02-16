const $container = document.querySelector('.button-container')!;
const $display = document.querySelector('.display')!;

let first:boolean = true;
let firstHalf:string = ''
let secondHalf:string = ''
let operation:string

const check = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.tagName !== 'BUTTON') return;
    if (first) {
      if (firstHalf.length > 9) return;
      firstHalf += target.value;
      $display.textContent = firstHalf;
    } else if (!first) {
      if (secondHalf.length > 9) return;
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
      if (first) firstHalf = ''
      else secondHalf = ''
    }
  }

// const runOperation = (first:string, second:string, operand:string) => {

// }

$container.addEventListener('click', check)
