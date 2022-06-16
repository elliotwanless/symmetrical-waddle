export const dealCards = (cardDeck, player1, player2) => {
  let counter = 1;

  console.log("Dealing cards...");
  while (cardDeck.getCards().length > 0) {
    let dealtCard = cardDeck.dealCard();
    counter % 2 != 0 ? player1.addCard(dealtCard) : player2.addCard(dealtCard);
    counter++;
  }
  console.log("Cards dealt.");
};
export const playRounds = (size: number, player1, player2) => {
  for (let i = 0; i < size / 2; i++) {
    let p1Card = player1.getTopCard();
    let p2Card = player2.getTopCard();
    let roundWinner = p1Card > p2Card ? player1 : player2;

    console.log(`Round: ${i + 1}:`);
    console.log(`Player 1: ${p1Card}  vs.  Player 2: ${p2Card}`);
    console.log(`Player ${roundWinner.getPlayerId()} wins this round\n`);
    roundWinner.increaseScore();
  }
};

export const checkWinner = (player1, player2) => {
  const p1Score = player1.getScore();
  const p2Score = player2.getScore();

  console.log(`\nEND SCORE:\nPlayer 1: ${p1Score}  vs.  Player 2: ${p2Score}`);

  if (p1Score == p2Score) {
    console.log(`IT'S A DRAW!`);
  } else {
    const winningPlayer = p1Score > p2Score ? player1 : player2;
    console.log(`Winner is Player ${winningPlayer.getPlayerId()}`);
  }
};
