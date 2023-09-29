// export {filterList}

// function filterList() {
//     document.querySelector('#searchInput').addEventListener('input', filterList);
//     const searchInput = document.querySelector('#searchInput');
//     const filter = searchInput.value.toLowerCase();
//     const listItems = document.querySelectorAll('.col,.row,img,a');

//     Array.from(listItems).forEach((item) => {
//         let text = item.textContent;
//         if (text.toLowerCase().includes(filter)) {
//             item.style.display = '';
//         } else {
//             item.style.display = 'none';
//         }
//     });
// }

// import { img1 } from "./script1.js";
export function searchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const listItems = document.querySelectorAll('li');
    const container = document.querySelector('.container')
    const elements = []
    // console.log(img1)

  
    searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.toLowerCase();
      searchResults.innerHTML = '';
  
      container.forEach((item) => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
          const resultItem = document.createElement('li');
          resultItem.textContent = item.textContent;
          searchResults.appendChild(resultItem);
        }
      });
    });
  }
