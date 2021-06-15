// let checkData = () => {
//     let log = document.getElementById("login").value;
//     let email = document.getElementById("email").value;
//     let pass = document.getElementById("password").value;
//     let msg = document.getElementById('msg');

//     const emailPattern = '/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
//     const logPattern = '/[a-zA-z]+[0-9]*/';

//     if(login < 6 ) {
//         alert("Login need at least 7 characters");
//         if(!logPattern.test(login)) {
//             alert("Login require one number and one upper letter");
//         }
//     }
//     if(pass.length < 6) {
//         alert("Password is too short");
//     }
//     if(!emailPattern.test(email)) {
//         alert("Wrong email syntax/adrress");
//     }
// }