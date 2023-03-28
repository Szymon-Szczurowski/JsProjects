// Do obliczeń wykorzystania biblioteka math.js

window.onload = () => {
	console.log('hej')
	calculator.init()
}
let calculator = {
	buttons: undefined,
	input: undefined,

	init: function () {
		this.buttons = document.querySelectorAll('.numbers button, .operators button')
		this.input = document.querySelector('input')
       
		for (let i = 0; i < this.buttons.length; i++) {
			let el = this.buttons[i]
			el.addEventListener('click', this.buttonClick)
		}
	},

	buttonClick: function (e) {
        
		let divHtmlText = e.target.textContent
		// this.addToInput(divHtmlText) // funckaj  buttonClick wywołana jest w innym kontekście, czyli this wkasuej na element na którym ozstało wywołane w tym przypadku na przycisk'	// trzeba w tym przypadku użyc calcualtor



		switch (divHtmlText) {
			case '=':
				calculator.evaluate()
				break
			case 'c':
				calculator.clear()
				break
			case '9':
			case '8':
			case '7':
			case '6':
			case '5':
			case '4':
			case '3':
			case '2':
			case '1':
			case '0':
			case '00':
			case '.':
			case '+':
			case '-':
			case '*':
			case '/':
				calculator.addToInput(divHtmlText)
				break
		}
	},

	addToInput: function (str) {
		this.input.value += str
	},

	evaluate: function () {
		let result = math.evaluate(calculator.input.value) /// wywołanie evalute z bibliaotek
		calculator.input.value = result.toFixed(4)
	},

	clear: function () {
		calculator.setInput('')
	},

	setInput: function (str) {
		calculator.input.value = str
	},
}
