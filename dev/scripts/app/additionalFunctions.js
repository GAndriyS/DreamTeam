var treasures =
[{name: "magic_nails", class:"oneShot", play:"both"},
{name: "pancakes", class:"lvlUp", action:[{lvlUp:1}], play:"both"},
{name: "hero_gauntlet", class:"oneHand", worth:600, "limit":"hero", play:"none"},
{name: "axe_bass", class:"twoHands", worth:500,play:"none"}]
var doors =
[{name: "fire_wolf", class:"monster", reward:2},
{name: "bufo", class:"monster", reward:4},
{name: "the_lump", class:"curse", lvl:1},
{name: "flippinAwesome", class:"battleShot", monster:10, reward:2}];
var heroes = [{name:"BMO"}, {name:"marceline"}, {name:"fine"}]

/**
 * Function define item slot status
 * @return {boolean} is slot available.
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

/**
 * Find Player By Name
 * @return {object} player.
 */
function findPlayer(allPlayers, playerName) {
    var target;
    allPlayers.forEach(function(player) {
        if (player.getName() == playerName) {
            target = player;
        }
    });
    return target;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns a array of random unique integer between min (inclusive) and max (exclusive)
 */
function getRandomArray(min, max) {
    var arr = [];
    var pool = [];
    var randomNumber;
    for (var i = 0; i < max; i++) {
        pool[i] = i;
    }
    while(pool.length > 0) {
        randomNumber = getRandomInt(0, pool.length-1);
        arr.push(pool[randomNumber]);
        pool.splice(randomNumber, 1);
    }
    return arr;
}

/**
 * Returns promise of get template request
 */
function getTemplate(name) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', "scripts/templates/"+ name +".html");
        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) return;
            if (xhr.status != 200) {
                reject(Error(xhr.status + ': ' + xhr.statusText));
                return;
            }
            resolve(xhr.responseText);
        }
        xhr.send();
    });
}

/**
 * Returns card and remove from array
 */
function returnCard(arr, name) {
    var n;
    arr.forEach(function(item, index) {
        if (item.name == name) {
            n = index;
        }
    });
    return arr.splice(n, 1);
}
