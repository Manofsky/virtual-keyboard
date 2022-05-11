const container = document.createElement('div');
const title = document.createElement('h1');
const text = document.createElement('textarea');
const keyboardWrapp = document.createElement('div');
const commentFirst = document.createElement('p');
const commentSecond = document.createElement('p');

container.className = 'container';
title.className = 'title';
text.className = 'text';
keyboardWrapp.className = 'keyboard-wrapp';
commentFirst.className = 'description';
commentSecond.className = 'language';

title.innerHTML = 'RSS Virtual keyboard';
commentFirst.innerHTML = 'The keyboard was created in the Windows operating system.';
commentSecond.innerHTML = 'To switch the language combination: left shift + alt.';

document.body.append(container);
container.append(title, text, keyboardWrapp, commentFirst, commentSecond);

function getKeyboardWrappContent() {
  const fragment = new DocumentFragment();
  for (let i = 1; i <= 5; i += 1) {
    const row = document.createElement('div');
    row.className = 'row';
    fragment.append(row);
  }
  return fragment;
}
keyboardWrapp.append(getKeyboardWrappContent());

const row1 = document.querySelector('body > div > div > div:nth-child(1)');
const row2 = document.querySelector('body > div > div > div:nth-child(2)');
const row3 = document.querySelector('body > div > div > div:nth-child(3)');
const row4 = document.querySelector('body > div > div > div:nth-child(4)');
const row5 = document.querySelector('body > div > div > div:nth-child(5)');

function pressVirtualKeyboard() {
  let eventTarget;
  document.addEventListener('mousedown', (event) => {
    eventTarget = event.target;
    if (eventTarget.innerHTML === 'Caps Lock') { event.target.classList.toggle('pressed'); } else if (eventTarget.innerHTML.length < 10 && eventTarget.innerHTML.length > 0) {
      event.target.classList.add('pressed');
    }
  });
  document.addEventListener('mouseup', () => {
    if (eventTarget.innerHTML !== 'Caps Lock') {
      eventTarget.classList.remove('pressed');
    }
  });
}
pressVirtualKeyboard();

const arrRow1Code = ['Backquote', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const arrRow1LowerCaseEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const arrRow1ShiftEn = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];

const arrRow2Code = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'];
const arrRow2LowerCaseEn = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'];
const arrRow2ShiftEn = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'];

const arrRow3Code = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
const arrRow3LowerCaseEn = ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
const arrRow3ShiftEn = ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'];

const arrRow4Code = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
const arrRow4LowerCaseEn = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'];
const arrRow4ShiftEn = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift'];

const arrRow5Code = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const arrRow5LowerCaseEn = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl'];
const arrRow5ShiftEn = [];

class RowContent {
  constructor(arrLowerCaseEn, arrShiftEn, arrRowCode) {
    this.arrLowerCaseEn = arrLowerCaseEn;
    this.arrShiftEn = arrShiftEn;
    this.arrRowCode = arrRowCode;
  }

  getRowContent() {
    const fragment = new DocumentFragment();
    for (let i = 0; i < this.arrLowerCaseEn.length; i += 1) {
      const keys = document.createElement('div');
      keys.className = 'keys';
      keys.id = this.arrRowCode[i];
      keys.append(this.arrLowerCaseEn[i]);
      fragment.append(keys);
    }
    return fragment;
  }

  pressPhysicalKeyboard() {
    const arrElemId = this.arrRowCode;
    const arr = this.arrLowerCaseEn;
    document.addEventListener('keydown', (event) => {
      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === event.key && arrElemId[i] !== 'CapsLock' && arrElemId[i] !== 'ShiftLeft' && arrElemId[i] !== 'ShiftRight' && arrElemId[i] !== 'AltLeft' && arrElemId[i] !== 'AltRight' && arrElemId[i] !== 'ArrowUp' && arrElemId[i] !== 'ArrowLeft' && arrElemId[i] !== 'ArrowDown' && arrElemId[i] !== 'ArrowRight' && arrElemId[i] !== 'Space') {
          document.getElementById(arrElemId[i]).classList.add('pressed');
        }
        document.addEventListener('keyup', () => {
          document.getElementById(arrElemId[i]).classList.remove('pressed');
        });
      }
    });
  }
}
const row1LowerCaseEn = new RowContent(arrRow1LowerCaseEn, arrRow1ShiftEn, arrRow1Code);
const row2LowerCaseEn = new RowContent(arrRow2LowerCaseEn, arrRow2ShiftEn, arrRow2Code);
const row3LowerCaseEn = new RowContent(arrRow3LowerCaseEn, arrRow3ShiftEn, arrRow3Code);
const row4LowerCaseEn = new RowContent(arrRow4LowerCaseEn, arrRow4ShiftEn, arrRow4Code);
const row5LowerCaseEn = new RowContent(arrRow5LowerCaseEn, arrRow5ShiftEn, arrRow5Code);
row1.append(row1LowerCaseEn.getRowContent());
row2.append(row2LowerCaseEn.getRowContent());
row3.append(row3LowerCaseEn.getRowContent());
row4.append(row4LowerCaseEn.getRowContent());
row5.append(row5LowerCaseEn.getRowContent());
row1LowerCaseEn.pressPhysicalKeyboard();
row2LowerCaseEn.pressPhysicalKeyboard();
row3LowerCaseEn.pressPhysicalKeyboard();
row4LowerCaseEn.pressPhysicalKeyboard();
row5LowerCaseEn.pressPhysicalKeyboard();

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'Delete':
      document.getElementById('Delete').classList.add('pressed');
      break;
    case 'CapsLock':
      document.getElementById('CapsLock').classList.toggle('pressed');
      break;
    case 'Meta':
      document.getElementById('MetaLeft').classList.add('pressed');
      break;
    case 'ArrowLeft':
      document.getElementById('ArrowLeft').classList.add('pressed');
      break;
    case 'ArrowUp':
      document.getElementById('ArrowUp').classList.add('pressed');
      break;
    case 'ArrowDown':
      document.getElementById('ArrowDown').classList.add('pressed');
      break;
    case 'ArrowRight':
      document.getElementById('ArrowRight').classList.add('pressed');
      break;
    case ' ':
      document.getElementById('Space').classList.add('pressed');
      break;
    // no default
  }
  switch (event.code) {
    case 'ShiftLeft':
      document.getElementById('ShiftLeft').classList.add('pressed');
      break;
    case 'ShiftRight':
      document.getElementById('ShiftRight').classList.add('pressed');
      break;
    case 'ControlLeft':
      document.getElementById('ControlLeft').classList.add('pressed');
      break;
    case 'ControlRight':
      document.getElementById('ControlRight').classList.add('pressed');
      break;
    case 'AltLeft':
      document.getElementById('AltLeft').classList.add('pressed');
      break;
    case 'AltRight':
      document.getElementById('AltRight').classList.add('pressed');
      break;
    // no default
  }
});

document.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'Delete':
      document.getElementById('Delete').classList.remove('pressed');
      break;
    case 'Meta':
      document.getElementById('MetaLeft').classList.remove('pressed');
      break;
    case 'ArrowLeft':
      document.getElementById('ArrowLeft').classList.remove('pressed');
      break;
    case 'ArrowUp':
      document.getElementById('ArrowUp').classList.remove('pressed');
      break;
    case 'ArrowDown':
      document.getElementById('ArrowDown').classList.remove('pressed');
      break;
    case 'ArrowRight':
      document.getElementById('ArrowRight').classList.remove('pressed');
      break;
    case ' ':
      document.getElementById('Space').classList.remove('pressed');
      break;
    // no default
  }
  switch (event.code) {
    case 'ShiftLeft':
      document.getElementById('ShiftLeft').classList.remove('pressed');
      break;
    case 'ShiftRight':
      document.getElementById('ShiftRight').classList.remove('pressed');
      break;
    case 'ControlLeft':
      document.getElementById('ControlLeft').classList.remove('pressed');
      break;
    case 'ControlRight':
      document.getElementById('ControlRight').classList.remove('pressed');
      break;
    case 'AltLeft':
      document.getElementById('AltLeft').classList.remove('pressed');
      break;
    case 'AltRight':
      document.getElementById('AltRight').classList.remove('pressed');
      break;
    // no default
  }
});
