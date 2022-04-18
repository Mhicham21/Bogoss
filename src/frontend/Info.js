
import jws from 'jws'

function Delete() {


    fetch('Https://projet-hicham.herokuapp.com/api/user/1',
     {
         method : 'DELETE'
     }) 

}

function supp() {
    const xsupp = document.querySelector("input[type='button']")
    xsupp.addEventListener('click', Delete)

}

window.addEventListener("load", supp)


function Modify(){
    const username = document.querySelector(("input[name='username']")).value
    const password = document.querySelector(("input[name='password']")).value
    const email = document.querySelector(("input[name='email']")).value
    const telephone = document.querySelector(("input[name='telephone']")).value

    const body = new URLSearchParams()
    body.append('username', username)
    body.append('password', password)
    body.append('email', email)
    body.append('telephone', telephone)

    fetch( `Https://projet-hicham.herokuapp.com/api/users/1`
    ,{
        method : 'POST',
        headers : {'Content-Type':'application/x-www-form-urlencoded'}, 
        body : body
    }) 
}

function affich(){

    const username = document.querySelector(("p[name='username']"))
    const password = document.querySelector(("p[name='password']"))
    const email = document.querySelector(("p[name='email']"))
    const telephone = document.querySelector(("p[name='telephone']"))

    fetch(`Https://projet-hicham.herokuapp.com/api/users/1`, {method: 'GET', headers: 
    {hashedpassword : 'eyJhbGciOiJIUzI1NiJ9.SWFtQWRtaW4.YIVg8PfdSY6lWKqA9G7MA647Uhupr-dP7a02OKhFxrM'}}).then(response => response.json()).then(response => response['data']).then(
        data=> {
            username.textContent = data.username
            password.textContent = data.password
        }
    )



}


window.addEventListener('load', affich)