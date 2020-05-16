// Access HTML Form Elements
const form = document.querySelector('form');
const formInput = document.getElementById('user-input');

// Access Paragraph Elemnts
const country = document.querySelector('.country');

// Add Submit Listener to Form
form.addEventListener('submit', searchUser);

// Function To Hanlde Search
async function searchUser(e) {
  // Prevents Automatic Submission of Form
  e.preventDefault();

  const countryName = formInput.value;

  try {
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`);
    const data = await response.json();
    populateUI(data[0]);
    console.log(data);
    // Clear Form Input
    form.reset();
  } catch (error) {
    console.log(error);
  }
}

// Input Data Gotten From API in UI
function populateUI(data) {
  const { flag, alpha2Code, alpha3Code, callingCodes, capital, region, subregion, languages, population, area, currencies, latlng, gini } = data;

  country.innerHTML = `
      <div class="flag">
        <img src="${flag}" alt="Country Flag">
      </div>
      <div class="info">
        <p class="code"><strong>Code: </strong> ${alpha2Code} / ${alpha3Code}</p>
        <p class="capital"><strong>Capital: </strong> ${capital}</p>
        <p class="region"><strong>Region: </strong>${region}</p>
        <p class="subregion"><strong>Sub-region: </strong>${subregion}</p>
        <p class="call-code"><strong>Call Code: </strong>+${callingCodes[0]}</p>
        <p class="language"><strong>Language: </strong> ${languages[0].name}</p>
        <p class="population"><strong>Population:</strong>${population}</p>
        <p class="area"><strong>Area: </strong> ${area}</p>
        <p class="currency"><strong>Currency: </strong>${currencies[0].name} ${currencies[0].symbol}</p>
        <p class="world-bank-gini"><strong>World Bank Gini: </strong>${gini}%</p>
        <p class="lat_lng"><strong>Lat Long: </strong>Lat: ${latlng[0]}, Lng: ${latlng[1]}</p>
      </div>
  `;

  country.style.display = 'block';
}