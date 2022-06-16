const { Player } = require("../src/player");

describe("Player", () => {
  const testPlayer = Player(123);
  test("sets up correctly with a given ID", () => {
    expect(testPlayer.getPlayerId()).toEqual(123);
  });
  test("returns the score correctly", () => {
    expect(testPlayer.getScore()).toEqual(0);
  });
  test("can add and retrieve cards correctly", () => {
    testPlayer.addCard(23);
    expect(testPlayer.getCards()).toEqual([23]);
    expect(testPlayer.getTopCard()).toEqual(23);
  });
  test("can increase score when called", () => {
    testPlayer.increaseScore();
    expect(testPlayer.getScore()).toEqual(1);
  });
});
