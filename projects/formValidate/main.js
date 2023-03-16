const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const closeBtn = document.querySelector('.close')
const popup = document.querySelector('.popup')

const inputs = [username, pass, pass2, email]


const showError = (input, msg) => {
	// argument INPUT przechowuje  INPUTy
	// argument MSG przechowuje placeholder

	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')

	formBox.classList.add('error');
	errorMsg.textContent = msg
}

const clearError = input =>{
	const formBox = input.parentElement
	formBox.classList.remove('error')
}

const checkFrom = input => {
	input.forEach(el => {

		if(el.value === ''){
			showError(el, el.placeholder)
		}else{
			clearError(el)
		}

	})

	//argument INPUT z funcki 'checkForm' przechowuje tablicę z inputami
	//argument EL odnosi sie do każdej zmiennej, umieszczonej w tablicy
}

const checkLength = (input, min) => {
	
	if(input.value.length < min){

		showError(input, `${input.previousElementSibling.innerHTML.slice(0,-1)} składać się z minimum ${min} znaków`)
		
	}
}

const checkPassword = (pass1, pass2) => {
	if(pass1.value !==  pass2. value){
		showError(pass2, 'Hasła do siebie nie pasują')
	}
}

const checkMail = (email) => {

	const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	
	// !input.value.toLowerCase().match(regex)
	if(regex.test(email.value)){
		clearError(email)
	  }else{
		showError(email, 'Podany e-mail jest nieprawdiłowy')
	  }
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.form-box')
	let errorCount = 0

	allInputs.forEach(element => {
		if(element.classList.contains('error')){
			errorCount++
		}
	})

	if(errorCount === 0){
		popup.classList.add('show-popup')
	}
}


const callFunctions  = () => {
	checkFrom(inputs)
	checkLength(username, 6)
	checkLength(pass, 11)
	checkPassword(pass, pass2)
	checkMail(email)
	checkErrors()
}



sendBtn.addEventListener('click', event => {
	event.preventDefault();
	callFunctions()
})



clearBtn.addEventListener('click', event => {
	event.preventDefault();

	inputs.forEach(element => {
		element.value = ''
		clearError(element)
	})

	// const input = {
	//     username: username,
	//     pass: pass,
	//     pass2: pass2,
	//     email: email
	// }

	// for (key in input) {
	//      input[key].value = ''
	// }

})

const enterKeyCheck = (event) => {
	if(event.key === 'Enter'){
	event.preventDefault(); 
	sendBtn.click();
	}
}

  inputs.forEach(event => {
	event.addEventListener('keydown', enterKeyCheck)
  })


// closeBtn.addEventListener('click', event => {
// 	popup.classList.remove('show-popup')




	
