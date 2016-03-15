/** Class representing a game Player. */
function Player(config) {
    /**
    * Create a player.
    * @param {string} config.name - Player's name.
    * @param {string} config.gender - Player's gender.
    */
    var _name = config.name;
    var _gender = config.gender;
    var _lvl = 1;
    var _power = 1;
    var _buffs = [];
    var _debuffs = [];
    var _hero = "";
    var _items = {
        head: [],
        chest: [],
        leftHand: [],
        rightHand: [],
        boots: [],
        class: [],
        ally: [],
        cheats: []
    };

    /**
     * Get the player name.
         * @return {string} - Player name string.
     */
    this.getName = function() {
        return _name;
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
     * Get the player buffs.
     * @return {array} - Player buffs array.
     */
    this.getBuffs = function() {
        return _buffs;
    }

    /**
     * Get the player debuffs.
     * @return {array} - Player debuffs array.
     */
    this.getDebuffs = function() {
        return _debuffs;
    }

    /**
     * Get the player hero.
     * @return {string} - Player hero name.
     */
    this.getHero = function() {
        return _hero;
    }

    /**
     * Get the player items.
     * @return {object} - Object of player items.
     */
    this.getItems = function() {
        return _items;
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

    /**
     * Set buffs for player.
     * @param {array} arr - New buffs array.
     */
    this.setBuffs = function(arr) {
        if (Array.isArray(arr)) {
            _buffs = arr;
        } else {
            throw "Error: buffs must be an array.";
        }
    }

    /**
     * Set debuffs for player.
     * @param {array} arr - New debuffs array.
     */
    this.setDebuffs = function(arr) {
        if (Array.isArray(arr)) {
            _debuffs = arr;
        } else {
            throw "Error: debuffs must be an array.";
        }
    }

    /**
     * Set hero for player.
     * @param {string} hero - New hero name.
     */
    this.setHero = function(hero) {
        if (typeof hero == "string") {
            _hero = hero;
        } else {
            throw "Error: hero must be a string.";
        }
    }

    /**
     * Set items for player.
     * @param {object} obj - New items object.
     */
    this.setItems = function(obj) {
        if (typeof obj == "object") {
            _items = obj;
        } else {
            throw "Error: items must be an object.";
        }
    }

}
