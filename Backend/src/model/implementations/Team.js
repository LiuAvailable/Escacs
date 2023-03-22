class Team{
    name;
    integrants = [];

    constructor(team){
        this.name = team.name;
        team.integrants.forEach(integrant => {
            this.integrants.push(integrant.nom);
        });
    }
}
module.exports = Team;