export {filterList}

function filterList() {
    document.querySelector('#searchInput').addEventListener('input', filterList);
    const searchInput = document.querySelector('#searchInput');
    const filter = searchInput.value.toLowerCase();
    const listItems = document.querySelectorAll('.col,.row,img,a');

    Array.from(listItems).forEach((item) => {
        let text = item.textContent;
        if (text.toLowerCase().includes(filter)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}