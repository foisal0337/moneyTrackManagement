document.getElementById("Button").addEventListener('click', function(){
    const emailValue = document.getElementById('email').value;
    console.log(emailValue);

    const passwordValue = document.getElementById('password').value;
    console.log(passwordValue);

    if(emailValue=='foisal0337@gmail.com' && passwordValue=='123'){
         window.location.replace("http://127.0.0.1:5500/moneyCaltulate.html");
    } else{
        alert("Sorry wrong cadential");
    }

})