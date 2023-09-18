const mainDiv = document.querySelector('.mainDiv')

function createStars() {
    const stars = document.createElement('div');
    stars.className = 'stars';
    stars.style.left = Math.random() * window.innerWidth + 'px';
    mainDiv.appendChild(stars);

    setTimeout(() => {
        stars.remove();
    }, 3000); 
}

setInterval(createStars, 20); // 

export {createStars}