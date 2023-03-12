const input = document.querySelector('.search')
const list = document.querySelectorAll('li')



//sposbób 1

// const search = () => {

    
//     for(let i = 0; i < list.length; i++){
//         const item = list[i]
//         const text = item.textContent.toLowerCase()
//         const inputValue = input.value.toLowerCase()

//         if(text.indexOf(inputValue) === -1){
//             item.style.display = 'none'
//         }else{
//             item.style.display = 'block'
//         }
        
//         // if(text.includes(inputValue)){
//         //     item.style.display = 'block'
//         // }else{
//         //     item.style.display = 'none'
//         // }

//     }

// }


// input.addEventListener('keyup', search)


//sposbób 2
// const serachEngine = e => {
//     const text = e.target.value.toLowerCase();

//     list.forEach(el => {
//         if(el.textContent.toLowerCase().indexOf(text) !== -1){
//             el.style.display = 'block'
//         }else{
//             el.style.display = 'none'
//         }
//     })
// }
// input.addEventListener('keyup', serachEngine)


//sposbób 3

const filterList = () => {
    list.forEach(item => {
        const match = new RegExp(input.value, 'i').test(item.textContent)

        if(!match){
            item.style.display = 'none'
        }else{
            item.style.display = 'block'

        }
    })
}

input.addEventListener('keyup', filterList)

        // 'i' ignoruje czy to są mał cyz duże znaki
        // test() czy to co poamy w inpucie odpowiada czemuś w li