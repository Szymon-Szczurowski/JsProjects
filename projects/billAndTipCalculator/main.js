const price = document.querySelector('#price')
const people = document.querySelector('#people')
const button = document.querySelector('.count')
const error = document.querySelector('.error')
const select = document.querySelector('select')
const cost = document.querySelector('.cost')
const costInfo = document.querySelector('.cost-info')

const check = () => {
	if (price.value === '' || people.value === '' || select.value === '0') {
		error.textContent = 'Uzupełnij dane!'
        costInfo.style.display = 'none'
	} else {
		error.textContent = ''
		calculation()
	}
}

const calculation = () => {
	const newPrice = parseFloat(price.value)
	const newPeople = parseFloat(people.value)
	const newTip = parseFloat(select.value)
	const result = (newPrice + newPrice * newTip) / newPeople

	costInfo.style.display = 'block'
	cost.textContent = result.toFixed(2)
}

button.addEventListener('click', check)
