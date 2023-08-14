document.addEventListener("DOMContentLoaded", function () {
    var countriesContainer = document.getElementById("countriesContainer");
    var searchInput = document.getElementById("searchInput");
    var searchInfo = document.getElementById("searchInfo");
    var nameButton = document.getElementById("nameButton");
    var capitalButton = document.getElementById("capitalButton");
    var populationButton = document.getElementById("populationButton");
    var countriesDataFiltered = [...countries];
  
    function renderCountries(data) {
      countriesContainer.innerHTML = "";
      data.forEach(function (country) {
        var countryBox = document.createElement("div");
        countryBox.classList.add("country-box");
        countryBox.innerHTML = `
          </div>
          <div class="info-container">
            <h2>${country.name}</h2>
            <p><strong>Capital:</strong> ${country.capital}</p>
            <p><strong>Languages:</strong> ${country.languages.join(", ")}</p>
            <p><strong>Population:</strong> ${country.population}</p>
          </div>
        `;
        countriesContainer.appendChild(countryBox);
      });
    }
  
    function filterByName(query) {
      searchInfo.textContent = `Showing results for Name: ${query}`;
      countriesDataFiltered = countries.filter(function (country) {
        var lowercaseQuery = query.toLowerCase();
        return country.name.toLowerCase().includes(lowercaseQuery);
      });
      renderCountries(countriesDataFiltered);
    }
  
    function filterByCapital(query) {
      searchInfo.textContent = `Showing results for Capital: ${query}`;
      countriesDataFiltered = countries.filter(function (country) {
        var lowercaseQuery = query.toLowerCase();
        return country.capital.toLowerCase().includes(lowercaseQuery);
      });
      renderCountries(countriesDataFiltered);
    }
  
    function filterByPopulation() {
      searchInfo.textContent = `Showing results for Population (largest first)`;
      countriesDataFiltered = countries.slice().sort(function (a, b) {
        return b.population - a.population;
      });
      renderCountries(countriesDataFiltered);
    }
  
    nameButton.addEventListener("click", function () {
      var query = searchInput.value;
      if (query !== "") {
        filterByName(query);
      }
    });
  
    capitalButton.addEventListener("click", function () {
      var query = searchInput.value;
      if (query !== "") {
        filterByCapital(query);
      }
    });
  
    populationButton.addEventListener("click", function () {
      filterByPopulation();
    });
    function filterCountries(query) {
      searchInfo.textContent = `Showing results for: ${query}`;
      countriesDataFiltered = countries.filter(function (country) {
        var lowercaseQuery = query.toLowerCase();
        return (
          country.name.toLowerCase().includes(lowercaseQuery) ||
          country.capital.toLowerCase().includes(lowercaseQuery) ||
          country.languages.some(function (language) {
            return language.toLowerCase().includes(lowercaseQuery);
          })
        );
      });
      renderCountries(countriesDataFiltered);
    }
  
    searchInput.addEventListener("input", function () {
      var query = searchInput.value;
      if (query === "") {
        searchInfo.textContent = "";
        countriesDataFiltered = [...countries];
        renderCountries(countriesDataFiltered);
      } else {
        filterCountries(query);
      }
    });
  
    renderCountries(countries);
  });
  