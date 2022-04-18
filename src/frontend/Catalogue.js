function afficher(){
    const catalogue = document.querySelector('.catalogue')
    fetch('Https://projet-hicham.herokuapp.com/api/products', // kolchi ichof 
     {
         method : 'GET'
     }).then(result => result.json()).then(result => result['data']).then(data => {
         data.forEach(element => {
             let product = document.createElement('div')
             let productName = document.createElement('h2')
             productName.textContent = `product name : ${element.name}`
             let productPrice = document.createElement('p')
             productPrice.textContent = `product price : ${element.price}`
             let productDescription = document.createElement('p')
             productDescription.textContent = `product description : ${element.description}`
             product.appendChild(productName)
             product.appendChild(productPrice)
             product.appendChild(productDescription)
             catalogue.appendChild(product)
         });
     })

}

/*function AjoutProd(){
    const name = document.querySelector(("p[name='name']"))
    const Description = document.querySelector(("p[name='description']"))
    const prix = document.querySelector(("p[name='prix']"))

    const body = new URLSearchParams()
    body.append('name', name)
    body.append('description', Description)
    body.append('prix', prix)

    fetch('Https://projet-hicham.herokuapp.com/api/users/admin/products',
    {
        method : 'POST',
        headers : {'Content-Type':'application/x-www-form-urlencoded'}, 
        body : body
    })
}


function ModifProd()
{
    const name = document.querySelector(("p[name='name']"))
    const Description = document.querySelector(("p[name='description']"))
    const prix = document.querySelector(("p[name='prix']"))

    const body = new URLSearchParams()
    body.append('name', name)
    body.append('description', Description)
    body.append('price', prix)
    fetch(`Https://projet-hicham.herokuapp.com/api/users/admin/products${pid}`, //smit prod
    {
        method : 'PUT',
        headers : {'Content-Type':'application/x-www-form-urlencoded'}, 
        body : body
    })
}

function SuppProd(){
    fetch('Https://projet-hicham.herokuapp.com/api/users/admin/products',{ method : 'DELETE'}) 
}


function Produits(){

    const ajoutP = document.querySelector("input[type='button']")
    const modifP = document.querySelector("input[type='button']")
    const deleP = document.querySelector("input[type='button']")
    deleP.addEventListener('click', SuppProd)
    modifP.addEventListener('click', ModifProd)
    ajoutP.addEventListener('click', AjoutProd)
}
*/
function f(){
   afficher()
}

window.addEventListener('load', f)

