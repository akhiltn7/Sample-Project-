const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    let messages = []
    if (password.value.length <= 6){
        messages.push('Password should be longer than 6 characters')
    }
    if (password.value.length >= 12){
        messages.push('Password should be Within 12 characters')
    }
    if(messages.length >0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})
