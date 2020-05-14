const setup = document.querySelector('p.setup');
const delivery = document.querySelector('p.delivery');


// Fetch Jokes From RAPID API
var fetchJokes = async () => {
  try {
    const response = await fetch("https://jokeapi-v2.p.rapidapi.com/joke/Any?contains=CA&format=json&blacklistFlags=nsfw&idRange=0-150&type=single%252Ctwopart", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
        "x-rapidapi-key": "f877bd6fb9msh305717c19548ef9p1b49c2jsn1980bde254cc"
      }
    })
    const data = await response.json()

    // Populate UI WIth Jokes Gotten in Data Object
    if (data.type == 'single') {
      let jokes = data;

      setup.innerHTML = `${jokes.joke}`
    } else {
      let jokes = data

      setup.innerHTML = `${jokes.setup}`
      delivery.innerHTML = `${jokes.delivery}`
    }

    return data;
  } catch (err) {
    console.log(err)
  }
}

// Fetch Jokes After evry 20 sec then populate UI
setInterval(fetchJokes, 20000);