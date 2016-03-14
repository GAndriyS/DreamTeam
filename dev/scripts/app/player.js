function Player(config) {
    var _name = config.name;
    var _gender = config.gender;
    var _lvl = 1;
    var _power = 1;
    var _buffs = [];
    var _debuffs = [];
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
}

Player.prototype.getName() {
    return _name;
}

Player.prototype.getGender() {
    return _gender;
}

Player.prototype.getLvl() {
    return _lvl;
}

Player.prototype.getLvl() {
    return _lvl;
}
