var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b',
	$c_min = '#0c5636',
	$c_max = '#27c681';



console.log( "D3 version: " + d3.version );

// options
var width = 600;
var height = 500;

var margins = 20;
var workWidth = width - (margins * 2);
var barHeight = 20;
var barDistance = 2;



// data
var dataArray = [20, 40, 314, 200, 100, 280, 12, 19, 49, 80, 60, 212];
var ticks = 5;

d3.select("h1.title")
	.text("D3 JS testing");

d3.select(".head-text")
	.append("p")
	.style("color", $c_01)
	.text("Practice and learnng 3-rd version of d3");

var widthScale = d3.scale.linear()
	.domain([0, d3.max(dataArray)])
	.range([0, width]);

var colorScale = d3.scale.linear()
	.domain([0, d3.max(dataArray)])
	.range([ $c_min, $c_max ]);

var axis = d3.svg.axis()
	.ticks(ticks)
	.scale(widthScale);

var canvas = d3.select(".work")
	.append("svg")
	.attr("width", width + 2*margins)
	.attr("height", height)
	.append("g")
	.attr("transform", "translate(" + margins + ", " + margins + ")");


var bars = canvas.selectAll("rect")
	.data(dataArray)
	.enter()
		.append("rect")
		.attr("width", function(d) { return widthScale(d); })
		.attr("height", barHeight)
		.attr("fill", function(d) { return colorScale(d); })
		.attr("y", function(d, i) { return (barHeight + barDistance) * i });

canvas.append("g")
	.attr("transform", "translate(0, " + (dataArray.length*barHeight + dataArray.length*barDistance) + ")")
	.attr("class", "axis-bottom")
	.call(axis);



