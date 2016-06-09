# ⚽️ node-football-data

This is a simple wrapper around the football-data.org API for NodeJS. It is only a very rough first version created on a Sunday, so maybe take it with a pinch of salt :)

(Please note, that this is for fooball, not handball with an egg as a ball :-))


## Installation

`````
npm install node-football-data --s
`````


## Example usage

````javascript
//Initialize
var FootballData = require('node-football-data');
var fd = FootballData('APIKEY');

//Get the first match of the euros
fd.getLeagugeFixtures(424).then(function(res) {
  var fixtures = res;
  console.log(fixtures.fixtures[0].homeTeamName + " vs " + fixtures.fixtures[0].awayTeamName);
}).catch(function(err) {
  console.log(err);
})

````

## License

MIT
