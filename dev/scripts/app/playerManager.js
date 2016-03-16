/** Class representing a Player's Manager. */
function PlayerManager() {
    var _players = []

    /**
     * Get all players.
     * @return {array} - all players.
     */
    this.getPlayers = function() {
        return _players;
    }

    /**
     * Add player to game.
     * @param {object} config - player configuration object.
     */
    this.addPlayer = function(config) {
        var newPlayer = new Player(config);
        _players.push(newPlayer);
    }

    /**
     * Set order and hero for each players.
     * @param {array} heroes - array of card-heroes.
     */
    /* !!!!!!! */
    /*this.begin = function(heroes) {
        if (Array.isArray(heroes)) {
            var tempHeroes = heroes.slice(0);
            var randomNumber;
            var order = getRandomArray(0, _players.length);
            _players.forEach(function(player, index) {
                randomNumber = getRandomInt(0, tempHeroes.length-1);
                player.setHero(tempHeroes[randomNumber]);
                player.setOrder(order[index]);
                tempHeroes.splice(randomNumber, 1);
            });

           RenderManager.renderSectin(_players[0].getHand(), "hand");
        } else {
            throw "Error: can't reverse gender with wrong data";
        }
    }*/

    /**
     * Reverse player's gender.
     * @param {string} playerName - target player's name.
     */
    this.reverseGender = function(playerName) {
        if (typeof playerName == "string") {
            var player = findPlayer(_players, playerName);
            var currentGender = player.getGender();

            currentGender = currentGender == "male" ? "female" : "male";
            player.setGender(currentGender);

        } else {
            throw "Error: can't reverse gender with wrong data";
        }
    }

    /**
     * Raise player's level.
     * @param {number} n - raise value.
     * @param {string} playerName - target player's name.
     */
    this.raiseLevel = function(n, playerName) {
        if (typeof n == "number" && typeof playerName == "string") {
            var player = findPlayer(_players, playerName);
            var currentLevel = player.getLevel();

            player.setLevel(currentLevel + n);

        } else {
            throw "Error: can't raise level with wrong data";
        }
    }

    /**
     * Decrease player's level.
     * @param {number} n - decrease value.
     * @param {string} playerName - target player's name.
     */
    this.decreaseLevel = function(n, playerName) {
        if (typeof n == "number" && typeof playerName == "string") {
            var player = findPlayer(_players, playerName);
            var currentLevel = player.getLevel();

            if (currentLevel - n >= 1) {
                player.setLevel(currentLevel - n);
                return;
            } else {
                console.log("Can't decrease level to " + (currentLevel - n));
            }

        } else {
            throw "Error: can't decrease level with wrong data";
        }
    }

    /**
     * Set new player's power.
     * @param {number} n - new power value.
     * @param {string} playerName - target player's name.
     */
    this.setPlayerPower = function(n, playerName) {
        if (typeof n == "number" && typeof playerName == "string") {
            var player = findPlayer(_players, playerName);

            player.setPower(n);

        } else {
            throw "Error: can't set player power with wrong data";
        }
    }


}

var PlayerManager = new PlayerManager();
PlayerManager.addPlayer({name: "Andriy", gender: "male"});
PlayerManager.addPlayer({name: "Ira", gender: "female"});
PlayerManager.addPlayer({name: "Helena", gender: "female"});

var p = PlayerManager.getPlayers();
