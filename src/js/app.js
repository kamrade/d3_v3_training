var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b',
	$c_min = '#0c5636',
	$c_max = '#27c681';

console.log( "D3 version: " + d3.version );

var width = 500,
	height = 500;


var canvas = d3.select(".work").append("svg")
	.attr("height", height)
	.attr("width", width);

var group = canvas.append("g")
	.attr( "transform" , "translate(100, 100)" );

var r = 100;
var p = Math.PI * 2;

var arc = d3.svg.arc()
	.innerRadius(r - 20)
	.outerRadius(r)
	.startAngle(0)
	.endAngle(p - 1);

group.append("path")
	.attr("d", arc);




