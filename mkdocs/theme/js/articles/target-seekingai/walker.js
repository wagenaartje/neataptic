function Walker(){
  this.x = START_X;
  this.y = START_Y;
  this.vx = 0;
  this.vy = 0;

  this.r = 10;

  this.angle = Math.random() * Math.PI * 2;
}

Walker.prototype = {
  /** Update the stats */
  update: function(){
    if(Math.random() > 0.5){
      this.angle += Math.random()* 2 -1;
    }

    // Calculate next position
    this.ax = Math.cos(this.angle);
    this.ay = Math.sin(this.angle);
    this.vx += this.ax;
    this.vy += this.ay;

    // Limit speeds to maximum speed
    this.vx = this.vx > MAX_SPEED/2 ? MAX_SPEED/2 : this.vx < -MAX_SPEED/2 ? -MAX_SPEED/2 : this.vx;
    this.vy = this.vy > MAX_SPEED/2 ? MAX_SPEED/2 : this.vy < -MAX_SPEED/2 ? -MAX_SPEED/2 : this.vy;

    this.x += this.vx;
    this.y += this.vy;

    // Limit position to width and height
    this.x = this.x >= WIDTH  ? WIDTH  : this.x <= 0 ? 0 : this.x;
    this.y = this.y >= HEIGHT ? HEIGHT : this.y <= 0 ? 0 : this.y;

    if(this.x == 0 || this.x == WIDTH){
      this.vx = -this.vx;
      this.angle += PI;
    }
    if(this.y == 0 || this.y == HEIGHT){
      this.vy = -this.vy;
      this.angle += PI;
    }
  },

  reset: function(){
    this.x = START_X;
    this.y = START_Y;
    this.vx = 0;
    this.vy = 0;

    this.angle = Math.random() * Math.PI * 2;
  },


  /** Display the walker on the field */
  show: function(){
    fill(0);
    ellipse(this.x, this.y, this.r*2);

    // Score radius
    noFill();
    stroke('lightgreen');
    strokeWeight(2);
    ellipse(this.x, this.y, SCORE_RADIUS*2);
    noStroke();
  },
};
