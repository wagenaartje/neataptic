var game;
var evol;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$( document ).ready(function() {
  evol = new Evolution({
    size: 50,
    mutationRate: 0.05,
    networkSize: [6,10,1],
    mutationMethod: [Mutate.MODIFY_RANDOM_BIAS, Mutate.MODIFY_RANDOM_WEIGHT],
    crossOverMethod: [Crossover.UNIFORM, Crossover.AVERAGE],
    selectionMethod: [Selection.FITNESS_PROPORTIONATE],
    elitism: 5,
    fitnessFunction: fitness,
  });

  game = new Runner(".interstitial-wrapper");
  startGame();
  customLoop();
});

async function fitness(network){
  game.restart();
  while(game.playing){
    if(game.horizon.obstacles.length > 0){
      var speed = game.currentSpeed / Runner.config.MAX_SPEED;
      var dinoY = game.tRex.yPos / Runner.defaultDimensions.HEIGHT;
      var distance = (game.horizon.obstacles[0].xPos - game.tRex.xPos) / Runner.defaultDimensions.WIDTH;
      var obstY = game.horizon.obstacles[0].yPos / Runner.defaultDimensions.HEIGHT;
      var obstacleWidth = (game.horizon.obstacles[0].typeConfig.width * game.horizon.obstacles[0].size) / Runner.defaultDimensions.WIDTH;
      var obstacleHeight = game.horizon.obstacles[0].typeConfig.height / Runner.defaultDimensions.HEIGHT;

      var response = network.activate([
        speed,
        dinoY,
        distance,
        obstY,
        obstacleWidth,
        obstacleHeight
      ]);
      responseToKey(response);

   }
   await sleep(100);
  }
  return game.distanceRan;
}

function startGame(){
  game.loadSounds();
  game.playing = true;
  game.update();
  game.playSound(game.soundFx.BUTTON_PRESS);
  game.tRex.startJump(game.currentSpeed);
}

/**
 * Converts a creatures' response to useable key functions for google.js
 * @param {string} response
 */
function responseToKey(response){
  if(response > 0.55){
    // Jump keydown
    if (!game.tRex.jumping && !game.tRex.ducking) {
        game.playSound(game.soundFx.BUTTON_PRESS);
        game.tRex.startJump(game.currentSpeed);
    } else if (game.tRex.ducking){
      game.tRex.speedDrop = false;
      game.tRex.setDuck(false);
      game.playSound(game.soundFx.BUTTON_PRESS);
      game.tRex.startJump(game.currentSpeed);
    }
  } else if(response < 0.45){
    // Duck keydown
    if (game.tRex.jumping) {
        // Speed drop, activated only when jump key is not pressed.
        game.tRex.setSpeedDrop();
    } else if (!game.tRex.jumping && !game.tRex.ducking) {
        // Duck.
        game.tRex.setDuck(true);
    }
  } else {
    if(game.tRex.jumping){
      game.tRex.endJump();
    } else if (game.tRex.ducking){
      game.tRex.speedDrop = false;
      game.tRex.setDuck(false);
    }

  }
}

drawGeneration = function(){
  game.distanceMeter.draw(-10, 12, true);
  game.distanceMeter.draw(-9, 13, true);
  game.distanceMeter.draw(-8, 14, true);
  game.distanceMeter.draw(-6, Math.floor(evol.generation / 10), true);
  game.distanceMeter.draw(-5, evol.generation % 10, true);
}

customLoop = async function(){
  var notFinished = true;
  while(notFinished){
    for(var i in evol.population){
      await new Promise(function(resolve, reject){
        var score = evol.fitnessFunction(evol.population[i]);
        resolve(score);
      }).then(function(value){
        evol.scores.push(value);
      });
    }
    game.distanceMeter.highScore = ["10", "11", "", "0", "0", "0", "0", "0"];
    if(evol.getAverage() > 5000) notFinished = false;
    evol.select();
    evol.crossOver();
    evol.mutate();
    evol.replace();
  };
}
