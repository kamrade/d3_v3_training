var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b',
	$c_min = '#0c5636',
	$c_max = '#27c681';

console.log( "D3 version: " + d3.version );

var width = 500,
	height = 500;

var data = [

	{ x: 10, y: 20 },
	{ x: 140, y: 260 },
	{ x: 250, y: 270 }

];

var canvas = d3.select(".work").append("svg")
	.attr("height", height)
	.attr("width", width);

var group = canvas.append("g")
	.attr("tranform", "translate(100, 100)");

var line = d3.svg.line()
	.x(function(d) {
		return d.x;
	})
	.y(function(d) {
		return d.y;
	});

group.selectAll("path")
	.data([data])
	.enter()
		.append("path")
		.attr("d", line)
		.attr("fill", "none")
		.attr("stroke", "#333")
		.attr("stroke-width", 5);




