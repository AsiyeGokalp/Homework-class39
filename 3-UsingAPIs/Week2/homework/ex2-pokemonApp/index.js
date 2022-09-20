'use strict';

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
In this exercise you're going to do several things:

1. Create and append DOM elements using JavaScript only.
2. Fetch data from a public API: <https://pokeapi.co/api/v2/pokemon?limit=151>
3. Display the results in the DOM.
------------------------------------------------------------------------------*/

async function fetchData(url) {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error('response was not okay');
}

async function fetchAndPopulatePokemons(url, select) {
  try {
    const data = await fetchData(url);
    for (const name of data['results']) {
      const option = document.createElement('option');
      option.textContent = name.name;
      select.appendChild(option);
    }
  } catch (err) {
    console.log('Error:' + err);
  }
}

async function fetchImage(url, img) {
  try {
    const response = await fetch(url);
    const data = await response.blob();
    img.src = URL.createObjectURL(data);
  } catch (err) {
    console.log(err);
  }
}

function main() {
  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  const button = document.createElement('button');
  const img = document.createElement('img');
  const select = document.createElement('select');

  button.textContent = 'Get pokemon!';
  button.getAttribute('type', 'submit');
  img.getAttribute('src', '');
  img.getAttribute('alt', 'pokemon');

  document.body.appendChild(button);
  document.body.appendChild(img);
  document.body.appendChild(select);

  button.addEventListener('click', () => {
    fetchAndPopulatePokemons(URL, select);
  });

  select.addEventListener('change', () => {
    fetchImage(URL, img);
  });
}

window.addEventListener('load', main);
