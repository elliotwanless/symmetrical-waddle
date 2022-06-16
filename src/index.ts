import { Player } from "./player";
import { Cards } from "./cards";
import { checkWinner, dealCards, playRounds } from "./helpers/gameplay";

const size = 52;
const cardDeck = Cards(size);
const player1 = Player(1);
const player2 = Player(2);

cardDeck.generateCards();
cardDeck.shuffleCards();

dealCards(cardDeck, player1, player2);
playRounds(size, player1, player2);
checkWinner(player1, player2);
