function setup(){
		createCanvas (window.innerWidth, window.innerHeight)
		fill (0)
}
	var width= window.innerWidth ;
	var height= window.innerHeight ;
	var radius=30;
	var x= radius+ Math.random()*(width-2*radius)
	var y= radius+ Math.random()*(height-2*radius)
function draw() {
		background="black";
		ellipse (200,200,radius*2, radius*2);
		
}

function ballmove (){
	x=x+vx;
	y+=vy
}