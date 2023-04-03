let toDoInput
let errorInfo
let addBtn
let ulList //tag ul
let newTodo //dnowo dodany li, nowe zadanie
let tools


let popup // popup
let popupInfo //tkest w popupie, jak się doda pusty tekst
let todoToEdit //edytowany ToDo
let popupInput //input
let popupAddBtn //zatwierdź
let popupCloseBtn //anuluj

const main = () => {
	prepareDOMElements()
	prepareDOMEEvents()
}

const prepareDOMElements = () => {
	//pobranie wszystkich elementów
	toDoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')

	popup = document.querySelector('.popup')
	popupInfo = document.querySelector('.popup-info')
	popupInput = document.querySelector('.popup-input')
	popupAddBtn = document.querySelector('.accept')
	popupCloseBtn = document.querySelector('.cancel')
}

const prepareDOMEEvents = () => {
	//nadawanie nasłuchiwania
	addBtn.addEventListener('click', addNewTask)
	ulList.addEventListener('click', checkClick)
	popupCloseBtn.addEventListener('click', ClosePopup)
	popupAddBtn.addEventListener('click', chanceTodoText)
	toDoInput.addEventListener('keyup', enterKeyCheck)
}


/*
1. tworzy nowy element(li)
2. dodawać nowy element do ul listy
3. funkcja odpalana na click w przycisku
4. przechwytywanie treści z inputa i umieszczenia go w nowo utworoznym li
5. funckja nie doda do listy pusytego todolista
*/


const addNewTask = () =>{
	if(toDoInput.value !== ''){
		const newTodo = document.createElement('li')
		newTodo.textContent = toDoInput.value
		createToolsArea(newTodo)

		ulList.append(newTodo);

		toDoInput.value = ''
		errorInfo.textContent = ""

	}else{
		errorInfo.textContent = "Wpisz treść zadania!"
	}
}

const createToolsArea = (newTodo) => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('tools')
	newTodo.append(toolsPanel)

	const completeBtn = document.createElement('button')
	completeBtn.classList.add('complete')
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'

	const editBtn = document.createElement('button')
	editBtn.classList.add('edit')
	editBtn.textContent = 'EDIT'

	const deleteBtn = document.createElement('button')
	deleteBtn.classList.add('delete')
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

	toolsPanel.append(completeBtn, editBtn, deleteBtn)
}

const checkClick = e => {
	if(e.target.matches('.complete')){
		e.target.closest('li').classList.toggle('completed')
		e.target.classList.toggle('completed')
	}else if(e.target.matches('.edit')){

		const display = window.getComputedStyle(popup).getPropertyValue('display')
		if (display === 'flex'){
			popup.style.display = 'none'
		}else{
			editTodo(e)
		}
		
	}else if (e.target.matches('.delete')){
		deleteTodo(e)
	}
}

const editTodo = e => {
	todoToEdit = e.target.closest('li')

	popupInput.value = todoToEdit.firstChild.textContent
	console.log(todoToEdit.firstChild);
	popup.style.display = 'flex'
}

const ClosePopup = () => {
	popup.style.display = 'none'
	popupInfo.textContent = ""

}

const chanceTodoText = () => {
	if(popupInput.value !== ''){
		todoToEdit.firstChild.textContent = popupInput.value
		popupInfo.textContent = ""
		popup.style.display = 'none'
	} else {
		popupInfo.textContent = "Musisz podać jakąś treść"
	}
}


const deleteTodo = e => {
	e.target.closest('li').remove()

	const allTodos = document.querySelectorAll('li')

	if(allTodos.length === 0) {
		errorInfo.textContent = "Brak zadań na liście"
	}
}


const enterKeyCheck = (e) => {
	if(e.key === 'Enter'){
		addNewTask()
	}
}


document.addEventListener('DOMContentLoaded', main)