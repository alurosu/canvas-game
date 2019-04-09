function player() {
	this.x;
	this.y;
	this.r;
	this.yDirection;
	this.xDirection;
	this.speed;
	
	this.init = function(x,y) {
		this.x = x;
		this.y = y;
		this.r = 20;
		this.yDirection = 1;
		this.xDirection = 1;
		this.speed = 200;
	}
	
	this.draw = function(ctx) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'green';
		ctx.fill();
		ctx.lineWidth = 4;
		ctx.strokeStyle = '#003300';
		ctx.stroke();
	}
	
	this.update = function(modifier, xMin, xMax, yMin, yMax) {
		this.x += this.xDirection*this.speed*modifier;
		if (this.x-this.r<xMin) {
			this.xDirection *= -1;
			this.x = xMin+this.r;
		} else if (this.x+this.r>xMax) {
			this.xDirection *= -1;
			this.x = xMax-this.r;
		}
		
		this.y += this.yDirection*this.speed*modifier;
		if (this.y-this.r<yMin) {
			this.yDirection *= -1;
			this.y = yMin+this.r;
		} else if (this.y+this.r>yMax) {
			this.yDirection *= -1;
			this.y = yMax-this.r;			
		}
	}
}