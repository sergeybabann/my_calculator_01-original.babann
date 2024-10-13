// константа захвата по id поля для ввода символов
// const display = document.getElementById('display')
let firstNumber = '' // первое число
let secondNumber = '' // второе число
let operation = null // операция, (например, '+')


// Функция для добавления символа в поле ввода
function addToDisplay(textToAdd) {
    // display.value = dispaly.value + textToAdd
    display.value += textToAdd
    
} 

// Функция для удаления символов из поля ввода
function clearInput() {
    display.value = '' // Устанавливаем значение поля ввода в пустую строку
}

function plus(result) {
    display.value = first + second
}



// addToDisplay('1')


// Символы цифры
document.getElementById("one").addEventListener('click', () => addToDisplay('1'))     

document.getElementById("two").addEventListener('click', () => addToDisplay('2')) 

document.getElementById("three").addEventListener('click', () => addToDisplay('3')) 

document.getElementById("four").addEventListener('click', () => addToDisplay('4')) 

document.getElementById("five").addEventListener('click', () => addToDisplay('5')) 

document.getElementById("six").addEventListener('click', () => addToDisplay('6')) 

document.getElementById("seven").addEventListener('click', () => addToDisplay('7')) 

document.getElementById("eight").addEventListener('click', () => addToDisplay('8')) 

document.getElementById("nine").addEventListener('click', () => addToDisplay('9')) 

document.getElementById("zero").addEventListener('click', () => addToDisplay('0')) 


// Символы не цифры
document.getElementById("addition").addEventListener('click', () => addToDisplay('+')) 

document.getElementById("subtraction").addEventListener('click', () => addToDisplay('-')) 

document.getElementById("multiplication").addEventListener('click', () => addToDisplay('*')) 

document.getElementById("division").addEventListener('click', () => addToDisplay('/')) 

document.getElementById("equal").addEventListener('click', () => addToDisplay('=')) 

document.getElementById("clear").addEventListener('click', () => clearInput('')) 

document.getElementById("")






