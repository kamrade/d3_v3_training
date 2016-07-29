var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b',
	$c_min = '#0c5636',
	$c_max = '#27c681';

var $c_white = '#fff',
	$c_bg_light = '#f5f8fd',
	$c_border_light = '#d8e1ea',
	$c_text_light_01 = '#778796',
	$c_bg_dark_selected = '#555e75',
	$c_bg_dark_main = '#383f52';

console.log( "D3 version: " + d3.version );

var width = 500,
	height = 500;

var canvas = d3.select(".work").append("svg")
	.attr("height", height)
	.attr("width", width);

var diagonal = d3.svg.diagonal()
	.source({ x: 10, y: 10 })
	.target({ x: 300, y: 200 });
	
canvas.append("path")
	.attr("fill", "none")
	.attr("stroke", "black")
	.attr("d", diagonal);
