// getting value from user
const word = document.querySelector('.word-input')
const checkBtn = document.querySelector('.check-btn')
const result = document.querySelector('#result')

checkBtn.addEventListener('click', () => {    
    const alertMessage = "Por favor, entre com uma palavra válida!"
    // // remove whitespace from both ends of a string
    const text = word.value.trim()

    if(word.value.length === 0){
        result.textContent = `${alertMessage}`
        result.classList.add('alert')
        return
    }

    // remove all non-alphanumeric characters and convert to lower
    const cleanText = text.replace(/[^a-zA-Z0-9!-.:-?@[-`{-~]/g, "").toLowerCase()
    let reverseWord = ""

    for(i = cleanText.length - 1; i >= 0; i--){
        reverseWord += cleanText[i]
    }

    const isPalindrome = cleanText === reverseWord
    result.classList.remove('alert', 'success', 'fail')

    if(isPalindrome){
        result.textContent = `Sim! ${text} é um palíndromo.`
        result.classList.add('success')
    } else {
        result.textContent = `Não! ${text} não é um palíndromo.`
        result.classList.add('fail')
    }
})
