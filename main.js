document.addEventListener('DOMContentLoaded',()=>{
    const loginForm=document.querySelector('#login');
    const createAccount=document.querySelector('#createAccount');
  
    document.getElementById('formToCreateAccount').addEventListener('click',e =>{
        e.preventDefault();
        loginForm.classList.add('form-hidden');
        createAccount.classList.remove('form-hidden');
    })
    document.getElementById('linklogin').addEventListener('click',e =>{
        e.preventDefault();
        loginForm.classList.remove('form-hidden');
        createAccount.classList.add('form-hidden');
    })
    loginForm.addEventListener('submit',e=>{
        e.preventDefault();
        checkinput_login();
    })
    document.querySelector("#signup").addEventListener('click',e=>{
        e.preventDefault();
        checkinput_account();
    })
    document.querySelector('')

})

const Username=document.getElementById('username');
const password=document.getElementById('password');
const nameAcc=document.getElementById('Name');
const email=document.getElementById('email');
const confirm_password=document.getElementById('password2');
const password1=document.getElementById('password1');

function checkinput_account(){
    const password1Value=password1.value.trim();
    const nameAccValue=nameAcc.value.trim();
    const emailValue=email.value.trim();
    const confirm_passwordValue=confirm_password.value.trim();

    if(nameAccValue==''){
        
        setError(nameAcc,"Please give your name")
    }
    else{
        setSuccess(nameAcc)
    }
    if(emailValue==''){
        setError(email,"Please give your email")
    }else if(isEmail(emailValue)){
        setError(email,"Please give valid id")

    }
    
    else{
        setSuccess(email)
    }
    if(confirm_passwordValue===''){
        setError(confirm_password,"Give password for confirmation")
    }
    else if(confirm_passwordValue!==password1Value){
        setError(confirm_password,"Password doesn't match")

    }
    else{
    setSuccess(confirm_password)}
   
    if(password1Value===''){
        setError(password1,"Please give your password")
    }
    else{
        setSuccess(password1)
    }
    
}   


function checkinput_login(){
   const usernameValue=Username.value.trim();
   const passwordValue=password.value.trim();
 
  if(usernameValue===''){
       setError(Username,"Please give your username");
   }
    else
    {
      setSuccess(Username);
    }
    if(passwordValue===''){
        setError(password,"Please give your password")
    }
    else{
        setSuccess(password)
    }
}


 function setError(input,message)
{
    const errorElement=input.parentElement;
    const input_msg_error=errorElement.querySelector('.input_msg-error');
    errorElement.className='input_group fail';
    input_msg_error.innerText=message;
    
}
 function setSuccess(input)
{
    const successElement=input.parentElement;
    const input_msg_error=successElement.querySelector('.input_msg-error');
  successElement.className='input_group success';
  input_msg_error.innerText='';
}
function isEmail(email){
    return /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/.test(email)
}



