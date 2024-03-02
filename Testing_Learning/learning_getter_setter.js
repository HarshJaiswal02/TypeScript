// class Game {

//   constructor(gameName, gameId) {
//     this.gameName = gameName;
//     this.gameId = gameId;
//   }
// }
// let user = new Game("Gta", 1234);
// console.log(user.gameName);

class Game {
  constructor(gameName, gameId) {
    this.gameName = gameName;
    this.gameId = gameId;
  }

  set gameName(value) {
    //  converting it to upper case
    this._gameName = value.toUpperCase();
  }
  get gameName() {
    return this._gameName;
  }

  set gameId(value) {
    this._gameId = value + "@unknown";
  }

  get gameId() {
    return this._gameId + "#get";
  }
}

let user = new Game("Gta", 1234);
console.log(user.gameName);
console.log(user.gameId);
