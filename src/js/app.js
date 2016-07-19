var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b',
	$c_min = '#0c5636',
	$c_max = '#27c681';

console.log( "D3 version: " + d3.version );

var data = [10]
	width = 500,
	height = 500;

var canvas = d3.select(".work")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

var circle = canvas.append("circle")
	.attr("cx", 100)
	.attr("cy", 100)
	.attr("r", 25)
	.style("transition", "ease .3s all");

circle.transition()
	.duration(1500)
	.delay(2000)
	.attr("cx", 400)
	.each("start", function() { d3.select(this).attr("fill", "blue") })
	.each("end", function() { d3.select(this).attr("fill", "red") })
	.transition()
	.attr("cy", 300)
	.attr("cx", 100);