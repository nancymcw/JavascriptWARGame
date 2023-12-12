const suits = ["♠", "♥", "♣", "♦"];
const faces = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

// I made the deck an empty array so that we can push and pop cards in and out, & then combined suits and faces together.
let deck = [];
for (let suit of suits) {
  for (let face of faces) {
    deck.push(suit + face);
  }
}

// Shuffle function, I used a for loop that gets a random card in the index that's different from the current card.
function shuffle() {
  for (let i = deck.length - 1; i > 0; i--) {
    const newCard = Math.floor(Math.random() * (i + 1)); //used Math.floor to make sure it's not a decimal.
    const oldCard = deck[newCard];
    deck[newCard] = deck[i];
    deck[i] = oldCard;
  }
}

shuffle(deck);
console.log(deck);

// Deal function to pop(remove) cards from the deck array into the players' hand arrays.
function deal() {
  return deck.pop();
}

// Empty arrays for the players' hands.
let player1 = [];
let player2 = [];

// Pushing cards into players hands with deal method, each player gets 26 cards so the index keeps getting added to until they each have 26.
for (let i = 0; i < 26; i++) {
  player1.push(deal());
  player2.push(deal());
}

// Function to score each card, slicing from the player's hands as it goes along and comparing scores.
// I sliced a card out of each hand first, & put the values array in order so that they would just judge score based on where the number or face is in order of where it is in the array (with indexOf.)
function cardScoring(player1card, player2card) {
  const player1CardFace = player1card.slice(1);
  const player2CardFace = player2card.slice(1);
  let score1 = faces.indexOf(player1CardFace);
  let score2 = faces.indexOf(player2CardFace);
  if (score1 > score2) {
    return "player1";
  } else if (score2 > score1) {
    return "player2";
  } else if (score1 === score2) {
    return "tie";
  }
}
// Declaring player scores as 0 so they can be added to in the future.
let player1score = 0;
let player2score = 0;

// Arrow function to use scores to say who won or if the game was a tie.
const whoWonWar = () => {
  if (player1score > player2score) {
    console.log(`Player 1 Wins! 
    P1 Score: ${player1score}
    P2 Score: ${player2score}
    `);
  } else if (player2score > player1score) {
    console.log(`Player 2 Wins! 
    P1 Score: ${player1score}
    P2 Score: ${player2score}`);
  } else {
    console.log(
      `Player 1 & Player 2 tied with scores of ${player1score} & ${player2score}.`
    );
  }
};

// And now a function with a for loop to go through each player's index/hand and add points to the scores each round depending on who won.
const startWar = () => {
  for (let i = 0; i < 26; i++) {
    const card1 = player1[i];
    const card2 = player2[i];
    console.log(`Player 1 Lays Down: ${card1}
Player 2 Lays Down: ${card2}`);
    const winner = cardScoring(card1, card2);
    if (winner === "player1") {
      player1score += 1;
      console.log(`Player 1 wins this round.`);
    } else if (winner === "player2") {
      player2score += 1;
      console.log(`Player 2 wins this round.`);
    } else if (winner === "tie") {
      console.log(`Tie!`);
    } else throw new Error(`Game error.`);
  }
};
//Then calling the starting function and declaring a winner function!~
startWar();
whoWonWar();
