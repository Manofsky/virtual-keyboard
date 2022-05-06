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

let arrRow1LowerCaseEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
let arrRow1CapsLockEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
let arrRow1ShiftEn = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
let arrRow1LowerCaseRu = ['ё'];
let arrRow1CapsLockRu = ['Ё'];
let arrRow1ShiftRu = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'];



let arrRow2LowerCaseEn = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
let arrRow2ShiftEn = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'];
let arrRow2CapsLockEn = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'];

let arrRow3LowerCaseEn = ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
let arrRow3ShiftEn = ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'];

let arrRow4LowerCaseEn = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'];
let arrRow4ShiftEn = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift'];

let arrRow5LowerCaseEn = ['Ctrl', 'Win', 'Alt', '', 'Alt', '◄', '▼', '►', 'Ctrl'];

class RowContent {
  constructor(arrLowerCaseEn, arrShiftEn) {
    this.arrLowerCaseEn = arrLowerCaseEn;
    this.arrShiftEn = arrShiftEn;
  }

  getRowContent() {
    let fragment = new DocumentFragment();
    for (let i = 0; i < this.arrLowerCaseEn.length; i++) {
      let keys = document.createElement('div');
      keys.className = "keys";
      keys.append(this.arrLowerCaseEn[i]);
      fragment.append(keys);
    }
    return fragment;
  }
}
let row1LowerCaseEn = new RowContent(arrRow1LowerCaseEn);
let row2LowerCaseEn = new RowContent(arrRow2LowerCaseEn);
let row3LowerCaseEn = new RowContent(arrRow3LowerCaseEn);
let row4LowerCaseEn = new RowContent(arrRow4LowerCaseEn);
let row5LowerCaseEn = new RowContent(arrRow5LowerCaseEn);
row1.append(row1LowerCaseEn.getRowContent());
row2.append(row2LowerCaseEn.getRowContent());
row3.append(row3LowerCaseEn.getRowContent());
row4.append(row4LowerCaseEn.getRowContent());
row5.append(row5LowerCaseEn.getRowContent());

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

let whitespace = document.querySelector("body > div > div > div:nth-child(5) > div:nth-child(4)");
whitespace.className = "keys whitespace-key";