import throttle from 'lodash.throttle';

const LOCAL_FEEDBACK_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit',onFormSubmit);


let formData = {};

onFormPopulate();

function onFormSubmit(event){
    event.preventDefault();
    console.log(formData);
    formData = {};
    event.currentTarget.reset();
    localStorage.removeItem(LOCAL_FEEDBACK_KEY);
};

function onInput(){
    formData = {
        email: form.email.value, 
        message: form.message.value};
    localStorage.setItem(LOCAL_FEEDBACK_KEY, JSON.stringify(formData));
};

function onFormPopulate(){

    const saveData = localStorage.getItem(LOCAL_FEEDBACK_KEY);
    if(saveData){
        formData = JSON.parse(saveData);
        form.email.value = formData.email;
        form.message.value = formData.message;
    }
};