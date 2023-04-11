let TO_DO_INPUT; // miejsce, gdzie użytkownik wpisuje treść
let ALERT_INFO; // info o braku zadań / konieczności dodania tekstu
let ADD_BTN; // przycisk ADD - dodaje nowe elementy do listy
let UL_LIST; // nasza lista zadań, tagi <ul></ul>
let NEW_TASK; // nowo dodany LI, nowe zadanie
let ALL_TASKS; // lista wszystkich dodanych LI
let idNumber = 0; // ID dodawane do każdego nowego zadania
let POPUP; //pobrany popup
let POPUP_INFO; // alert w popupie, jak się doda pusty tekst
let EDITED_TODO; // edytowany Todo
let POPUP_INPUT; //tekst wpisywany w inputa w popup'ie
let ADD_POPUP_BTN; // przycisk "zatwierdź" w popup'ie
let CLOSE_TODO_BTN //przycisk od zamykania popup'a

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    TO_DO_INPUT = document.querySelector('.todo-input');
    ALERT_INFO = document.querySelector('.alert-info');
    ADD_BTN = document.querySelector('.add-btn');
    UL_LIST = document.querySelector('.todo-list ul');
    ALL_TASKS = document.getElementsByTagName('li');
    POPUP = document.querySelector('.popup');
    POPUP_INFO = document.querySelector('.popup-info');
    POPUP_INPUT = document.querySelector('.popup-input');
    ADD_POPUP_BTN = document.querySelector('.accept');
    CLOSE_TODO_BTN = document.querySelector('.cancel');
}

const prepareDOMEvents = () => {
    ADD_BTN.addEventListener('click', addNewTask);
    TO_DO_INPUT.addEventListener('keyup', enterCheck);
    UL_LIST.addEventListener('click', checkClick)
    ADD_POPUP_BTN.addEventListener('click', changeTodo)
    CLOSE_TODO_BTN.addEventListener('click', closePopup)
}

const addNewTask = () => {
    if(TO_DO_INPUT.value !== ''){
        idNumber++
        NEW_TASK = document.createElement('li')
        NEW_TASK.innerText = TO_DO_INPUT.value
        NEW_TASK.setAttribute('id',`todo-${idNumber}`)
        UL_LIST.appendChild(NEW_TASK)

        ALERT_INFO.innerText = ''
        TO_DO_INPUT.value = ''

        createToolsArea()
    }else{
        ALERT_INFO.innerText = "Wpisz treść zadania"
    }
}

const enterCheck = event => {
    if (event.key === 'Enter') {
        addNewTask();
        console.log('sfgsdf');
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    NEW_TASK.appendChild(toolsPanel)

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerHTML = 'EDIT';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    toolsPanel.appendChild(completeBtn);
    toolsPanel.appendChild(editBtn);
    toolsPanel.appendChild(deleteBtn);

}
const checkClick = e => {
    if(e.target.classList.value !== ''){
        if(e.target.closest('button').classList.contains('complete')){ //closet pozwala uniknąć błędu, że jak kliknę np. na ikonę to nie uzna mi teog za przycisk,czyli sprawdza najbliżysz element w tym wypadku button

            e.target.closest('li').classList.toggle('completed')
            e.target.closest('button').classList.toggle('completed')

        }else if(e.target.closest('button').classList.contains('edit')){
            editTask(e)
        }else if(e.target.closest('button').classList.contains('delete')){
            deleteTask(e)
        }
    }
}

const editTask = (e) => {
    const oldTodo = e.target.closest('li').id;
    EDITED_TODO = document.getElementById(oldTodo)
    console.log(EDITED_TODO)
    POPUP_INPUT.value = EDITED_TODO.firstChild.textContent

    POPUP.style.display = 'flex'
}

const changeTodo = () => {
    if(POPUP_INPUT.value !== ''){
        EDITED_TODO.firstChild.textContent = POPUP_INPUT.value
        POPUP.style.display = 'none'
        POPUP_INFO.textContent = ''
    }else{
        POPUP_INFO.textContent = 'Musisz podać jakąś treść '
    }

}

const deleteTask = e => {
    const deleteTodo = e.target.closest('li');
    deleteTodo.remove();

    if (ALL_TASKS.length === 0) {
        ALERT_INFO.innerText = 'Brak zadań na liście.';
    }
}

const closePopup = () => {
    POPUP.style.display = 'none'
    POPUP_INFO.textContent = ''

}

document.addEventListener('DOMContentLoaded', main);