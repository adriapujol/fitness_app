const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const province = document.getElementById('province');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const btnSubmit = document.getElementById('btn-submit');

form.addEventListener('submit', (e) => {
    if (checkInputs() > 0) {
        e.preventDefault();
    }

    // e.preventDefault();
    // checkInputs();
    
});


const checkInputs = () => {
    //error count
    let eCount = 0;

    // get inputs values
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'This field is required');
        eCount++;

    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email,'This field is required');
        eCount++;

    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'E-mail is not valid');
        eCount++;

    } else {
        setSuccessFor(email);
    }

    if (province.value === '') {
        setErrorFor(province, 'This field is required');
        eCount++;

    } else {
        setSuccessFor(province);
    }
    
    if (password.value === '') {
        setErrorFor(password, 'This field is required');
        eCount++;
    } else if (password.value.length <6 || password.value.length > 12) {
        setErrorFor(password, 'The password must be 6-12 characters');
        eCount++;
    } else if (!isPassword(password.value)) {
        setErrorFor(password, 'The password must contian at least one letter and one number');
        eCount++;
    } else {
        setSuccessFor(password);
    }

    if (password2.value === '') {
        setErrorFor(password2, 'This field is required');
        eCount++;

    } else if (password2.value !== password.value) {
        setErrorFor(password2, 'Passwords does not match');
        eCount++;

    } else {
        setSuccessFor(password2);
    }

    return eCount;
};

const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.classList.add('error-style');
    input.classList.add('is-invalid');
};

const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.classList.remove('error-style');
    // formControl.classList.add('success-style');
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
};

const isEmail = email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

const isPassword = password => /\d/.test(password) && /[A-Z]/i.test(password);
    