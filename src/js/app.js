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

var colorScale = d3.scale.ordinal()
	.range([ 
		$c_bg_light,
		$c_border_light,
		$c_text_light_01,
		$c_bg_dark_selected,
		$c_bg_dark_main
	]);

console.log( "D3 version: " + d3.version );

var width = 500,
	height = 500,
	r = 150,
	data = [10, 50, 80, 28, 450];


var canvas = d3.select(".work").append("svg")
	.attr("height", height)
	.attr("width", width);

var group = canvas.append("g")
	.attr("transform", "translate(" + width/2 + "," + height/2 + ")");

var arc = d3.svg.arc()
	.innerRadius(r/4)
	.outerRadius(r);

var pie = d3.layout.pie()
	.value(function(d) {
		return d;
	});

var arcs = group.selectAll(".arc")
	.data(pie(data))
	.enter()
		.append("g")
		.attr("class", "arc");

arcs.append("path")
	.attr("d", arc)
	.attr("fill", function(d) {
		return colorScale(d.data);
	});

arcs.append("text")
	.attr("transform", function(d) {
		return "translate(" + arc.centroid(d) + ")" ;
	})
	.attr("text-anchor", "middle")
	.attr("font-size", ".5em")
	.text(function(d) {
		return d.data;
	});




