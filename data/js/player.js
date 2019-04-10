function player() {
	this.x;
	this.y;
	this.r;
	this.yDirection;
	this.xDirection;
	this.speed;
	this.weapon = new weapon();
	
	this.init = function(x,y) {
		this.x = x;
		this.y = y;
		this.r = 20;
		this.yDirection = 0;
		this.xDirection = 1;
		this.speed = 0;
		
		this.weapon.init();
	}

	this.draw = function(ctx) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'yellow';
		ctx.fill();
		ctx.lineWidth = 4;
		ctx.strokeStyle = 'teal';
		ctx.stroke();
		
		this.weapon.draw(ctx);
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
		
		this.weapon.update(modifier);
	}

	this.shoot = function(e) {
		distance = Math.sqrt((e.clientY-this.y)*(e.clientY-this.y) + (e.clientX-this.x)*(e.clientX-this.x));
		this.weapon.xDirection = (e.clientX-this.x)/distance;
		this.weapon.yDirection = (e.clientY-this.y)/distance;
		
		this.weapon.x = this.x+this.r*this.weapon.xDirection;
		this.weapon.y = this.y+this.r*this.weapon.yDirection;
	}
}