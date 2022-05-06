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

let arrRow1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];

function getRow1Content() {
  let fragment = new DocumentFragment();
  for (let i = 0; i < arrRow1.length; i++) {
    let keys = document.createElement('div');
    keys.className = "keys";
    keys.append(arrRow1[i]);
    fragment.append(keys);
  }
  return fragment;
}
row1.append(getRow1Content());

let backspace = document.querySelector("body > div > div > div:nth-child(1) > div:nth-child(14)");
backspace.className = "keys backspace-key";