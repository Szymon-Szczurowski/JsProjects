const deleteBtn = document.querySelector('.delete')

const addTransactionBtn = document.querySelector('.add-transaction')
const deleteAllBtn = document.querySelector('.delete-all')
const lightBtn = document.querySelector('.light')
const darktBtn = document.querySelector('.dark')
const optionAvailableMoney = document.querySelector('.available-money')

const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const transactionPanel = document.querySelector('.add-transaction-panel')
const nameInput = document.querySelector('#name')
const amountInput = document.querySelector('#amount')
const category = document.querySelector('#category')

const incomeArea = document.querySelector('.income-area')
const expensesArea = document.querySelector('.expenses-area')
const transactionList2 = document.querySelector('.transaction-list')

let root = document.documentElement
let cardID = 0
let allMoney = 0

// transakcje
const transactionList = {
	addtransaction: function (name, amount, select) {
		const newTransaction = document.createElement('div')
		newTransaction.classList.add('transaction')
		newTransaction.setAttribute('id', cardID)

		newTransaction.innerHTML = `
        <p class="transaction-name"><i class="fas fa-money-bill-wave"></i>${name}</p>
        <p class="transaction-amount">${amount}zł <button class="delete" onclick="delateTransaction(${cardID})"><i class="fas fa-times"></i></button></p>
        `
		if (select === '[ + ] Income') {
			incomeArea.appendChild(newTransaction)
		} else {
			expensesArea.appendChild(newTransaction)
		}

		cardID++
	},
}

// funckje panelu
const functionPanel = {
	panelChange: function () {
		transactionPanel.style.display = 'flex'
	},

	save: function () {
		const nameValue = nameInput.value
		const amountValue = amountInput.value
		const selectContent = category.options[category.selectedIndex].textContent

		allMoney += parseFloat(amountValue)
		optionAvailableMoney.textContent = `${allMoney}zł`

		transactionList.addtransaction(nameValue, amountValue, selectContent)
		functionPanel.clearInput()
		transactionPanel.style.display = 'none'
	},

	cancel: function () {
		transactionPanel.style.display = 'none'
	},

	clearInput: function () {
		nameInput.value = ''
		amountInput.value = ''
		category.selectedIndex = 0
	},
}

// zmiana kolorów
const colorChange = {
	lightColorChange: function () {
		root.style.setProperty('--first-color', '#F9F9F9')
		root.style.setProperty('--second-color', '#14161F')
	},

	darkColorChange: function () {
		root.style.setProperty('--first-color', '#14161F')
		root.style.setProperty('--second-color', '#F9F9F9')
	},
}

// usuwanie pojedycznej transakcji
const delateTransaction = id => {
	const elementToDelete = document.querySelector(`.transaction[id="${id}"]`)
	const amount = elementToDelete.querySelector('.transaction-amount')

	allMoney -= parseFloat(amount.textContent)
	optionAvailableMoney.textContent = `${allMoney}zł`
	elementToDelete.remove()
}

// usuwanie wszystkich transakcji
const delateAllTransaction = () => {
	cardID = 0
	allMoney = 0
	optionAvailableMoney.textContent = `${allMoney}zł`

	const elements = document.querySelectorAll('.transaction')
	elements.forEach(function (element) {
		element.remove()
	})
}

addTransactionBtn.addEventListener('click', functionPanel.panelChange)
cancelBtn.addEventListener('click', functionPanel.cancel)
saveBtn.addEventListener('click', functionPanel.save)

deleteAllBtn.addEventListener('click', delateAllTransaction)

lightBtn.addEventListener('click', colorChange.lightColorChange)
darktBtn.addEventListener('click', colorChange.darkColorChange)
