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
/**
 * 
 * An Addendum
 */
// function ValidateTheFirstName(){
//     debugger;
//     var fn = document.getElementById("firstName").value;
//     if(fn == "")
//     {
//         var fnerr = document.getElementById("fnerr").style.display = "inline";
//         //alert("Please input the first name!!")
//         return false;
//     }
//     var reg = /^([A-Za-z\-\.])+\@([A-Za-z.])+\.([A-Za-z]{2,4})$/;
//     var address = document.forms[firstName].elements[firstName].value;
//     if(reg.test(address) == false) {
//        alert('First Name must contain on letters');
//        return false;
//     }
//     var fnerr = document.getElementById("fnerr").style.display = "none"
//     return true
    
// }

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
    if (value === '') return true;
    return false;
}

function setInvalid(field, message){
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

function setValid(field){
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


// SECOND NAME VALIDATION


function validateLastName (){
    // check if it's empty
    if(checkIfEmpty (lastName)) return;
    // check if it has only letters
    if(!checkIfOnlyLetters(lastName))return; 
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
    if (value === '') return true;
    return false;
}

function setInvalid(field, message){
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

function setValid(field){
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




// PASSWORD VALIDATION


function validatePassword (){
    // check if it's empty
    if(checkIfEmpty (password)) return;
    // check if it has only letters
    if(!checkIfOnlyLetters(password))return; 
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
    if (value === '') return true;
    return false;
}

function setInvalid(field, message){
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

function setValid(field){
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


//VALIDATE CONFIRMED PASSWORD


function validateConfirmedPassword (){
    // check if it's empty
    if(checkIfEmpty (confirmedPassword)) return;
    // check if it has only letters
    if(!checkIfOnlyLetters(confirmedPassword))return; 
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
    if (value === '') return true;
    return false;
}

function setInvalid(field, message){
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

function setValid(field){
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



// VALIDATE EMAIL
function validateEmail(){
    // check if it's empty
    if(checkIfEmpty (email)) return;
    // check if it has only letters
    if(!checkIfOnlyLetters(email))return; 
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
    if (value === '') return true;
    return false;
}

function setInvalid(field, message){
    field.className = 'invalid';
    field.nextElementSibling.innerHTML = message;
    field.nextElementSibling.style.color = red;
}

function setValid(field){
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









