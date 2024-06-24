let url = "https://deckofcardsapi.com/api/deck";

// async function randomCard() {
//   let response = await axios.get(`${url}/new/draw/?count=1`);
//   console.log(
//     `${response.data.cards[0].value} of ${response.data.cards[0].suit}`
//   );
// }

// randomCard();

// async function randomSameDeck() {
//   let card1 = await axios.get(`${url}/new/draw/?count=1`);
//   let deckId = card1.data.deck_id;
//   console.log(`${card1.data.cards[0].value} of ${card1.data.cards[0].suit}`);

//   let card2 = await axios.get(`${url}/${deckId}/draw/?count=1`);
//   console.log(`${card2.data.cards[0].value} of ${card2.data.cards[0].suit}`);
// }

// randomSameDeck();

async function showRandomCard() {
  let $button = $("button");
  let $cardDiv = $("#cards");
  let deck = await axios.get(`${url}/new/shuffle/`);

  $button.on("click", async function () {
    let card = await axios.get(`${url}/${deck.data.deck_id}/draw/?count=1`);
    let imgSrc = card.data.cards[0].image;
    console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`);
    $cardDiv.append($(`<img src=${imgSrc}>`));

    if (card.data.remaining === 0) {
      $("body").prepend("<h1>Finished the Deck!</h1>");
      $button.remove();
    }
  });
}
showRandomCard();
