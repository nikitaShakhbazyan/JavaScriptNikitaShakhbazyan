// export { fetchAndRenderProducts, renderProducts, sortProductsByPrice };
// import { url } from "./script1"
export {sortingFunction}
const url = 'https://dummyjson.com/products'
const productsContainerDiv = document.querySelector('.cont1');
const sortButton = document.getElementById('sortButton');

function sortingFunction() {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            let products = data.products;

            products.sort(function(a, b) {
                return a.price - b.price;
            });

            console.log(products);
            let sortedProductsDiv = document.createElement('div');
            sortedProductsDiv.innerHTML = products.map(product => `
                <h1>${product.name} - $${product.price}</h1>
            `).join('');
            
            // Вместо console.log, добавьте блок в productsContainerDiv
            productsContainerDiv.appendChild(sortedProductsDiv);

        })
        .catch((error) => {
            console.log(error);
        });
}

sortButton.addEventListener('click', sortingFunction);
