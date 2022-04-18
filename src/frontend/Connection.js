let id


function Connect() {
    const username = document.querySelector( ("input[name='username']")).value
    const password = document.querySelector( ("input[name='password']")).value

    const body = new URLSearchParams()
    body.append('password', password)
    body.append('username', username)


    fetch('Https://projet-hicham.herokuapp.com/api/users/LogIn',
     {
         method : 'POST',
         headers : {'Content-Type':'application/x-www-form-urlencoded'}, 
         body : body



     }).then(resultat => resultat.json()).then (resultat => resultat['data']).then(resultat => 
        {
            if (resultat) {
                id = resultat.id
                console.log(id)
                window.location.href ="Info.html"
                }
            else { 
                 alert("identifiant ou mot de passe éroné")
            }
        
        })


}


window.addEventListener("load", function () {
    const xconnect = document.querySelector("input[type='button']")
    xconnect.addEventListener('click', Connect)


})




