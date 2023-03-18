const textarea = document.querySelector('.textarea')


textarea.addEventListener('input', () => {
    const numCharacters = textarea.value.length
    document.querySelector('.num-characters').textContent = numCharacters
    
    const words = textarea.value.replace(/[\r\n]/g, '').split(' ').length
    document.querySelector('.num-words').textContent = words

    const sentences = textarea.value.split('.').length
    document.querySelector('.num-sentences').textContent = sentences



  })