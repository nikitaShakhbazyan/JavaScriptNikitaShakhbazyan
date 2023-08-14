'use strict'

const url = 'https://dummyjson.com/products'
const ul = document.getElementById('authors');
const ulCont = document.querySelector('#ulContainer')
const container = document.querySelector('.container')
 


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}



fetch(url) 
.then((res) => res.json()) 
.then(function(data) {
    let shopProducts = data.products
    console.log(data.products)
    return shopProducts.map(function(product) {
        let a = createNode('a')
        let p = createNode('p')
        let img1 = createNode('img')
        a.classList.add('col')
        p.classList.add('col')
        img1.classList.add('col')
        img1.src = product.thumbnail;
        // h1.innerHTML= `${product.title}`

        a.innerHTML = `Click here for more info `
        p.innerHTML = `<h1>${product.title}</h1> <b>Rating :</b> <i>${product.rating}</i> / 5 <br> <br> <b> Product price </b> : ${product.price} usd <br> <b>Product Description</b> ${product.description}`
        a.style.fontSize = '25px'
        // container.style.margin = '180px'
       const imgAppend = append(ulCont,img1)
        const aAppend = append(ulCont,a)
        const pAppend = append (ulCont,p)
    })
    .catch(function(error) {
        console.log(error);
      });
})
console.log(url)