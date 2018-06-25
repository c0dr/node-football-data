var rp = require('request-promise');
var API_URL = "https://api.football-data.org";

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

FootballData.prototype.getCompetition = function (competitionId) {
  return rp(this.getRequest(`/v1/competitions/${competitionId}`));
}

FootballData.prototype.getCompetitions = function (season) {
  var config = this.getRequest('/v1/competitions/');
  if (season) {
    config.qs = {season: season};
  }
  return rp(config);
}

FootballData.prototype.getTeamsInCompetition = function (competitionId) {
  return rp(this.getRequest(`/v1/competitions/${competitionId}/teams`));
}

FootballData.prototype.getLeagueTable = function (competitionId) {
  return rp(this.getRequest(`/v1/competitions/${competitionId}/leagueTable`));
}

FootballData.prototype.getLeagueFixtures = function (competitionId) {
  return rp(this.getRequest(`/v1/competitions/${competitionId}/fixtures`));
}

FootballData.prototype.getLeagueFixturesInTimeFrame = function (competitionId, timeFrame) {
  var config = this.getRequest(`/v1/competitions/${competitionId}/fixtures`);
  config.qs = {timeFrame: timeFrame}
  return rp(config);
}

FootballData.prototype.getFixtures = function () {
  return rp(this.getRequest(`/v1/fixtures`));
}

FootballData.prototype.getFixture = function (fixtureId) {
  return rp(this.getRequest(`/v1/fixtures/${fixtureId}`));
}

FootballData.prototype.getTeam = function (teamId) {
  return rp(this.getRequest(`/v1/teams/${teamId}`));
}

FootballData.prototype.getTeamPlayers = function (teamId) {
  return rp(this.getRequest(`/v1/teams/${teamId}/players`));
}


FootballData.prototype.getTeamFixtures = function (teamId) {
  return rp(this.getRequest(`/v1/teams/${teamId}/fixtures`));
}

module.exports = FootballData;
