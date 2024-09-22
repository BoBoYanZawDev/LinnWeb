const name = document.getElementById('name');
const email = document.getElementById('email');
const messagebox = document.getElementById('Messagebox');
const Form = document.querySelector('.contect-form');
const errorMessageBox = Form.querySelector('.errorMessage');
const successMessageBox = Form.querySelector('.successMessage');

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const Display = inputControl.querySelector('.filltext');

    Display.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const Display = inputControl.querySelector('.filltext');

    Display.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = Testemail => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(String(Testemail).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = messagebox.value.trim();

    if(nameValue === '') {
        setError(name, 'Name is required');
    } else {
        setSuccess(name);
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Please enter a valid email address');
    } else {
        setSuccess(email);
    }

    if(messageValue === '') {
        setError(messagebox, 'Comments is required');
    } else {
        setSuccess(messagebox);
    }

    if(nameValue === '' || !isValidEmail(emailValue) || messageValue === '') {
        errorMessageBox.classList.add('d-flex');
        errorMessageBox.classList.remove('d-none');
        successMessageBox.classList.add('d-none');
    } else {
        successMessageBox.classList.add('d-flex');
        successMessageBox.classList.remove('d-none');
        errorMessageBox.classList.add('d-none');
        console.log("success");
    }
};

Form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});