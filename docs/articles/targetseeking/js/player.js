function Player(genome){
  this.x = START_X;
  this.y = START_Y;
  this.vx = 0;
  this.vy = 0;
  this.r = 6;

  this.brain = genome;
  this.brain.score = 0;

  players.push(this);
}

Player.prototype = {
  /** Update the stats */
  update: function(){
    var input = this.detect();
    var output = this.brain.activate(input);

    var moveangle = output[0] * 2 * PI;

    // Calculate next position
    this.ax = Math.cos(moveangle);
    this.ay = Math.sin(moveangle);
    this.vx += this.ax;
    this.vy += this.ay;

    // Limit speeds to maximum speed
    this.vx = this.vx > MAX_SPEED ? MAX_SPEED : this.vx < -MAX_SPEED ? -MAX_SPEED : this.vx;
    this.vy = this.vy > MAX_SPEED ? MAX_SPEED : this.vy < -MAX_SPEED ? -MAX_SPEED : this.vy;

    this.x += this.vx;
    this.y += this.vy;

    // Limit position to width and height
    this.x = this.x >= WIDTH  ? WIDTH  : this.x <= 0 ? 0 : this.x;
    this.y = this.y >= HEIGHT ? HEIGHT : this.y <= 0 ? 0 : this.y;

    if(this.x == 0 || this.x == WIDTH) this.vx = -this.vx;
    if(this.y == 0 || this.y == HEIGHT) this.vy = -this.vy;

    this.score();
  },

  /** Calculate fitness of this players genome **/
  score: function(){
    var dist = distance(this.x, this.y, walker.x, walker.y);
    if(!isNaN(dist) && dist < SCORE_RADIUS){
      this.brain.score += SCORE_RADIUS - dist;
    }

    // Replace highest score to visualise
    highestScore = this.brain.score > highestScore ? this.brain.score : highestScore;
  },

  /** Display the player on the field, parts borrowed from the CodingTrain */
  show: function(){
    // Draw a triangle rotated in the direction of velocity
    var angle = angleToPoint(this.x, this.y, this.x + this.vx, this.y + this.vy) + HALF_PI;
    var color = activationColor(this.brain.score, highestScore);

    push();
    translate(this.x, this.y);
    rotate(angle);

    fill(color);
    beginShape();
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape(CLOSE);

    pop();
  },

  /** Detect and normalize inputs */
  detect: function(){
    var dist = Math.sqrt(this.x, this.y, walker.x, walker.y) / Math.sqrt(WIDTH**2 + HEIGHT**2);
    var targetAngle = angleToPoint(this.x, this.y, walker.x, walker.y) / TWO_PI;
    var vx = (this.vx + MAX_SPEED) / MAX_SPEED;
    var vy = (this.vy + MAX_SPEED) / MAX_SPEED;
    var tvx = (walker.vx + MAX_SPEED) / MAX_SPEED;
    var tvy = (walker.vy + MAX_SPEED) / MAX_SPEED;

    // NaN checking
    targetAngle = isNaN(targetAngle) ? 0 : targetAngle;
    dist = isNaN(dist) ? 0 : dist;

    return [vx, vy, tvx, tvy, targetAngle, dist];
  },
};
