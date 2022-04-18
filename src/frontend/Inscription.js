
function Ajoutuser()
{
    const username = document.querySelector(("input[name='username']")).value
    const password = document.querySelector(("input[name='password']")).value
    const email = document.querySelector(("input[name='email']")).value
    const telephone = document.querySelector(("input[name='telephone']")).value


    const body = new URLSearchParams()
    body.append('username', username)
    body.append('password', password)
    body.append('email', email)
    body.append('telephone', telephone)



    fetch('Https://projet-hicham.herokuapp.com/api/users/signIn',
     {
         method : 'POST',
         headers : {'Content-Type':'application/x-www-form-urlencoded'}, 
         body : body
     }) 


}
function action(){

    const inscr = document.querySelector("input[type='button']")
    inscr.addEventListener('click', Ajoutuser)
}


window.addEventListener("load", action)