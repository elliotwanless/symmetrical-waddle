import { Cards } from "../src/cards";

describe("Cards", () => {
  const cards = Cards(52);

  test("can generate all cards", () => {
    cards.generateCards();
    expect(cards.getCards().length).toEqual(52);
  });

  test("can shuffle cards", () => {
    cards.shuffleCards();
    expect(cards.getCards()[0] == 1).toBeFalsy();
  });

  test("can deal a card", () => {
    expect(typeof cards.dealCard()).toEqual("number");
  });
});
