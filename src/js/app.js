var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b';

console.log( "D3 version: " + d3.version );

var width = 400;
var height = 200;
var barHeight = 20;

var dataArray = [20, 40, 50, 20, 12, 19, 49];

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

var bars = canvas.selectAll("rect")
	.data(dataArray)
	.enter()
		.append("rect")
		.attr("width", function(d) { return d; })
		.attr("height", barHeight)
		.attr("y", function(d, i) { return (barHeight + 2) * i });



