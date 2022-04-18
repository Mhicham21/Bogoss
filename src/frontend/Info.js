import{id} from "./Connection"

console.log(id)

function Delete() {


    fetch('Https://projet-hicham.herokuapp.com/api/user/id',
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

    fetch( `Https://projet-hicham.herokuapp.com/api/users/${id}`
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

    fetch( `Https://projet-hicham.herokuapp.com/api/users/${id}`)



}


window.addEventListener('load', affich)