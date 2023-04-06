const settingsBtn = document.querySelector('.settings-btn')
const settingsSaveBtn = document.querySelector('.save')
const settingsEventName = document.querySelector('#event-name')
const settingsEventDay = document.querySelector('#event-day')
const settingsEventMonth = document.querySelector('#event-month')
const settingsEventYear = document.querySelector('#event-year')
const settingsEventImg = document.querySelector('#event-image')
const settings = document.querySelector('.settings')

const imgSection = document.querySelector('.image-section')

const evenTitle = document.querySelector('.event')
const daysCount = document.querySelector('.days-count')
const hoursCount = document.querySelector('.hours-count')
const minutesCount = document.querySelector('.minutes-count')
const secondsCount = document.querySelector('.seconds-count')



const settingsCounter = () => {
    const eventName = settingsEventName.value
    const eventDay = settingsEventDay.value
    const eventMonth = settingsEventMonth.value
    const eventYear = settingsEventYear.value

    eventImg()
    dates(eventName, eventDay, eventMonth, eventYear)
}

const eventImg = () => {
    const imgUrl = settingsEventImg.value
    imgSection.style.backgroundImage = `url('${imgUrl}')`;
    
}

const dates = (eventName, eventDay, eventMonth, eventYear) => {
    evenTitle.textContent = eventName

    const { year, month, day, hours, minutes, seconds, date } = actualDate();
    const {futureYear, futureMonth, futureDay, futDate} = futureDate(eventYear, eventMonth, eventDay);

    const diffTime = Math.abs(futDate.getTime() - date.getTime());
    const diffSeconds = Math.floor(diffTime / 1000) % 60;
    const diffMinutes = Math.floor(diffTime / (1000 * 60)) % 60;
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);
    const remainingHours = diffHours % 24;

    daysCount.textContent = diffDays
    hoursCount.textContent = remainingHours
    minutesCount.textContent = diffMinutes
    secondsCount.textContent = diffSeconds

    countDown()
}

const countDown = () => {
    setInterval(settingsCounter, 1000);
}

const actualDate = () => {
    const currentDate = new Date();

    return {
        year: currentDate.getFullYear(),
        month: currentDate.getMonth() + 1,
        day: currentDate.getDate(), 

        hours: currentDate.getHours(),
        minutes: currentDate.getMinutes(),
        seconds: currentDate.getSeconds(),
        date: currentDate
    } 
}

const futureDate = (eventYear, eventMonth, eventDay) => {
    const prospectiveDate = new Date(eventYear, eventMonth, eventDay);

    return {
        futureYear: prospectiveDate.getFullYear(),
        futureMonth: prospectiveDate.getMonth() + 1,
        futureDay: prospectiveDate.getDate(), 
        futDate: prospectiveDate
    } 

}

settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('active')
})
settingsSaveBtn.addEventListener('click', settingsCounter)

