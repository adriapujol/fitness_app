const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('passowrd');
const password2 = document.getElementById('passowrd2');
const btnSubmit = document.getElementById('btn-submit');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});


const checkInputs = () => {
    // get inputs values
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    // const passwordValue = password.value.trim();
    // const password2Value = password2.value.trim();

    if (usernameValue === '') {
        //show error
        //add error class
        setErrorFor(username, 'This field is required');
    } else {
        //add success class
        setSuccessFor(username);
    }

    if (emailValue === '') {
        //show error
        //add error class
        setErrorFor(email, 'This field is required');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'E-mail is not valid');
    } else {
        //add success class
        setSuccessFor(email);
    }
    
    if (password === '') {
        setErrorFor(password, 'This field is required');
    }
};

const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-group font-weight-bold error-style';

};

const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-group font-weight-bold success-style';
};

const isEmail = email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);