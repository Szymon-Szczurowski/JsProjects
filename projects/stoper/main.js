
const colorPicker = document.querySelector('.colorpicker')

colorPicker.addEventListener('input', () => {
    const newColor = colorPicker.value
    document.documentElement.style.setProperty('--first-color', newColor)

})

