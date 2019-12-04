renderNav();
renderMainContent();
renderFooter();


function fetchData() {
  fetch(`http://localhost:3000/countries/`)
    .then(r => r.json())
    .then(countriesArray => {
      countriesArray.forEach((country) => {
        console.log(country)
      })
    })
    .catch(err => console.log(err))
}

fetchData()