var g = new game();

$(document).ready(function(e) {
	g.init();
	
	$('#canvas').mousedown(function(e){
		g.player.shoot(e);
	});
});