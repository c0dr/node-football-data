var FootballData = require('./lib.js');
var fd = FootballData('');
fd.getLeagueFixtures(424).then(function(res) {
  var fixtures = res;
  console.log(fixtures.fixtures[0].homeTeamName + "vs" + fixtures.fixtures[0].awayTeamName);
}).catch(function(err) {
  console.log(err);
})
