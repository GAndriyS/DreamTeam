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
     * Reverse player's gender.
     * @param {string} playerName - target player's name.
     */
    this.reverseGender = function(playerName) {
        if (typeof playerName == "string") {
            var currentGender;

            _players.forEach(function(player){
                if (player.getName() == playerName) {
                    currentGender = player.getGender();
                    currentGender = currentGender == "male" ? "female" : "male";
                    player.setGender(currentGender);
                    return;
                }
            });

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
            var currentLevel;

            _players.forEach(function(player){
                if (player.getName() == playerName) {
                    currentLevel = player.getLevel();
                    player.setLevel(currentLevel + n);
                    return;
                }
            });

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
            var currentLevel;

            _players.forEach(function(player) {
                if (player.getName() == playerName) {
                    currentLevel = player.getLevel();
                    if (currentLevel - n >= 1) {
                        player.setLevel(currentLevel - n);
                        return;
                    } else {
                        console.log("Can't decrease level to " + (currentLevel - n));
                    }
                }
            });

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

            _players.forEach(function(player) {
                if (player.getName() == playerName) {
                    player.setPower(n);
                    return;
                }
            });

        } else {
            throw "Error: can't set player power with wrong data";
        }
    }

    /**
     * Add buff to player.
     * @param {object} newBuff - new buff object.
     * @param {string} playerName - target player's name.
     */
    this.addBuff = function(newBuff, playerName) {
        if (typeof newBuff == "object" && typeof playerName == "string") {
            var currentBuffs = [];

            _players.forEach(function(player) {
                if (player.getName() == playerName) {
                    currentBuffs = player.getBuffs();
                    currentBuffs.push(newBuff);
                    player.setBuffs(currentBuffs);
                    return;
                }
            });

        } else {
            throw "Error: can't add buff with wrong data";
        }
    }

    /**
     * Remove buff from player.
     * @param {string} buffName - buff name.
     * @param {string} playerName - target player's name.
     */
    this.removeBuff = function(buffName, playerName) {
        if (typeof buffName == "string" && typeof playerName == "string") {
            var currentBuffs = [];
            var removeBuff = {};

            _players.forEach(function(player) {
                if (player.getName() == playerName) {
                    currentBuffs = player.getBuffs();
                    currentBuffs.forEach(function(buff) {
                        if (buff.name == buffName) {
                            removeBuff = buff;
                            return;
                        }
                    });
                    currentBuffs.splice(currentBuffs.indexOf(removeBuff), 1);
                    player.setBuffs(currentBuffs);
                    return;
                }
            });

        } else {
            throw "Error: can't remove buff with wrong data";
        }
    }

    /**
     * Add debuff to player.
     * @param {object} newDebuff - new debuff object.
     * @param {string} playerName - target player's name.
     */
    this.addDebuff = function(newDebuff, playerName) {
        if (typeof newDebuff == "object" && typeof playerName == "string") {
            var currentDebuffs = [];

            _players.forEach(function(player) {
                if (player.getName() == playerName) {
                    currentDebuffs = player.getDebuffs();
                    currentDebuffs.push(newDebuff);
                    player.setDebuffs(currentDebuffs);
                    return;
                }
            });

        } else {
            throw "Error: can't add debuff with wrong data";
        }
    }

    /**
     * Remove debuff from player.
     * @param {string} debuffName - debuff name.
     * @param {string} playerName - target player's name.
     */
    this.removeDebuff = function(debuffName, playerName) {
        if (typeof debuffName == "string" && typeof playerName == "string") {
            var currentDebuffs = [];
            var removeDebuff = {};

            _players.forEach(function(player) {
                if (player.getName() == playerName) {
                    currentDebuffs = player.getDebuffs();
                    currentDebuffs.forEach(function(debuff) {
                        if (debuff.name == debuffName) {
                            removeDebuff = debuff;
                            return;
                        }
                    });
                    currentDebuffs.splice(currentDebuffs.indexOf(removeDebuff), 1);
                    player.setDebuffs(currentDebuffs);
                    return;
                }
            });

        } else {
            throw "Error: can't remove debuff with wrong data";
        }
    }

    /**
     * Set hero for player.
     * @param {string} hero - new hero namr.
     * @param {string} playerName - target player's name.
     */
    this.setHero = function(hero, playerName) {
        if (typeof hero == "string" && typeof playerName == "string") {

            _players.forEach(function(player) {
                if (player.getName() == playerName) {
                    player.setHero(hero);
                    return;
                }
            });

        } else {
            throw "Error: can't set hero with wrong data";
        }
    }

    /**
     * Swap heroes between players.
     * @param {string} playerName1 - first player's name.
     * @param {string} playerName2 - second player's name.
     */
    this.swapHeroes = function(playerName1, playerName2) {
        if (typeof playerName1 == "string" && typeof playerName2 == "string") {
            var firstHeroIndex;
            var secondHeroIndex;
            var tempHero;

            _players.forEach(function(player, index) {
                if (player.getName() == playerName1) {
                    firstHeroIndex = index;
                } else if (player.getName() == playerName2) {
                    secondHeroIndex = index;
                }
            });

            tempHero = _players[firstHeroIndex].getHero();
            _players[firstHeroIndex].setHero(_players[secondHeroIndex].getHero());
            _players[secondHeroIndex].setHero(tempHero);

        } else {
            throw "Error: can't swap heroes with wrong data";
        }
    }

    /**
     * Equip item on player.
     * @param {object} item - object of card-item.
     * @param {string} playerName - target player's name.
     */
    this.equipItem = function(item, playerName) {
        if (typeof item == "object" && typeof playerName == "string") {
            var currentItems;

            _players.forEach(function(player) {
                if (player.getName() == playerName) {
                    currentItems = player.getItems();

                    for(type in currentItems) {
                        if (type == item.class) {
                            item.status = "active";
                            currentItems[type].push(item);
                            break;
                        }
                    }

                    return;
                }
            });

        } else {
            throw "Error: can't equip item with wrong data";
        }
    }

    /**
     * Swap equiped items.
     * @param {object} newItem - object of new card-item.
     * @param {string} playerName - target player's name.
     * @return {array} - Array of unequipped cards.
     */
    this.swapItems = function(newItem, playerName) {
        if (typeof newItem == "object" && typeof playerName == "string") {
            var currentItems;
            var oldItems;

            _players.forEach(function(player) {
                if (player.getName() == playerName) {
                    currentItems = player.getItems();

                    for(type in currentItems) {
                        if (type == newItem.class) {
                            currentItems[type].forEach(function(item) {
                                if (item.status == "active") {
                                    oldItems = currentItems[type].splice(currentItems[type].indexOf(item), 1);
                                    oldItems.forEach(function(item) {
                                        item.status = "disable";
                                    })
                                    newItem.status = "active";
                                    currentItems[type].push(newItem);
                                    return;
                                }
                            });
                            break;
                        }
                    }
                }
            });

            return oldItems;

        } else {
            throw "Error: can't swap items with wrong data";
        }
    }

    /**
     * Swap equiped items.
     * @param {object} item - object of card-item.
     * @param {string} playerName - target player's name.
     * @return {boolean} - is slot available.
     */
    this.checkSlot = function(item, playerName) {
        if (typeof item == "object" && typeof playerName == "string") {
            var currentItems;
            var isAvailable = true;

            _players.forEach(function(player) {
                if (player.getName() == playerName) {
                    currentItems = player.getItems();

                    for(type in currentItems) {
                        if (type == item.class) {
                            if (type == "oneHand") {
                                isAvailable = checkSlotStatus(currentItems, currentItems[type][0].class, "twoHands");
                            } else if (type == "twoHands") {
                                isAvailable = checkSlotStatus(currentItems, currentItems[type][0].class, "oneHand");
                            } else {
                                isAvailable = checkSlotStatus(currentItems, currentItems[type][0].class);
                            }

                            break;
                        }
                    }
                }
            });

            return isAvailable;

        } else {
            throw "Error: can't check slot with wrong data";
        }
    }
}
/**
 * Function define item slot status
 */
function checkSlotStatus(items, type, relatedType) {

    var count = 0;
    var status = true

    if (items[type].length == 0) { return status };

    if ((type == "oneHand" && relatedType == "twoHands") || (type == "twoHands" && relatedType == "oneHand")) {
        items["twoHands"].forEach(function(item) {
            if (item.status == "active") {
                status = false;
            }
        })
        items["oneHand"].forEach(function(item) {
            if (item.status == "active") {
                count++ ;
                if (count == 2 && relatedType == "twoHands") {
                    status = false;
                } else if (count == 1 && relatedType == "oneHand") {
                    status = false;
                }
            }
        })
    } else {
        items[type].forEach(function(item) {
            if (item.status == "active") {
                status = false;
            }
        })
    }

    return status;
}
