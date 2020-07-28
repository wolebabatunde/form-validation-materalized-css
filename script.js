// INPUT FIELDS

const firstName = document.getElementById("firstName");

const lastName = document.getElementById("lastName");

const password = document.getElementById("password");

const confirmedPassword = document.getElementById("confirmedPassword");

const email = document.getElementById ("email");

// FORMS

const form = document.getElementById("myForm");

// VALIDATION COLOR

const green = '#4caf50';

const red = '#f44336'; 


// FIRST NAME VALIDATION

function validateFirstName (){
    // check if it's empty
    if(checkIfEmpty (firstName)) return;
    // check if it has only letters
    if(!checkIfOnlyLetters(firstName))return;
    return true;

}

function checkIfEmpty (field){
    if (isEmpty (field.value.trim ())){
        // set field valid
        setInvalid (field, `${field.name} must not be empty`);
        return true;
    }else{
    // set field valid
    setvalid(field)
        return false;
    }
}


function isEmpty (value){
    if (value === '' ) return true;
    return false;
}

function setInvalid (field, message){
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

function setValid (field){
    field.className = 'valid';
    field.nextElementSibling.innerHTML = '';
    // field.nextElementSibling.style.color = green;
}

function checkIfOnlyLetters (field){
    if(/^[a-zA-Z]+$/.test(field.value)){
        setValid(field);
        return true;
    }else {
        setInvalid(field, `${field.name}must contain only letters`);
        return false;
    }
}