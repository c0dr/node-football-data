var rp = require('request-promise');
var API_URL = "http://api.football-data.org";

function FootballData(apiToken) {
  if(!(this instanceof FootballData))
    return new FootballData(apiToken);
  this.apiToken = apiToken;
}

FootballData.prototype.getRequest = function (path) {
  return {
    uri: API_URL + path,
    headers: {
        'X-Auth-Token': this.apiToken
    },
    json: true
  };
}

FootballData.prototype.getSeasons = function () {
  return rp(this.getRequest('/v1/soccerseasons/'));
}

FootballData.prototype.getTeamsInSeason = function (seasonId) {
  return rp(this.getRequest(`/v1/soccerseasons/${seasonId}/teams`));
}

FootballData.prototype.getLeagueTable = function (seasonId) {
  return rp(this.getRequest(`/v1/soccerseasons/${seasonId}/leagueTable`));
}

FootballData.prototype.getLeagugeFixtures = function (seasonId) {
  return rp(this.getRequest(`/v1/soccerseasons/${seasonId}/fixtures`));
}

FootballData.prototype.getFixtures = function () {
  return rp(this.getRequest(`/v1/fixtures`));
}

FootballData.prototype.getFixture = function (fixtureId) {
  return rp(this.getRequest(`/v1/fixtures/${seasonId}`));
}

FootballData.prototype.getTeam = function (teamId) {
  return rp(this.getRequest(`/v1/teams/${seasonId}`));
}

FootballData.prototype.getTeamPlayers = function (teamId) {
  return rp(this.getRequest(`/v1/teams/${seasonId}/players`));
}


FootballData.prototype.getTeamFixtures = function (teamId) {
  return rp(this.getRequest(`/v1/teams/${seasonId}/fixtures`));
}

module.exports = FootballData;
