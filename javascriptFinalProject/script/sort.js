
const url = 'https://dummyjson.com/products'
const productsContainerDiv = document.querySelector('.container');
const sortButton = document.getElementById('sortButton');

const fetchAndRenderProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    products = data.products;
    renderProducts(products);
};

const renderProducts = (productsToRender) => {
    productsContainerDiv.innerHTML = productsToRender
        .map(product => `<div>${product.name} - $${product.price}</div>`)
        .join('');
};

const sortProductsByPrice = () => {
    products.sort((a, b) => a.price - b.price);
    renderProducts(products);
};

sortButton.addEventListener('click', () => {
    sortProductsByPrice();
});

fetchAndRenderProducts();