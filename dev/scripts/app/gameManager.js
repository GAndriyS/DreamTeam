/** Class representing a Game Manager. */
function GameManager() {
    var _treasureReward = 0;

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

}
var GameManager = new GameManager();
