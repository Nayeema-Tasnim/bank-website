let left = document.querySelector('.left');
let right = document.querySelector('.right');
let img = document.querySelector('.img');

let imgs = ['b1.webp','b2.jpeg','b3.jpg','b4.webp','b5.webp','b6.webp','b7.jpg'];
let i = 0;

function display(){
    img.setAttribute('src',imgs[i]);
}

left.addEventListener('click',()=>{
    i = (i-1+imgs.length)%imgs.length;
    display();
})

right.addEventListener('click',()=>{
    i = (i+1)%imgs.length;
    display();
});

display();

// login

let register_link = document.querySelector('.register-link');
let login_link = document.querySelector('.login-link');
let logMain = document.querySelector('.logMain');

register_link.addEventListener('click',()=>{
    logMain.classList.add('active');
})

login_link.addEventListener('click',()=>{
    logMain.classList.remove('active');
})

let btn = document.querySelector('.btn');

btn.addEventListener('click',( )=>{
    logMain.classList.add('activ');
   
})

let cross = document.querySelector('i')
cross.addEventListener('click',( )=>{
    logMain.classList.remove('activ');
})


let email = document.querySelector('.email');
let username = document.querySelector('.username');
let password = document.querySelector('.password');
let log = document.querySelector('.log');

if(username ==="" || email === "" || password === ""){
   alert('please enter password');
}

else{
    log.addEventListener('click',()=>{
        window.location.assign('log.html')
    })
}



function validateForm(event) {
    event.preventDefault();

    let valid = true;

    document.querySelectorAll('.error').forEach(err => err.style.display = 'none');
    document.querySelectorAll('input').forEach(input => input.classList.remove('invalid'));

    const username = document.getElementById('usererror');
    const uerr = document.getElementById('uerr');

    if (username.value.trim().length < 8) {
        uerr.style.display = 'block';
        username.classList.add('invalid');
        valid = false;
    }

    const email = document.getElementById('eerror');
    const eerr = document.getElementById('eerr');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        eerr.style.display = 'block';
        email.classList.add('invalid');
        valid = false;
    }

    const password = document.getElementById('passerror');
    const perr = document.getElementById('perr');

    if (password.value.trim().length < 6) {
        perr.style.display = 'block';
        password.classList.add('invalid');
        valid = false;
    }

    const cpassword = document.getElementById('cerror');
    const cerr = document.getElementById('cerr');

    if (cpassword.value !== password.value) {
        cerr.style.display = 'block';
        cpassword.classList.add('invalid');
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
        return true;
    }

    return false;
}
