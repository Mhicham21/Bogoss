function afficher(){
    const catalogue = document.querySelector('.catalogue')
    fetch('Https://projet-hicham.herokuapp.com/api/products', // kolchi ichof 
     {
         method : 'GET'
     }).then(result => result.json()).then(result => result['data']).then(data => {
         data.forEach(element => {
             let product = document.createElement('div')
             let productName = document.createElement('h2')
             productName.textContent = `Nom: ${element.name}`
             let productPrice = document.createElement('p')
             productPrice.textContent = `Prix: ${element.price}`
             let productDescription = document.createElement('p')
             productDescription.textContent = `Description : ${element.description}`
             product.appendChild(productName)
             product.appendChild(productPrice)
             product.appendChild(productDescription)
             let bouton = document.createElement('input')
             bouton.setAttribute('type', 'button')
             bouton.setAttribute('value', 'acheter')
             product.appendChild(bouton)
             catalogue.appendChild(product)
         });
     })

}

function f(){
   afficher()
}

window.addEventListener('load', f)

