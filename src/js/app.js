var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b';

console.log( "D3 version: " + d3.version );

var width = 400;
var height = 200;

d3.select("h1.title")
	.text("D3 JS testing");

d3.select(".head-text")
	.append("p")
	.style("color", $c_01)
	.text("Practice and learnng 3-rd version of d3");

var canvas = d3.select(".work")
	.append("svg")
	.attr("width", width)
	.attr("height", height);

var circle = canvas.append("circle")
	.attr("cx", width/2)
	.attr("cy", height/2)
	.attr("r", (width+height)/2/4)
	.attr("fill", $c_02);

var rect = canvas.append("rect")
	.attr("width", 100)
	.attr("height", 50);

var line = canvas.append("line")
	.attr("x1", 0)
	.attr("y1", 100)
	.attr("x2", 400)
	.attr("y2", 400)
	.attr("stroke", $c_02)
	.attr("stroke-width", 5);