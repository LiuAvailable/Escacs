class Team{
    name;
    players = [];

    constructor(team){
        this.name = team.name;
        team.integrants.forEach(integrant => {
            this.players.push(integrant.nom);
        });
    }
}
module.exports = Team;