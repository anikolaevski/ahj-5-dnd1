/* eslint-disable no-plusplus */
// import CardType from '/src/CardType.js';

const Folder1 = document.querySelector('[data-id=Folder1]');
const Folder2 = document.querySelector('[data-id=Folder2]');
const Folder3 = document.querySelector('[data-id=Folder3]');
const Col1_add = document.querySelector('[data-id=Col1_add]');
const Col2_add = document.querySelector('[data-id=Col2_add]');
const Col3_add = document.querySelector('[data-id=Col3_add]');
const Item_Enter_Form = document.querySelector('[data-id=Item_Enter_Form]');
const Form_Data_Title = document.querySelector('[data-id=Form_Data_Title]');
const Form_Data_Button = document.querySelector('[data-id=Form_Data_Button]');
let ghostEl = null;

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-console
  console.log('Module started!');
  LoadContent('Folder1', Folder1);
  LoadContent('Folder2', Folder2);
  LoadContent('Folder3', Folder3);
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
    setMouseEvents(div);
  }
  Item_Enter_Form.classList.add('invisible');
  SaveContent('Folder1', Folder1);
  SaveContent('Folder2', Folder2);
  SaveContent('Folder3', Folder3);
}

function setMouseEvents(div) {
    // div.addEventListener('mouseover', OptRemove);     // ready for deletion
    // div.addEventListener('mouseout', EndOptRemove);   // mouse out element
    // div.addEventListener('click', OptDoRemove);       // Delete selected element by click
    div.addEventListener('mousedown', OptMouseDown);  // Element Dragstart
    // div.addEventListener('mousemove', OptMouseMove);
}

function removeMouseEvents(div) {

}

// ready for deletion
function OptRemove(evt) {
  evt.preventDefault();
  evt.target.style.cursor = 
  // "url('https://cdn4.iconfinder.com/data/icons/podcast-collection/100/close-512.png'), auto";
  'crosshair';
  // "url('img/delete_sign-512.png'), auto";
}

// mouse out element
function EndOptRemove(evt) {
  evt.target.style.cursor = 'auto';
}

// Element Dragstart (mousedown)
function OptMouseDown(evt) {
  evt.preventDefault();
  const el = evt.target;
  if (!el.classList.contains('Subfolder-Item')) {
    return;
  }
  console.log('DnD', el);
  ghostEl = el.cloneNode(true);
  ghostEl.classList.add('dragged');
  document.body.appendChild(ghostEl);
  ghostEl.style.left = `${evt.pageX - ghostEl.offsetWidth / 2}px`;
  ghostEl.style.top = `${evt.pageY - ghostEl.offsetHeight / 2}px`;
  ghostEl.addEventListener('mousemove', OptMouseMove);  // Element drag
}

// Element drag
function OptMouseMove (evt) {
  evt.preventDefault();
  const ghostEl = evt.target;
  if (!ghostEl) {return;}
  ghostEl.style.left = `${evt.pageX - ghostEl.offsetWidth / 2}px`;
  ghostEl.style.top = `${evt.pageY - ghostEl.offsetHeight / 2}px`;
}

// Delete selected element by click
function OptDoRemove(evt) {
  evt.preventDefault();
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
    SaveContent('Folder1', Folder1);
    SaveContent('Folder2', Folder2);
    SaveContent('Folder3', Folder3);
  };
}

function SaveContent(name, el) {
  let saveArr = [];
  const arr = Array.prototype.slice.call(el.childNodes);
  arr.forEach((o) => {
    // console.log(o);
    if (typeof(o.classList) != 'undefined') {
      const classList = Array.prototype.slice.call(o.classList);
      if (classList.includes('Subfolder-Item')) {
        saveArr.push(JSON.stringify({item: o.innerHTML}));
      }
    }
  });
  localStorage.setItem(name, saveArr);
}

function LoadContent(name, el) {
  const app = JSON.parse(`[${localStorage.getItem(name)}]`);
  app.forEach((o) => {
    const div = document.createElement('div');
    div.innerHTML = o.item;
    el.appendChild(div);
    div.classList.add('Subfolder-Item');
    setMouseEvents(div);
  });
  // console.log(name, app);
}
