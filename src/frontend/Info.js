

function Delete() {


    fetch(`Https://projet-hicham.herokuapp.com/api/users/${localStorage.getItem('id')}`,
     {
         method : 'DELETE', headers: {hashedpassword : localStorage.getItem('hashedpassword')}
     }) 
     window.location.href ="Projet.html"

}

function events() {
    const xsupp = document.querySelector("input[name='xsupp']")
    xsupp.addEventListener('click', Delete)
    const modif = document.querySelector("input[name='modif']")
    modif.addEventListener('click', Modify)

}



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

    fetch( `Https://projet-hicham.herokuapp.com/api/users/${localStorage.getItem('id')}`
    ,{
        method : 'PUT',
        headers : {'Content-Type':'application/x-www-form-urlencoded', hashedpassword : localStorage.getItem('hashedpassword')}, 
        body : body
    }) 
}

function affich(){

    const username = document.querySelector(("p[name='username']"))
    const password = document.querySelector(("p[name='password']"))
    const email = document.querySelector(("p[name='email']"))
    const telephone = document.querySelector(("p[name='telephone']"))

    fetch(`Https://projet-hicham.herokuapp.com/api/users/${localStorage.getItem('id')}`, {method: 'GET', headers: 
    {hashedpassword : localStorage.getItem('hashedpassword')}}).then(response => response.json()).then(response => response['data']).then(
        data=> {
            username.textContent = data.username
            password.textContent = data.password
            email.textContent = data.email
            telephone.textContent = data.telephone
        }
    )



}

function handler(){
    events()
    affich()
}

window.addEventListener('load', handler)