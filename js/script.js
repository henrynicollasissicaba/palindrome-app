const word = document.querySelector('#word-input')
const checkBtn = document.querySelector('.check-btn')
const result = document.querySelector('#result')

checkBtn.addEventListener('click', () => {
    const alertMessage = "Por favor, insira uma palavra válida."

    //if the input value is empty, returns an alert message
    if(word.value.length === 0){
        displayResult(result, alertMessage, 'alert')
        return
    }

    //Remove whitespace from both ends of a string and returns a new string, without modifying the original string.
    const text = word.value.trim() 

    const cleanText = cleanTextInput(text)
    const isPalindrome = checkPalindrome(cleanText)

    result.classList.remove('alert', 'success', 'fail')

    //success and fail messages
    const successMessage = `Sim! ${text} é um Palíndromo.`
    const failMessage = `Não! ${text} não é um Palíndromo.`

    if(isPalindrome){
        displayResult(result, successMessage, 'success')
    } else {
        displayResult(result, failMessage, 'fail')
    }
})

const displayResult = (element, message, className) => {
    element.textContent = message
    element.classList.add(className)
}

const cleanTextInput = (text) => {
    return text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
}

const checkPalindrome = (text) => {
    let reverseWord = ""

    for(let i = text.length - 1; i >= 0; i--){
        reverseWord += text[i]
    }

    return text === reverseWord
}