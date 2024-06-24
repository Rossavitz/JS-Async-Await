let url = "http://numbersapi.com";
let favoriteNumber = 2;
let favoriteNumbers = [2, 17, 19];

async function randomNumber() {
  let response = await axios.get(`${url}/random?json`);
  console.log(response);
}
randomNumber();

// Creates H1 to visually separate from manyFavorite which appends to ul
async function manyRandom() {
  let response = await axios.get(`${url}/${favoriteNumbers}?json`);
  for (const num of favoriteNumbers)
    $("body").append(`<h1>${response.data[num]}</h1>`);
}

manyRandom();

// Appending to ul to visually separate from manyRandom which creates H1's
async function manyFavorite() {
  let response = await Promise.all([
    axios.get(`${url}/${favoriteNumber}?json`),
    axios.get(`${url}/${favoriteNumber}?json`),
    axios.get(`${url}/${favoriteNumber}?json`),
    axios.get(`${url}/${favoriteNumber}?json`),
  ]);
  for (const resp of response) {
    $("ul").append(`<li>${resp.data.text}</li>`);
  }
}

manyFavorite();
