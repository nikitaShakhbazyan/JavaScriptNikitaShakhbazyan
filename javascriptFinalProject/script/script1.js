'use strict'
export {createNode,append}

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
        let p = createNode('p')
        let a = createNode('a')
        let img1 = createNode('img')
        a.classList.add('row')
        p.classList.add('col')
        img1.classList.add('col')
        img1.src = product.thumbnail;
        // h1.innerHTML= `${product.title}`

        a.textContent = `Click here for more info `
        a.href = `./index2.html`
        p.innerHTML = `<h1>${product.title}</h1> <b>Rating :</b> <i>${product.rating}</i> / 5 <br> <br> <b> Product price </b> : ${product.price} usd <br> <b>Product Description</b> ${product.description}`
        a.style.fontSize = '20px'
        p.style.width = '20px'
        // container.style.margin = '180px'
       const imgAppend = append(ulCont,img1)
       const pAppend = append (ulCont,p)
        const aAppend = append(ulCont,a)
    })
    .catch(function(error) {
        console.log(error);
      });
})
console.log(url)