var player = new Player({
    name: "Rich",
    gender: "male"
});

var playerManager = new PlayerManager();

playerManager.addPlayer({name: "Andriy", gender: "male"});
playerManager.addPlayer({name: "Ira", gender: "female"});
playerManager.addPlayer({name: "Helena", gender: "female"});

var p = playerManager.getPlayers();

var card1 = {
    name: "curse1",
    buff: {
        effect: "decrease power"
    }
}

var card2 = {
    name: "curse2",
    buff: {
        effect: "decrease lvl"
    }
}
