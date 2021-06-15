function checkPass() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;
    let msg = document.getElementById('msg');

    if(login == 'admin' && password == 'admin') {
        // document.getElementById('authorization__form').action = "signup.html";
        window.location = "signup.html";
        return false;
    }
    else {
        msg.visibility = "visibile";
        msg.innerHTML =  "Wrong login or password";
    }
}