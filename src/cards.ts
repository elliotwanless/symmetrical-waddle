export const Cards = (numberOfCards: number = 52) => {
  let cards: number[] = [];
  const cardsSize: number = numberOfCards;

  return {
    getCards: () => cards,
    dealCard: () => cards.pop(),
    generateCards: () => {
      console.log("Generating Cards...");
      let i = 1;
      while (i <= cardsSize) {
        cards.push(i);
        i++;
      }
    },
    shuffleCards: () => {
      console.log("Shuffling Cards..."); // Durstenfeld Shuffle
      for (let i = cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
      }
    },
  };
};
