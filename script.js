let container = document.createElement('div');
let title = document.createElement('h1');
let text = document.createElement('textarea');
let keyboardWrapp = document.createElement('div');
let commentFirst = document.createElement('p');
let commentSecond = document.createElement('p');

container.className = "container";
title.className = "title";
text.className = "text";
keyboardWrapp.className = "keyboard-wrapp";
commentFirst.className = "description";
commentSecond.className = "language";

title.innerHTML = "RSS Virtual keyboard";
commentFirst.innerHTML = "The keyboard was created in the Windows operating system.";
commentSecond.innerHTML = "To switch the language combination: left shift + alt.";

document.body.append(container);
container.append(title, text, keyboardWrapp, commentFirst, commentSecond);

function getKeyboardWrappContent() {
  let fragment = new DocumentFragment();
  for (let i = 1; i <= 5; i++) {
    let row = document.createElement('div');
    row.className = "row";
    fragment.append(row);
  }
  return fragment;
}
keyboardWrapp.append(getKeyboardWrappContent());

let row1 = document.querySelector("body > div > div > div:nth-child(1)");
let row2 = document.querySelector("body > div > div > div:nth-child(2)");
let row3 = document.querySelector("body > div > div > div:nth-child(3)");
let row4 = document.querySelector("body > div > div > div:nth-child(4)");
let row5 = document.querySelector("body > div > div > div:nth-child(5)");

function pressVirtualKeyboard() {
  let eventTarget;
  document.addEventListener('mousedown', function (event) {
    eventTarget = event.target;
    if (eventTarget.innerHTML === 'Caps Lock') { event.target.classList.toggle('pressed'); }
    else if (eventTarget.innerHTML.length < 10 && eventTarget.innerHTML.length > 0) {
      event.target.classList.add('pressed');
    }
  });
  document.addEventListener('mouseup', function () {
    if (eventTarget.innerHTML !== 'Caps Lock') {
      eventTarget.classList.remove('pressed');
    }
  });
}
pressVirtualKeyboard();

let arrRow1Code = ['Backquote', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
let arrRow1LowerCaseEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
let arrRow1ShiftEn = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
// let arrRow1CapsLockEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
// let arrRow1LowerCaseRu = ['ё'];
// let arrRow1CapsLockRu = ['Ё'];
// let arrRow1ShiftRu = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'];


let arrRow2Code = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'];
let arrRow2LowerCaseEn = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
let arrRow2ShiftEn = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'];
// let arrRow2CapsLockEn = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'];

let arrRow3Code = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
let arrRow3LowerCaseEn = ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
let arrRow3ShiftEn = ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'];

let arrRow4Code = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
let arrRow4LowerCaseEn = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'];
let arrRow4ShiftEn = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift'];

let arrRow5LowerCaseEn = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];
let arrRow5ShiftEn = [];

class RowContent {
  constructor(arrLowerCaseEn, arrShiftEn, arrRowCode) {
    this.arrLowerCaseEn = arrLowerCaseEn;
    this.arrShiftEn = arrShiftEn;
    this.arrRowCode = arrRowCode;
  }

  getRowContent() {
    let fragment = new DocumentFragment();
    for (let i = 0; i < this.arrLowerCaseEn.length; i++) {
      let keys = document.createElement('div');
      keys.className = "keys";
      if (this.arrRowCode) {
        keys.id = this.arrRowCode[i];
      }
      keys.append(this.arrLowerCaseEn[i]);
      fragment.append(keys);
    }
    return fragment;
  }

  pressPhysicalKeyboard() {
    let eventTarget;
    let arrElemId = '';
    if (this.arrRowCode) { arrElemId = this.arrRowCode; }
    let arr = this.arrLowerCaseEn;
    document.addEventListener('keydown', function (event) {
      eventTarget = event.target;
      for (let i = 0; i < arr.length; i++) {
        if (arrElemId[i] === 'CapsLock' || arrElemId[i] === 'ShiftLeft' || arrElemId[i] === 'ShiftRight') { continue }
        else if (arr[i] === event.key && arrElemId !== '') {
          document.getElementById(arrElemId[i]).classList.add('pressed');
        }
        document.addEventListener('keyup', function () {
          document.getElementById(arrElemId[i]).classList.remove('pressed');
        });
      }
    });
  }
}
let row1LowerCaseEn = new RowContent(arrRow1LowerCaseEn, arrRow1ShiftEn, arrRow1Code);
let row2LowerCaseEn = new RowContent(arrRow2LowerCaseEn, arrRow2ShiftEn, arrRow2Code);
let row3LowerCaseEn = new RowContent(arrRow3LowerCaseEn, arrRow3ShiftEn, arrRow3Code);
let row4LowerCaseEn = new RowContent(arrRow4LowerCaseEn, arrRow4ShiftEn, arrRow4Code);
let row5LowerCaseEn = new RowContent(arrRow5LowerCaseEn, arrRow5ShiftEn);
row1.append(row1LowerCaseEn.getRowContent());
row2.append(row2LowerCaseEn.getRowContent());
row3.append(row3LowerCaseEn.getRowContent());
row4.append(row4LowerCaseEn.getRowContent());
row5.append(row5LowerCaseEn.getRowContent());
row1LowerCaseEn.pressPhysicalKeyboard();
row2LowerCaseEn.pressPhysicalKeyboard();
row3LowerCaseEn.pressPhysicalKeyboard();
row4LowerCaseEn.pressPhysicalKeyboard();

let backspace = document.querySelector("body > div > div > div:nth-child(1) > div:nth-child(14)");
backspace.className = "keys backspace-key";

let tab = document.querySelector("body > div > div > div:nth-child(2) > div:nth-child(1)");
tab.className = "keys tab-key";

let del = document.querySelector("body > div > div > div:nth-child(2) > div:nth-child(15)");
del.className = "keys del-key";

let capsLock = document.querySelector("body > div > div > div:nth-child(3) > div:nth-child(1)");
capsLock.className = "keys caps-lock-key";

let enter = document.querySelector("body > div > div > div:nth-child(3) > div:nth-child(13)");
enter.className = "keys enter-key";

let shiftLeft = document.querySelector("body > div > div > div:nth-child(4) > div:nth-child(1)");
shiftLeft.className = "keys shift-left-key";

let shiftRight = document.querySelector("body > div > div > div:nth-child(4) > div:nth-child(13)");
shiftRight.className = "keys shift-right-key";

let controlLeft = document.querySelector("body > div > div > div:nth-child(5) > div:nth-child(1)");
let controlRight = document.querySelector("body > div > div > div:nth-child(5) > div:nth-child(9)");

let altLeft = document.querySelector("body > div > div > div:nth-child(5) > div:nth-child(3)");
let altRight = document.querySelector("body > div > div > div:nth-child(5) > div:nth-child(5)");

let meta = document.querySelector("body > div > div > div:nth-child(5) > div:nth-child(2)");
let arrowLeft = document.querySelector("body > div > div > div:nth-child(5) > div:nth-child(6)");
let arrowUp = document.querySelector("body > div > div > div:nth-child(4) > div:nth-child(12)");
let arrowDown = document.querySelector("body > div > div > div:nth-child(5) > div:nth-child(7)");
let arrowRight = document.querySelector("body > div > div > div:nth-child(5) > div:nth-child(8)");

let whitespace = document.querySelector("body > div > div > div:nth-child(5) > div:nth-child(4)");
whitespace.className = "keys whitespace-key";

document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'Backspace':
      backspace.classList.add('pressed');
      break;
    case 'Tab':
      tab.classList.add('pressed');
      break;
    case 'Delete':
      del.classList.add('pressed');
      break;
    case 'CapsLock':
      capsLock.classList.toggle('pressed');
      break;
    case 'Enter':
      enter.classList.add('pressed');
      break;
    case 'Meta':
      meta.classList.add('pressed');
      break;
    case 'ArrowLeft':
      arrowLeft.classList.add('pressed');
      break;
    case 'ArrowUp':
      arrowUp.classList.add('pressed');
      break;
    case 'ArrowDown':
      arrowDown.classList.add('pressed');
      break;
    case 'ArrowRight':
      arrowRight.classList.add('pressed');
      break;
    case ' ':
      whitespace.classList.add('pressed');
      break;
  }
  switch (event.code) {
    case 'ShiftLeft':
      shiftLeft.classList.add('pressed');
      break;
    case 'ShiftRight':
      shiftRight.classList.add('pressed');
      break;
    case 'ControlLeft':
      controlLeft.classList.add('pressed');
      break;
    case 'ControlRight':
      controlRight.classList.add('pressed');
      break;
    case 'AltLeft':
      altLeft.classList.add('pressed');
      break;
    case 'AltRight':
      altRight.classList.add('pressed');
      break;
  }
});

document.addEventListener('keyup', function (event) {
  switch (event.key) {
    case 'Backspace':
      backspace.classList.remove('pressed');
      break;
    case 'Tab':
      tab.classList.remove('pressed');
      break;
    case 'Delete':
      del.classList.remove('pressed');
      break;
    case 'Enter':
      enter.classList.remove('pressed');
      break;
    case 'Meta':
      meta.classList.remove('pressed');
      break;
    case 'ArrowLeft':
      arrowLeft.classList.remove('pressed');
      break;
    case 'ArrowUp':
      arrowUp.classList.remove('pressed');
      break;
    case 'ArrowDown':
      arrowDown.classList.remove('pressed');
      break;
    case 'ArrowRight':
      arrowRight.classList.remove('pressed');
      break;
    case ' ':
      whitespace.classList.remove('pressed');
      break;
  }
  switch (event.code) {
    case 'ShiftLeft':
      shiftLeft.classList.remove('pressed');
      break;
    case 'ShiftRight':
      shiftRight.classList.remove('pressed');
      break;
    case 'ControlLeft':
      controlLeft.classList.remove('pressed');
      break;
    case 'ControlRight':
      controlRight.classList.remove('pressed');
      break;
    case 'AltLeft':
      altLeft.classList.remove('pressed');
      break;
    case 'AltRight':
      altRight.classList.remove('pressed');
      break;
  }
});