//User database for test

const user1 = {email: 'john@doe.com', password: 'abc1234'};
const user2 = {email: 'jane@doe.com', password: '1234abc'};
let users = [user1, user2];


document.getElementById('form').addEventListener('submit', (e) => {
    if (checkInputs() > 0) {
        e.preventDefault();
    };
    // e.preventDefault();
    // checkInputs();
});

const checkInputs = () => {
    const email = document.getElementById('email');
    const passowrd = document.getElementById('password');
    // Error count
    let eCount = 0;
    let user = existEmail(email.value, users);

    if (email.value === '') {
        setErrorFor(email, 'This field is required');
        eCount++;
    } else if (!isEmail(email.value)) {
        setErrorFor(email, 'E-mail is not valid');
        eCount++;
    // } else if (!existEmail(email.value, users)) {
    //     setErrorFor(email, 'This E-mail does not belong to an account');
    } else if (user !== -1) {
        setSuccessFor(email);
    } else {
        setErrorFor(email, 'This E-mail does not belong to an account');
        eCount++;
    };

    if (password.value === '') {
        setErrorFor(password, 'This field is required');
        eCount++;
    } else if (users[user].password === password.value) {
        setSuccessFor(passowrd);
    } else {
        setErrorFor(password, 'This field is required');
        eCount++;
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
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
};


const existEmail = (email, userList)=> {
    // let found = false;
    for (let i = 0; i < userList.length; i++) {
        if (email === userList[i].email) {
            // found = true;
            // return found;
            return i;
        }
    }
    return -1;
};

const checkPassword = (password, user) =>  {

};
const isEmail = email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
const isPassword = password => /\d/.test(password) && /[A-Z]/i.test(password);


