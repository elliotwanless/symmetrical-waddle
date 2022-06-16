export const Player = (id: number) => {
  const playerId: number = id;
  let score: number = 0;
  let cards: number[] = [];

  return {
    getPlayerId: () => playerId,
    getScore: () => score,
    getTopCard: () => cards.pop(),
    getCards: () => cards,
    addCard: (cardNumber: number) => cards.push(cardNumber),
    increaseScore: () => (score += 1),
  };
};
