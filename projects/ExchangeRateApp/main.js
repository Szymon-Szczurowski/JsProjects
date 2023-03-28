const swapBtn = document.querySelector('.swap')
let currencyOne = document.querySelector('#currency-one')
let currencyTwo = document.querySelector('#currency-two')
const amountOne = document.querySelector('.amount-one')
const amountTwo = document.querySelector('.amount-two')
const rateInfo = document.querySelector('.rate-info')

const API_KEY = 'JksyVbhQ9rNEKORlxwDfuR750vzk3RFH'

// const calcualte = () => {
// 	const currencyTo = currencyTwo.value
// 	const currencyFrom = currencyOne.value
// 	const amount = amountOne.value

// 	let myHeaders = new Headers();
// 	myHeaders.append("apikey", API_KEY);

// 	let requestOptions = {
// 	  method: 'GET',
// 	  redirect: 'follow',
// 	  headers: myHeaders
// 	};

// 	fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${currencyTo}&from=${currencyFrom}&amount=${amount}`, requestOptions)
// 	  .then(response => response.json())
// 	  .then(data =>  {
// 	   rateInfo.textContent  = `${amountOne.value} ${currencyFrom} = ${data.result.toFixed(4)} ${currencyTo}`
// 	   amountTwo.value = data.result.toFixed(2)

// 	})
// 	  .catch(error => console.log('error', error));
// }


// const synchronizeCurrencies = () => {
//     const temp = currencyOne.value;
//     currencyOne.value = currencyTwo.value;
//     currencyTwo.value = temp;
// }

// calcualte()
// currencyOne.addEventListener('change', calcualte)
// currencyTwo.addEventListener('change', calcualte)
// amountOne.addEventListener('input', calcualte)
// swapBtn.addEventListener('click', () => {
//     synchronizeCurrencies()
//     calcualte()
// })



