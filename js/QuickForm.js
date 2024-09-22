const name = document.getElementById('Name');
const email = document.getElementById('Email');
const Message = document.getElementById('messagebox');
const PhNum = document.getElementById('PhNo');
const Form = document.querySelector('.EnquiryForm');
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
const isValidPhNo = Num => {
    const PhPattern = /^\+?[1-9]\d{1,14}$/;
    return PhPattern.test(parseInt(Num));
}
const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = Message.value.trim();
    const UserPhNo = PhNum.value.trim();

    if (nameValue === '') {
        setError(name, 'Name is required');
    } else {
        setSuccess(name);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Please enter a valid email address');
    } else {
        setSuccess(email);
    }

    if (UserPhNo === "") {
        setError(PhNum, 'Phone number is required');
    } else if (!isValidPhNo(UserPhNo)) {
        setError(PhNum, 'Please enter a valid phone number');
    } else { 
        setSuccess(PhNum);
    }

    if (messageValue === '') {
        setError(Message, 'Comments is required');
    } else {
        setSuccess(Message);
    }

    if (nameValue === '' || !isValidEmail(emailValue) || messageValue === '' || !isValidPhNo(UserPhNo)) {
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