/* eslint-disable no-plusplus */
// import CardType from '/src/CardType.js';

const Col1_add = document.querySelector('[data-id=Col1_add]');
const Col2_add = document.querySelector('[data-id=Col2_add]');
const Col3_add = document.querySelector('[data-id=Col3_add]');
const Item_Enter_Form = document.querySelector('[data-id=Item_Enter_Form]');
const Form_Data_Title = document.querySelector('[data-id=Form_Data_Title]');
const Form_Data_Button = document.querySelector('[data-id=Form_Data_Button]');


document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-console
  console.log('Module started!');
  Col1_add.addEventListener('click', addElement01);
  Col2_add.addEventListener('click', addElement01);
  Col3_add.addEventListener('click', addElement01);
  Form_Data_Button.addEventListener('click', addElement02);
});

// Requesting topic
function addElement01 (evt) {
  const el = evt.target.parentNode;
  if (el) {
    Item_Enter_Form.classList.remove('invisible');
    el.appendChild(Item_Enter_Form);
    Form_Data_Title.value = '';
  }
}

// Adding topic element
function addElement02(evt) {
  evt.preventDefault();
  const el = Item_Enter_Form.parentNode;
  const text = Form_Data_Title.value;
  if (text) {
    const div = document.createElement('div');
    div.innerHTML = `<p>${text}</p>`;
    el.appendChild(div);
    div.classList.add('Subfolder-Item');
    div.addEventListener('mouseover', OptRemove);
    div.addEventListener('mouseout', EndOptRemove);
    div.addEventListener('click', OptDoRemove);
  }
  Item_Enter_Form.classList.add('invisible');
}

function OptRemove(evt) {
  evt.target.style.cursor = 
  // "url('https://cdn4.iconfinder.com/data/icons/podcast-collection/100/close-512.png'), auto";
  'crosshair';
  // "url('img/delete_sign-512.png'), auto";
}

// mouse out topic element
function EndOptRemove(evt) {
  evt.target.style.cursor = 'auto';
}

// Delete selected topic element by click
function OptDoRemove(evt) {
  let el;
  console.log(evt.target.classList);
  if (evt.target.classList.contains('Subfolder-Item')) {
    el = evt.target;
  } else {
    el = evt.target.parentElement;
  }

  const arr = Array.prototype.slice.call(el.childNodes);
  const p = arr.find((o) => o.nodeName.toUpperCase() == 'P');
  let label = '';
  if (p) {
    label = ` "${p.innerText}"`
  }
  
  console.log(el);
  if (confirm(`Delete element${label}?`)) {
    el.parentElement.removeChild(el);
  };
}