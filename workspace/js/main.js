// import fetch from "node-fetch";
const fetch = require('node-fetch');

const test = 4;
console.log(test);

username = "justice_hub";
apiURL = `https://dev.to/api/articles?username=${username}`;

function fetchURL(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))  // here the main response
    .catch((err) => console.log(err));
}

fetchURL(apiURL); // Calling Function