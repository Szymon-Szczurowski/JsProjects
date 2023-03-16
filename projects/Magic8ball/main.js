const input = document.querySelector('.input')
const ballImg = document.querySelector('.img')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answersArr = ['Tak!', 'Nie.', 'Może.', 'Ciężko powiedzieć...', 'Nie chcesz znać odpowiedzi na to pytanie... :/']

// W prszysłości pobrać z API jak będzie mnie stać

const shakeBall = () => {
	ballImg.classList.add('shake-animation')
    setTimeout(checkInput, 1000)
}

const checkInput = () => {
	const text = input.value

	if (text === '') {
		error.textContent = 'Zadaj pytanie!'
		answer.textContent = ''
	} else if (text.length < 10) {
		error.textContent = 'Twoje zdanie powinno mieć min 10 znaków'
		answer.textContent = ''
		// else if (text.slice(-1) !== '?)
	} else if (!text.endsWith('?')) {
		error.textContent = 'Pytanie musi być zakończone znakiem "?"'
		answer.textContent = ''
	} else {
		error.textContent = ''
		generateAnswer()
	}
    ballImg.classList.remove('shake-animation')

}

const generateAnswer = () => {
	const radnomNumber = Math.floor(Math.random() * answersArr.length)

	// answer.textContent = answersArr[radnomNumber]
	answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[radnomNumber]}`
}

ballImg.addEventListener('click', shakeBall)


// const checkInput = () => {
//     if (input.value !== '' && input.value.slice(-1) === '?') {
//         generateAnswer();
//         error.textContent = '';       
//     } else if (input.value !== '' && input.value.slice(-1) !== '?') {
//         error.textContent = 'Pytanie musi być zakończone znakiem "?".';
//         answer.textContent = ''        
//     } else {
//         error.textContent = 'Musisz zadać jakieś pytanie!';
//         answer.textContent = ''  
//     }
    
//     ball.classList.remove('shake-animaton');      
// }
