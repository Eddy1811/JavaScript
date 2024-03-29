// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe

console.log(joeInfo['cars'].length)

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.

joeInfo.bathrooms = 1
console.log(joeInfo.bathrooms)

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 

joeInfo.garage = true
console.log(joeInfo.garage)






const player1 = {
    firstName : "Vatira",
    lastName :"theGoat",
    age : 23
}

const player2 = {
    firstName : "Rise",
    lastName :"EnglishGoat",
    age : 21
}

const player3 = {
    firstName : "Atow",
    lastName :"theBelgiumGoat",
    age : 22
}



const game1 = {
    opponent: "Gentle Mates",
    teamPoints: 4,
    opponentPoints: 3
}

const game2 = {
    opponent: "BDS",
    teamPoints: 4,
    opponentPoints: 1
}

const game3 = {
    opponent: "Vitality",
    teamPoints: 4,
    opponentPoints: 2
}



const team = {
    players : [player1, player2, player3, {
        firstName : "Rise",
        lastName :"EnglishGoat",
        age : 25
    }],
    games : [game1,game2,game3],







addPlayer (firstName, lastName, age){
    const player = {
    firstName : firstName,
    lastName :lastName,
    age : age
    }
this.players.push(player)
},



addGame (opponent,teamPoints,opponentPoints){
    this.games.push(
        let = {
        opponent : opponent,
        teamPoints : teamPoints,
        opponentPoints : opponentPoints
        }
    )
},



teamPoints (){
    let totalPoints = 0
    let numberOfGames = this.games.length
    for (let i=0; i<numberOfGames; i++){
        totalPoints += this.games[i].teamPoints
    }
    return totalPoints
},



averageOpponentTeamPoints (){
    let totalPoints = 0
    let numberOfGames = this.games.length
    for (let i=0; i<numberOfGames; i++){
        totalPoints += this.games[i].opponentPoints
    }
    let averagePoint = totalPoints/this.games.length
    return averagePoint
},


findTheAncestor(){
    let maxAge = 0;
    for (let i=0; i < this.players.length; i++){
        if (this.players[i].age > maxAge){
            maxAge = this.players[i].age;
        }
    }
    return maxAge
}






}


team.addPlayer('Guigui','Besset',36);
team.addPlayer('Marcelline','Bernard',77);
team.addPlayer('Constance','Gogorian',24);


team.addGame('Cloud9',4,1)
team.addGame('Team liquid',4,0)
team.addGame('Team Secret',4,3)
console.log(team)


console.log(team.teamPoints())
console.log(team.averageOpponentTeamPoints())
console.log(team.findTheAncestor())


