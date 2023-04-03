const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_KEY = '&appid=39a7b8261e87feb65618018dcadd94bd'
const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_UNITS = '&units=metric'



const getWeather = () => {
    const city = input.value || 'Dubai' //jeśłi nic nie przkeże z inputa to skorzysta ze stringa London
    const URL = API_LINK + city + API_KEY + API_UNITS

    axios.get(URL)
    .then(res => {
        const temp = res.data.main.temp
        const hum = res.data.main.humidity
        const status = Object.assign({}, ...res.data.weather)


        cityName.textContent = res.data.name
        weather.textContent = status.main
        temperature.textContent = temp.toFixed(1) + '°C'
        humidity.textContent = hum + '%'

        warning.textContent = ''
        input.value = ''
        const id = status.id.toString().charAt(0)

        if(id == 2){
            photo.setAttribute('src', './img/thunderstorm.png')
        }else if(id == 3){
            photo.setAttribute('src', './img/drizzle.png')
        }else if(id == 4){
            photo.setAttribute('src', './img/rain.png')
        }else if(id == 5){
            photo.setAttribute('src', './img/ice.png')
        }else if(id == 6){
            photo.setAttribute('src', './img/fog.png')
        }else if(id == 7){
            photo.setAttribute('src', './img/sun.png')
        }else if(id == 8){
            photo.setAttribute('src', './img/drizzle.png')
        }else{
            photo.setAttribute('src', './img/unknown.png')
        }
        
        // console.log(res.data.weather[0].id);
        // inny sposób
        // console.log(status.id);

    }).catch(() => warning.textContent = 'Wpisz poprawną nazwę miasta!')
}

const enterCheck = e => {
    if (e.key === 'Enter'){
        getWeather()
    }
}

input.addEventListener('keyup', enterCheck)
button.addEventListener('click', getWeather)





// const weathers = () => {

//     const city = input.value
    
// 	let API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

// 	fetch(API)
// 		.then(response => response.json())
// 		.then(processData)
//         function processData(data) {
//             console.log(data.weather);
//         }
// }


// button.addEventListener('click', weathers)