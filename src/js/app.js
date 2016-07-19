// DOM elements < data elements (enter)
// DOM elements > data elements (exit)
// DOM elements = data elements (update)

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

var circle01 = canvas.append("circle")
	.attr("cx", 40)
	.attr("cy", 40)
	.attr("r", 20);

var circle02 = canvas.append("circle")
	.attr("cx", 140)
	.attr("cy", 140)
	.attr("r", 20);

var circles = canvas.selectAll("circle")
	.data(data)
	.attr("fill", $c_03)
	.exit()
		.attr("fill", $c_01);
	// .attr("fill", $c_02) // update selection
	// .enter()
	// 	.append("circle") // enter selection
	// 	.attr("cx", width/2)
	// 	.attr("cy", height/2)
	// 	.attr("fill", $c_01)
	// 	.attr("r", (height+width)/20);
