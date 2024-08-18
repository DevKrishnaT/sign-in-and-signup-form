const hadding = document.querySelector('#para-2');
const info = document.querySelector('#para-1');
const button = document.querySelector('#login');
const fullName =document.querySelector('.name');
const mainHadding = document.querySelector('#hadding');
const image = document.querySelector('#image');
const passInput = document.querySelector('#password');
let no = 0;
let passNo = 0;


hadding.addEventListener('click' , () =>{
    if(no === 0){
    fullName.style.display = 'none'
    info.textContent = 'Dont have account.';
    hadding.textContent = 'Create one!';
    
    button.textContent =('login')
    mainHadding.textContent =('Sign in')
    
    no = 1;
    console.log(no);
    
    
    }else{
        fullName.style.display = 'flex'
        
        info.textContent =('Already have account.');
        hadding.textContent =('Sign in!');
        button.textContent =('create');
        mainHadding.textContent =('Sign up')
        
        no = 0;

    }
});
image.addEventListener('click', () => {
      if(passNo === 0){
        image.src = 'eye.png';
        passInput.type = 'text';
        passNo = 1;
      } else{
        image.src = 'hidden.png';
        passInput.type = 'password';
        passNo = 0;
      }
})
