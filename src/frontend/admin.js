function AjoutProd(){
    const name = document.querySelector(("input[name='name']")).value
    const Description = document.querySelector(("input[name='description']")).value
    const prix = document.querySelector(("input[name='prix']")).value

    const body = new URLSearchParams()
    body.append('name', name)
    body.append('description', Description)
    body.append('prix', prix)

    fetch('Https://projet-hicham.herokuapp.com/api/users/admin/products',
    {
        method : 'POST',
        headers : {'Content-Type':'application/x-www-form-urlencoded', hashedpassword : localStorage.getItem('hashedpassword')}, 
        body : body
    })
}


/*function ModifProd()
{
    const name = document.querySelector(("p[name='name']"))
    const Description = document.querySelector(("p[name='description']"))
    const prix = document.querySelector(("p[name='prix']"))

    const body = new URLSearchParams()
    body.append('name', name)
    body.append('description', Description)
    body.append('price', prix)
    fetch(`Https://projet-hicham.herokuapp.com/api/users/admin/products`, //smit prod
    {
        method : 'PUT',
        headers : {'Content-Type':'application/x-www-form-urlencoded'}, 
        body : body
    })
}

function SuppProd(){
    fetch('Https://projet-hicham.herokuapp.com/api/users/admin/products',{ method : 'DELETE'}) 
}*/


function Produits(){

    const ajoutP = document.querySelector("input[type='button']")
    const modifP = document.querySelector("input[type='button']")
    const deleP = document.querySelector("input[type='button']")
   /* deleP.addEventListener('click', SuppProd)
    modifP.addEventListener('click', ModifProd)*/
    ajoutP.addEventListener('click', AjoutProd)
}

window.addEventListener('load', Produits)