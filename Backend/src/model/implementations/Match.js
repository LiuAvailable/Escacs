const Team = require('./Team');

class Match{
    limit;
    connection = -1;
    teams = [];
    players = []

    constructor(limit, teams){ 
        this.limit = limit;
        this.setTeams(teams);
    }
    
    setTeams(teams){
        teams.forEach(team => {
            this.teams.push(new Team(team));
            team.integrants.forEach(integrant => {
                this.players.push(integrant.nom);
            });
        });
        console.log(this.teams)
        console.log(this.players)
    }
    newConnection(){
        this.connection++;
        return this.players[this.connection];
    }
    
}

module.exports = Match;