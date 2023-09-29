
// import {filterList} from "./searchInput.js"
// import { sortingFunction } from "./sort.js"
import { createStars } from "./stars.js"
import {searchAndFilter} from './searchInput.js'
// import { fetchAndRenderProducts, renderProducts, sortProductsByPrice } from './sort.js';
export {url}


const url = 'https://dummyjson.com/products'
const ulCont = document.querySelector('#ulContainer')
const container = document.querySelector('.container')
const button = document.querySelector('.btn')
// const search = document.querySelector('#searchInput')
 
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

fetch(url) 
.then((res) => res.json()) 
.then(function (data) {
    let shopProducts = data.products
    console.log(data.products)
    return shopProducts.map(function(product) {
        let div = createNode('div');
        let p = createNode('p')
        let a = createNode('a')
        let img1 = createNode('img')
        a.classList.add('roww')
        p.classList.add('col')
        img1.classList.add('col')
        div.classList.add('newDiv')
        img1.src = product.thumbnail;
        // h1.innerHTML= `${product.title}`
        // console.log(img1)
        a.textContent = `
        Click here for more info `
        a.href = `./index2.html`
        p.innerHTML = `<div class="col">
        <h1>${product.title}</h1> 
        <b>Rating :</b>
        <i>${product.rating}</i> / 5
        <br> <br>
        <b> Product price </b> : ${product.price} usd <br> <b>Product Description</b> ${product.description} </div>`
        a.style.fontSize = '20px'
        p.style.width = '20px'
        // container.style.margin = '180px'
       const imgAppend = append(ulCont,img1)
       const pAppend = append (ulCont,p)
        const aAppend = append(ulCont,a)
        // div.appendChild(img1);
        // div.appendChild(p);
        // div.appendChild(a);

        a.addEventListener('click', function(event) {
            event.preventDefault(); 
            event.stopPropagation()
            
            const productIndex = shopProducts.findIndex(product => product.thumbnail === img1.src);
            const selectedProduct = shopProducts[productIndex];
        
            const productPageHTML = `
            <div style="display: flex; justify-content : space-around; flex-direction : column; align-items:center">
                <img style="width: 5    0%; height: 30%;" src="${selectedProduct.thumbnail}" alt="">
                <div style="margin-left: 20px; border:3px solid gold;border-radius:20px; width:70%; height:40%;display:flex;justify-content:space-around; align-items:center;flex-direction:column;">

                    <h1 style = 'background-color:grey;padding:20px 10px; border-radius:10px'> <b>Title</b> : ${selectedProduct.title}</h1>

                    <h2 style = 'background-color:grey; padding:20px 10px ;border-radius:10px'> <b>Category</b> : ${selectedProduct.category}</h2>

                    <p style = 'color:black;padding:20px'> <b>Rating</b>: ${selectedProduct.rating}/5</p>
                    <p style = 'color:black;padding:20px'><b>Product price</b>: ${selectedProduct.price} usd</p>
                    <p style = 'color:black;padding:20px'><b>Product Description</b>: ${selectedProduct.description}</p>
                </div>
            </div>
        `;
        
        
            ulCont.innerHTML = '';
            ulCont.innerHTML = productPageHTML;
            ulCont.style.display = 'flex'
            ulCont.style.fontSize = '25px'
            ulCont.style.color = 'white'
            ulCont.style.height = '1440px'
            
        });

        
        
    })
    .catch((error)=> {
        console.log(error);
    });
      
})

console.log(url)

// filterList()
// sortingFunction()
// createStars()

searchAndFilter()
