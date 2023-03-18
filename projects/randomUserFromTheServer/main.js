// https://randomuser.me/api

// const full = document.querySelector('.full-name')
// const username = document.querySelector('.username')
// const email = document.querySelector('.email')
// const countryD = document.querySelector('.country')
// const img = document.querySelector('.avatar-img')

window.onload = function(){
    fetch('https://randomuser.me/api')
    .then(response => response.json())
    .then(data => dataReady(data))
    .catch(err => console.error(err))
    
    function dataReady(data) {
   
        const result = data.results[0]
        console.log(result);
        const fullName = result.name.title + ' ' + result.name.first + ' ' + result.name.last
        const username = result.login.username
        const mail = result.email
        const country = result.location.timezone.description
        const picutre = result.picture.medium

        document.querySelector('.full-name').textContent = fullName
        document.querySelector('.username').textContent = '@' + username
        document.querySelector('.email').textContent = mail
        document.querySelector('.country').textContent = country
        document.querySelector('.avatar-img').setAttribute('src', picutre)



    }
}