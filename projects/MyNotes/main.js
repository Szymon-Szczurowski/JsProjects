const addBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteBtn = document.querySelector('.delete-note');
const deleteAllBtn = document.querySelector('.delete-all');

const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textarea = document.querySelector('#text');
const error = document.querySelector('.error');

let selectedValue;
let cardID = 0;

const openPanel = () => {
    notePanel.style.display = 'flex';
}

const closePanel = () => {
    notePanel.style.display = 'none';
    error.style.visibility = 'hidden';
    textarea.value = '';
    category.selectedIndex = 0;
}

const addNote = () => {
    if (textarea.value !== '' && category.options[category.selectedIndex].value !== '0') {
        createNote();
        error.style.visibility = 'hidden';
    } else {
        error.style.visibility = 'visible';
    }
}

const createNote = () => {
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.setAttribute('id', cardID);

    newNote.innerHTML = `
        <div class="note-header">
        <h3 class="note-title">${selectedValue}</h3>
        <button class="delete-note" onclick="deleteNote(${cardID})">
            <i class="fas fa-times icon"></i>
        </button>
        </div>
        <div class="note-body">
            ${textarea.value}
        </div>  
    `

    noteArea.appendChild(newNote);
    cardID++;
    textarea.value = '';
    category.selectedIndex = 0;
    notePanel.style.display = 'none';
    checkColor(newNote)
}

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text;
}

const checkColor = note => {
    switch (selectedValue) {
        case 'Zakupy':
            note.style.backgroundColor = 'rgb(72,255,0)';
            break;
        case 'Praca':
            note.style.backgroundColor = 'rgb(255,243,0)';
            break;
        case 'Inne':
            note.style.backgroundColor = 'rgb(0,170,255)';
            break;
    }
}

const deleteNote = id => {
    const noteToDelete = document.getElementById(id);
    noteArea.removeChild(noteToDelete)
}

const deleteAllNotes = () => {
    noteArea.textContent = ''
}

addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote);
deleteAllBtn.addEventListener('click', deleteAllNotes);



// PIERWSZA WERSJA:

// // page button
// const addBtn = document.querySelector('.add');
// const deleteAllBtn = document.querySelector('.delete-all');
// // popup
// const notePanel = document.querySelector('.note-panel');
// const noteArea = document.querySelector('.note-area');
// const cancelBtn = document.querySelector('.cancel');
// const saveBtn = document.querySelector('.save');
// const error = document.querySelector('.error');
// // note
// const selectBox = document.querySelector('#category');
// const textAreaValue = document.querySelector('#text');
// // getElementsByClassName pozwala wyłapywać nam nowe elementy - ŻYWE KOLEKCJE
// const deleteNoteBtn = document.getElementsByClassName('.delete-note');

// let cartId = 0;
// let selectedValue;

// const checkInputPanel = () => {
// 	const selectContent = selectBox.options[selectBox.selectedIndex].textContent;
//     const selectValue = selectBox.value
// 	const textValue = textAreaValue.value;
    

// 	if (selectValue === '0') {
// 		error.style.visibility = 'visible';
// 		selectBox.classList.add('error-border');
// 		textAreaValue.classList.remove('error-border');

// 	} else if (textValue === '') {
// 		error.style.visibility = 'visible';
// 		textAreaValue.classList.add('error-border');
// 		selectBox.classList.remove('error-border');

// 	} else if (selectValue === '0' || textValue === '') {
// 		error.style.visibility = 'visible';
// 		selectBox.classList.add('error-border');

// 	} else {
// 		error.style.visibility = 'hidden';
// 		textAreaValue.classList.remove('error-border');
// 		selectBox.classList.remove('error-border');

// 		addNote(textValue);
// 		clearPanel();
// 	}
// }

// const addNote = (text) => {

//     let style
//     switch(selectedValue){
//         case 'Zakupy':
//             style = 'style="background-color: rgb(72, 255, 0)"'
//             break;
//             case 'Praca':
//                 style =  'style="background-color: rgb(255, 243, 0)"'
//                 break;
//                 case 'Inne':
//                     style = 'style="background-color: rgb(0, 170, 255)"'
//                     break;
                    
//     }


// 	const newNote = `
//     <div class="note" id = ${cartId} ${style}>
//             <div class="note-header">
//                 <h3 class="note-title">${selectedValue}</h3>
//                 <button class="delete-note" onclick="deleteNote(${cartId})">
//                     <i class="fas fa-times icon"></i>
//                 </button>
//             </div>
//             <div class="note-body">${text}</div>
//     </div>
//     `

// 	noteArea.insertAdjacentHTML('beforeend', newNote);

// 	selectBox.value = 0;
// 	textAreaValue.value = '';
//     notePanel.style.display = 'none';
//     cartId++;
// }

// const selectValue = () => {
//     selectedValue = selectBox.options[selectBox.selectedIndex].text;
    
// }

// const clearPanel = () => {
// 	error.style.visibility = 'hidden';
// 	textAreaValue.classList.remove('error-border');
// 	selectBox.classList.remove('error-border');
// }

// const closePanel = () => {
// 	notePanel.style.display = 'none';
// 	selectBox.value = 0;
// 	textAreaValue.value = '';
// 	closePanel.selectedIndex = 0;
// 	clearPanel();
// }

// const deleteNote = id => {
//     const noteToDelete = document.getElementById(id)
//     console.log(noteToDelete);
//     noteArea.removeChild(noteToDelete)
    
// }

// saveBtn.addEventListener('click', checkInputPanel)

// addBtn.addEventListener('click', () => {
// 	notePanel.style.display = 'flex';
// })

// cancelBtn.addEventListener('click', closePanel)

// deleteAllBtn.addEventListener('click', () => {
// 	noteArea.textContent = '';
//     cartId = 0
// })
