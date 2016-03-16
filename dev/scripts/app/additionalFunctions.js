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
