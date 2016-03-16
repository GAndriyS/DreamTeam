/** Class representing a game Player. */
function Player(config) {
    /**
    * Create a player.
    * @param {string} config.name - Player's name.
    * @param {string} config.gender - Player's gender.
    */
    var _name = config.name;
    var _order;
    var _gender = config.gender;
    var _lvl = 1;
    var _power = 1;

    /**
     * Get the player name.
     * @return {string} - Player name string.
     */
    this.getName = function() {
        return _name;
    }

    /**
     * Get the player's order.
     * @return {number} - Player name string.
     */
    this.getOrder = function() {
        return _order;
    }

    /**
     * Get the player gender.
     * @return {string} - Player gender string.
     */
    this.getGender = function() {
        return _gender;
    }

    /**
     * Get the player level value.
     * @return {number} - Player level value.
     */
    this.getLevel = function() {
        return _lvl;
    }

    /**
     * Get the player power value.
     * @return {number} - Player power value.
     */
    this.getPower = function() {
        return _power;
    }

    /**
     * Set player's order.
     * @param {number} order - New player's order.
     */
    this.setOrder = function(order) {
        if (typeof order == "number") {
            _order = order;
        } else {
            throw "Error: order be a number.";
        }
    }

    /**
     * Set gender for player.
     * @param {string} gender - New player's gender.
     */
    this.setGender = function(gender) {
        if (typeof gender == "string") {
            _gender = gender;
        } else {
            throw "Error: gender must be a string.";
        }
    }

    /**
     * Set level for player.
     * @param {number} n - New level value.
     */
    this.setLevel = function(n) {
        if (typeof n == "number") {
            _lvl = n;
        } else {
            throw "Error: lvl must be a number.";
        }
    }

    /**
     * Set attack power for player.
     * @param {number} n - New attack power value.
     */
    this.setPower = function(n) {
        if (typeof n == "number") {
            _power = n;
        } else {
            throw "Error: power must be a number.";
        }
    }
}
