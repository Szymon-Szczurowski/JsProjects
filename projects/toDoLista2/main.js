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
            deleteTask()
        }else if(e.target.closest('button').classList.contains('delete')){
            console.log('delete');
        }
    }
}

const deleteTask = e => {
    const deleteTodo = e.target.closest('li')
}

document.addEventListener('DOMContentLoaded', main);