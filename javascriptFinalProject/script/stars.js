const mainDiv = document.querySelector('.mainDiv')

function createStars() {
    const stars = document.createElement('div');
    stars.className = 'stars';
    stars.style.left = Math.random() * window.innerWidth + 'px';
    stars.style.top = Math.random() * window.innerHeight + 'vh'
    stars.style.animationDuration = (Math.random() * 5 + 1) + 's';
    mainDiv.appendChild(stars);

    setTimeout(() => {
        stars.remove();
    }, 10000); 

}

// setInterval(createStars, 20);

export {createStars}