const passwordMatch = document.querySelector('.passwordNot')
let password = document.getElementById('password')
let repeatPassword = document.querySelector('#repeatPassword')
let email = document.querySelector('#email')


let currentPassword;
let repeatCurrentPassword;

password.addEventListener('change', () => {
    currentPassword = password.value
})

repeatPassword.addEventListener('change', () => {
    repeatCurrentPassword = repeatPassword.value
    if(repeatCurrentPassword === ''){
        passwordMatch.style.visibility = 'hidden'
    }else if(currentPassword === repeatCurrentPassword){
        passwordMatch.style.visibility = 'hidden'
    }else if(currentPassword != repeatCurrentPassword){
        passwordMatch.style.visibility = 'visible'
    }
})

email.addEventListener('change', () => {
    if(email.value.includes('@', '.')){
        email.style.border = '2px solid green'
    }else{
        email.style.border = '2px solid red'
    }
})