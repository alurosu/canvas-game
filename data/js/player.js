function player() {
	this.x;
	this.y;
	
	this.init = function(x,y) {
		this.x = x;
		this.y = y;
	}
	
	this.draw = function(ctx) {
		ctx.clearRect(0, 0, cWidth, cHeight);
		ctx.fillStyle = "#000";
		ctx.font = "16px Arial";
		ctx.fillText("w: " + cWidth + " h: " + cHeight + ", fps: " + this.fps, 32, 32);
	}
	
	this.update = function(modifier) {
	}
}