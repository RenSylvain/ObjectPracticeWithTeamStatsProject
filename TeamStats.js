let team = {
  _players: [],
  _games: [],
  get players(){return this._players},
  get games(){return this._games},
  addPlayer: function (firstName, lastName, age) {
    let player = {};
      player.firstName = firstName;
      player.lastName = lastName;
      player.age = age;
    this.players.push(player);
  },
  addGame: function (oppsName, teamsPoints, oppsPoints){
    let game = {};
    game.opponent = oppsName;
    game.teamPoints = teamsPoints;
    game.opponentPoints = oppsPoints;
    this.games.push(game);
  }
}

team.addPlayer('Steph','Curry', 28);
team.addPlayer('Lisa','Leslie', 44);
team.addPlayer('Bugs','Bunny', 76);

team.addGame('Phoenix', 32, 21);
team.addGame('Utah', 11, 27);
team.addGame('China', 78, 2);


team.players.push({firstName:'Tyler', lastName:'Coller',age:17});
team.players.push({firstName:'Sam', lastName:'Toll',age:14});
team.players.push({firstName:'Kennith', lastName:'Fozz',age:18});

team.games.push({opponent:'Denver', teamPoints:32,opponentPoints:22});
team.games.push({opponent:'LA', teamPoints:12,opponentPoints:19});
team.games.push({opponent:'Washington', teamPoints:19,opponentPoints:9});


// test after last step step 9
console.log(team.games);

// test after step 7
// console.log(team.players);

// test after step 6
// team.addPlayer('bob','segar', 45);
// console.log(team.players);

// test after step 4
// console.log(team.games);

// test after step 3
// console.log(team.players);

