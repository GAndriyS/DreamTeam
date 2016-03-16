/** Class representing a Game Manager. */
function GameManager() {
    var _battleCardsPlayer = [];
    var _battleCardsMonster = [];
    var _treasureReward = 0;

    /**
     * Get all monster's cards in battle
     *  @return {array} cards in battle.
     */
    this.getMobCards = function() {
        return _battleCardsMonster;
    }

    /**
     * Get all player's cards in battle
     *  @return {array} cards in battle.
     */
    this.getPlayerCards = function() {
        return _battleCardsPlayer;
    }

    /**
     * Get current treasure reward
     *  @return {number} reward.
     */
    this.getPlayerCards = function() {
        return _battleCardsPlayer;
    }

    /**
     * Add card to monster in battle
     *  @param {object} obj - card object.
     */
    this.addCardToMob = function(obj) {
        if (typeof obj == "object") {
            _battleCardsMonster.push(obj);
        } else {
            throw "Error: card must be an object.";
        }
    }

    /**
     * Add card to player in battle
     *  @param {object} obj - card object.
     */
    this.addCardToPlayer = function(obj) {
        if (typeof obj == "object") {
            _battleCardsPlayer.push(obj);
        } else {
            throw "Error: card must be an object.";
        }
    }

    /**
     * Remove all cards from table
     */
    this.cleanDeck = function() {
        _battleCardsPlayer = [];
        // Send cards to CardController
        __battleCardsMonster = [];
        // Send cards to CardController
    }

    /**
     * Set current reward.
     * @param {number} n - New treasure reward value.
     */
    this.setTreasureReward = function(n) {
        if (typeof n == "number") {
            _treasureReward = n;
        } else {
            throw "Error: power must be a number.";
        }
    }

    /**
     * Increase current reward.
     * @param {number} n - Increase reward value.
     */
    this.increaseTreasureReward = function(n) {
        if (typeof n == "number") {
            _treasureReward = n;
        } else {
            throw "Error: power must be a number.";
        }
    }

    /**
     * Starts a game and give 8 basic cards and hero card for each player.
     */
    this.startGame = function() {
        var players = PlayerManager.getPlayers();

        players.forEach(function(player) {
            PlayerManager.giveCards(treasures, player.getName());
            PlayerManager.giveCards(doors, player.getName());
        });
        PlayerManager.begin(heroes);
    }
}
var GameManager = new GameManager();
GameManager.startGame();
