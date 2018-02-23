
unicorns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']

barn = []
pasture = []
meadow = []
trails = []

ranch = {barnLocation: barn,
         pastureLocation: pasture,
         meadowLocation: meadow,
         trailsLocation: trails
}

ranch.barnLocation = unicorns;

// function to track the movement from point a to b
function moveUnicorn (unicornName, originLocation, destination) {
  
  // check if unicorn is in specified location, code in v2
  
  var unicornPosition;
  
  for (var i = 0; i < originLocation.length; i++) {
    if (originLocation[i] == unicornName) {
      unicornPosition = i
      break;
    }
  }
  
  originLocation.splice(unicornPosition, 1)
  destination.push(unicornName)
  
}

// function to handle owners request of unicorns at a given location
function status (locationStatus) {
  
  console.log(`These are the unicorns in ${locationStatus}: ${ranch[locationStatus]}`)
  
}

moveUnicorn('D', ranch.barnLocation, ranch.pastureLocation)
// console.log(ranch.barnLocation)
// console.log(ranch.pastureLocation)
moveUnicorn('I', ranch.barnLocation, ranch.pastureLocation)
// console.log(ranch.barnLocation)
// console.log(ranch.pastureLocation)
status('barnLocation')
status('meadowLocation')
status('pastureLocation')
status('trailsLocation')