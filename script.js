let nameError = document.querySelector(".name-err");
let phoneError = document.querySelector(".phone-err");
let mailError = document.querySelector(".mail-err");
let subError = document.querySelector(".sub-err");
let messError = document.querySelector(".mess-err");

function validateName(){
    let name = document.querySelector("#contact-name").value;
    if(name.length == 0){
        nameError.innerHTML = " * Name is required.";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = " * Write full name.";
        return false;
    }
       nameError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
       return true;

};
function validatePhone(){
    let phone = document.querySelector("#contact-phone").value;
    if(phone.length == 0){
        phoneError.innerHTML = " * Enter Your number"
        return false;
     }
     if(phone.length != 10){
        phoneError.innerHTML = " *Number should be 10 digite."
        return false;
     }
     if(!phone.match(/^[6-9]{1}[0-9]{9}$/)){
        phoneError.innerHTML = " * Enter valid digit."
        return false;
     }
     phoneError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
     return true;

};
function validateMail(){
    let mail = document.querySelector('#contact-mail').value;
    if (mail.length ==0) {
        mailError.innerHTML = " * Enter Email";
        return false;
    }
    if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        mailError.innerHTML = "* Invalid email";
        return false;
    }
    mailError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;

};
function validateMsg(){
    let message = document.querySelector("#contact-message").value;
    let required = 50;
    let left = required - message.length;
    if (left > 0) {
        messError.innerHTML = left + 'more charecter required';
        return false;
    }
    messError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm(){
    if(!validateName() || !validatePhone() || !validateMail()|| !validateMsg()){
       subError.style.display = 'block'; 
      subError.innerHTML = 'Please fix error to submit form.';
      setTimeout(function()
      {subError.style.display = 'none';},3000 )
      return false;
    }
}