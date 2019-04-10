function weapon() {
	this.x;
	this.y;
	this.r;
	this.yDirection;
	this.xDirection;
	this.speed;
	
	this.init = function() {
		this.r = 10;
		this.yDirection = -1;
		this.xDirection = 1;
		this.speed = 400;
	}
		
	this.draw = function(ctx) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'pink';
		ctx.fill();
		ctx.lineWidth = 1;
		ctx.strokeStyle = 'red';
		ctx.stroke();
	}
	
	this.update = function(modifier) {
		this.x += this.xDirection*this.speed*modifier;
		this.y += this.yDirection*this.speed*modifier;
	}
}