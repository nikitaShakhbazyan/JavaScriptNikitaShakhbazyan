'use strict'

const container = document.querySelector('.container');

const requestXML = new XMLHttpRequest();
requestXML.open('GET', 'https://restcountries.com/v2/name/georgia');
requestXML.send();

requestXML.addEventListener('load', function() {
    const data = JSON.parse(this.responseText)[0];
    console.log(data);

    renderCountry(data);
    getNeighbourCountry(data);
    // getNeighbourCountry1(data)
});

const renderCountry = function (data) {
  const html = `
  <article class="country">
    <img style="width: 350px;border: 2px solid black;"class="country-img" src="${data.flag}">
    <div class="country-data">
      <h3 class="country-name"> Country : ${data.name}</h3>
      <h4 class="country-region">Region : ${data.region}</h4>

      <p class="country-row">
      <b>Population</b> ${data.population/1000000} millions of people <br>
      <b>Language</b> is ${data.languages[0].name} <br>
      <b>Currency</b> is ${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  container.insertAdjacentHTML('beforeend', html);
}

const getNeighbourCountry = function (data) {
  const neighbour = data.borders[0];

  if (!neighbour) 
    return;

  const requestXML2 = new XMLHttpRequest();
  requestXML2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
  requestXML2.send();

  requestXML2.addEventListener('load', function() {
    const data2 = JSON.parse(this.responseText);
    console.log(data2);

    renderCountry(data2)
  });


  const getNeighbourCountry1 = function (data) {
    const neighbour1 = data.borders[1];

    if(!neighbour1)
    return
    const requestXML3 = new XMLHttpRequest();
    requestXML3.open('GET', `https://restcountries.com/v2/alpha/${neighbour1}`);
    requestXML3.send();
  
    requestXML3.addEventListener('load', function() {
      const data3 = JSON.parse(this.responseText);
      console.log(data3);
  
      renderCountry(data3)

  })
}
getNeighbourCountry1(data) 
}