/* eslint-disable no-plusplus */
// import CardType from '/src/CardType.js';

const Folder1 = document.querySelector('[data-id=Folder1]');
const Folder2 = document.querySelector('[data-id=Folder2]');
const Folder3 = document.querySelector('[data-id=Folder3]');
const Col1_add = document.querySelector('[data-id=Col1_add]');
const Col2_add = document.querySelector('[data-id=Col2_add]');
const Col3_add = document.querySelector('[data-id=Col3_add]');

const dndObj = {
  ghostEl: null,
  dragEl: null,
  keepReserveEl: document.createElement('div'),
  keepReserveParent: null,
}

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-console
  console.log('Module started!');
  LoadContent('Folder1', Folder1);
  LoadContent('Folder2', Folder2);
  LoadContent('Folder3', Folder3);
  Col1_add.addEventListener('click', addElement01);
  Col2_add.addEventListener('click', addElement01);
  Col3_add.addEventListener('click', addElement01);
});

// Requesting topic
function addElement01 (evt) {
  const el = evt.target.parentNode;
  if (el) {
    const Item_Enter_Form = document.querySelector('[data-id=Item_Enter_Form]');
    const Form_Data_Title = document.querySelector('[data-id=Form_Data_Title]');
    const Form_Data_Button = document.querySelector('[data-id=Form_Data_Button]');
    Form_Data_Button.addEventListener('click', addElement02);
    Item_Enter_Form.classList.remove('invisible');
    el.appendChild(Item_Enter_Form);
    Form_Data_Title.value = '';
  }
}

// Adding topic element
function addElement02(evt) {
  evt.preventDefault();
  const Item_Enter_Form = document.querySelector('[data-id=Item_Enter_Form]');
  const Form_Data_Title = document.querySelector('[data-id=Form_Data_Title]');
  const el = Item_Enter_Form.parentNode;
  const text = Form_Data_Title.value;
  if (text) {
    const div = document.createElement('div');
    div.innerHTML = `<p class="Item-Content">${text}</p>`;
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
    div.addEventListener('mouseover', OptRemove);     // ready for deletion
    div.addEventListener('mouseout', EndOptRemove);   // mouse out element
    // div.addEventListener('click', OptDoRemove);       // Delete selected element by click
    div.addEventListener('mousedown', OptMouseDown);  // Element Dragstart
    // div.addEventListener('mousemove', OptMouseMove);
}

function removeMouseEvents(div) {

}

// ready for deletion
function OptRemove(evt) {
  // evt.preventDefault();
  let el;
  if(evt.target.classList.contains('Subfolder-Item')) {
    el = evt.target;
  } else {
    el = evt.target.parentElement;
  }

  const div = document.createElement('div');
  el.appendChild(div);
  div.classList.add('delete-box');
  div.style.top = `${el.offsetTop + 10}px`;

  div.addEventListener('click', OptDoRemove);
  // console.log(div);
  // } else {
  //   console.log(evt.target.nodeName);
  }
}

// mouse out element
function EndOptRemove(evt) {
  const delbox = evt.target.querySelector('.delete-box');
  if (delbox) {
    evt.target.removeChild(delbox);
  }
}

// Element Dragstart (mousedown)
function OptMouseDown(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('Subfolder-Item')) {
    return;
  }
  dndObj.dragEl = evt.target;
  // console.log('DnD', dndObj.dragEl);
  dndObj.ghostEl = dndObj.dragEl.cloneNode(true);
  dndObj.ghostEl.classList.add('dragged');
  document.body.appendChild(dndObj.ghostEl);
  dndObj.ghostEl.style.left = `${evt.pageX - dndObj.ghostEl.offsetWidth / 2}px`;
  dndObj.ghostEl.style.top = `${evt.pageY - dndObj.ghostEl.offsetHeight / 2}px`;
  dndObj.ghostEl.addEventListener('mousemove', OptMouseMove);  // Element drag
  dndObj.ghostEl.addEventListener('mouseup', OptDragEnd);  // Element drag
}

// Element drag
function OptMouseMove (evt) {
  evt.preventDefault();
  dndObj.ghostEl = evt.target;
  if (!dndObj.ghostEl) {return;}
  dndObj.ghostEl.style.left = `${evt.pageX - dndObj.ghostEl.offsetWidth / 2}px`;
  dndObj.ghostEl.style.top = `${evt.pageY - dndObj.ghostEl.offsetHeight / 2}px`;
  const ar = document.elementsFromPoint(evt.clientX, evt.clientY);
  const closest = ar.find((o) => {
    return o.nodeName.toUpperCase() == 'DIV' && o.classList.contains('Subfolder-Item') && !o.classList.contains('dragged')
  });
  dndObj.keepReserveParent = ar.find((o) => {
    return o.nodeName.toUpperCase() == 'DIV' && o.classList.contains('Subfolder') && !o.classList.contains('dragged')
  });
  if (closest) {
    const parent = closest.parentElement;
    parent.insertBefore(dndObj.keepReserveEl, closest);
    dndObj.keepReserveEl.style.width = `${dndObj.dragEl.offsetWidth}px`;
    dndObj.keepReserveEl.style.height = `${dndObj.dragEl.offsetHeight}px`;
    // dndObj.keepReserveEl.classList.add('Subfolder-Item');
  } else if (dndObj.keepReserveParent && dndObj.keepReserveEl) {
    dndObj.keepReserveParent.appendChild(dndObj.keepReserveEl);
    dndObj.keepReserveEl.style.width = `${dndObj.dragEl.offsetWidth}px`;
    dndObj.keepReserveEl.style.height = `${dndObj.dragEl.offsetHeight}px`;
    // dndObj.keepReserveEl.classList.add('Subfolder-Item');
  }
}

// Element drag end
function OptDragEnd(evt) {
  if (!dndObj.dragEl) {
    return;
  }

  if (dndObj.keepReserveEl) {
    const parent = dndObj.keepReserveEl.parentElement;
    parent.insertBefore(dndObj.dragEl, dndObj.keepReserveEl);
  } else if (dndObj.keepReserveParent) {
    dndObj.keepReserveParent.appendChild(dndObj.dragEl);
  }

  let criteria = true;
  while (criteria) {
    const toDel = document.querySelector(".dragged");
    if (toDel) {
      const parentel = toDel.parentNode;
      parentel.removeChild(toDel);
    } else {
      criteria = false;
    }
  }

  if (dndObj.keepReserveEl) {
    const parentel = dndObj.keepReserveEl.parentNode;
    parentel.removeChild(dndObj.keepReserveEl);
  }

  dndObj.ghostEl = null;
  dndObj.dragEl = null;

  // save state here
  SaveContent('Folder1', Folder1);
  SaveContent('Folder2', Folder2);
  SaveContent('Folder3', Folder3);
}

// Delete selected element by click
function OptDoRemove(evt) {
  evt.preventDefault();
  let el;
  // console.log(evt.target.classList);
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
  
  // console.log(el);
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
    if (o && Object.keys(o).includes('item')) {
      const div = document.createElement('div');
      div.innerHTML = o.item;
      el.appendChild(div);
      div.classList.add('Subfolder-Item');
      setMouseEvents(div);
    }
  });
  // console.log(name, app);
}
