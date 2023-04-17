const APP = {
    init() {
        APP.addListeners();
        APP.makeInputsInvalid();
    },
    addListeners() {
        let email = document.querySelector('#email');
        let country = document.querySelector('#country');
        let zipCode = document.querySelector('#zip-code');
        let password = document.querySelector('#password');
        let confirmPassword = document.querySelector('#confirm-password');
        // let submitButton = document.querySelector('#submit-form');
        let myForm = document.querySelector('#my-form');

        email.addEventListener('change', APP.testEmail);
        country.addEventListener('change', APP.testCountry);
        zipCode.addEventListener('change', APP.testZipCode);
        password.addEventListener('change', APP.testPassword);
        confirmPassword.addEventListener('change', APP.testConfirmPassword);
        // submitButton.addEventListener('submit', APP.validateFormOnClick);
        myForm.addEventListener('submit', APP.validateFormOnClick);
    },
    makeInputsInvalid() {
        let email = document.querySelector('#email');
        let country = document.querySelector('#country');
        let zipCode = document.querySelector('#zip-code');
        let password = document.querySelector('#password');
        let confirmPassword = document.querySelector('#confirm-password');

        email.setCustomValidity('Invalid');
        country.setCustomValidity('Invalid');
        zipCode.setCustomValidity('Invalid');
        password.setCustomValidity('Invalid');
        confirmPassword.setCustomValidity('Invalid');
    },
    testEmail(e) {
        let email = e.target;
        email.setCustomValidity('');

        if (email.value == '') {
            email.setCustomValidity("Email cannot be empty");
            email.reportValidity();
        } else if (!/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/.test(email.value)) {
            email.setCustomValidity('Please enter a valid email');
            email.reportValidity();
        }
    },
    testCountry(e) {
        let country = e.target;
        country.setCustomValidity('');
        // 4,48

        if (country.value == '') {
            country.setCustomValidity('Country cannot be empty');
            country.reportValidity();
        } else if (country.value.length < 4 || country.value.length > 48) {
            country.setCustomValidity('Country length should be greater than 2 and less than 48');
            country.reportValidity();
        }
    },
    testZipCode(e) {
        let zipCode = e.target;
        zipCode.setCustomValidity('');

        if (zipCode.value == '') {
            zipCode.setCustomValidity('Zipcode cannot be empty');
            zipCode.reportValidity();
        } else if (!/^[0-9]/.test(zipCode.value)) {
            zipCode.setCustomValidity("Zipcode should only contain digits");
            zipCode.reportValidity();
        } else if (zipCode.value.length < 6 || zipCode.value.length > 10) {
            zipCode.setCustomValidity("Zipcode's length should be greater than 5 and less than 10");
            zipCode.reportValidity();
        }
    },
    testPassword(e) {
        let password = e.target;
        password.setCustomValidity('');
        let specialCharacterRegex = /\?=.\*\W/;
        let atLeastOneNumberRegex = /\?=.\*[0-9]/;

        if (password.value == '') {
            password.setCustomValidity('Password cannot be empty');
            password.reportValidity();
        }
        else if (!/[!@#$%^&*()]/.test(password.value)) {
            password.setCustomValidity('Password should contain atleast 1 special character');
            password.reportValidity();
        }
        else if (!/[0-9]/.test(password.value)) {
            password.setCustomValidity('Password should contain atleast 1 number');
            password.reportValidity();
        }
        else if (password.value.length < 8 || password.value.length > 20) {
            password.setCustomValidity('Password length should be greater than 8 and less than 20');
            password.reportValidity();
        }
    },
    testConfirmPassword(e) {
        let confirmPassword = e.target;
        let password = document.querySelector('#password');

        confirmPassword.setCustomValidity('');

        if (confirmPassword.value !== password.value) {
            confirmPassword.setCustomValidity('Both passwords should match');
            confirmPassword.reportValidity();
        }
    },
    validateFormOnClick(e) {
        let form = e.target;

        if (!form.checkValidity()) {
            e.preventDefault();
            console.log("Form not submitted as there are errors");
        }

    }
};

document.addEventListener('DOMContentLoaded', APP.init);