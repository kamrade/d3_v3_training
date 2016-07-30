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

var width = 800,
	height = 600;

var canvas = d3.select(".work").append("svg")
	.attr("height", height)
	.attr("width", width)
	.append("g")
		.attr( "transform", "translate(50, 50)" );

var pack = d3.layout.pack()
	.size([ width, height - 50 ])
	.padding(10);

d3.json("mydata2.json", function(data) {

	var nodes = pack.nodes(data);
	var node = canvas.selectAll(".node")
		.data(nodes)
		.enter()
		.append("g")
			.attr("class", "node")
			.attr("transform", function(d) {
				return "translate(" + d.x + ", " + d.y + ")";
			});

	node.append("circle")
		.attr("r", function(d) {
			return d.r;
		})
		.attr("fill", function(d){
			return d.children ? $c_bg_light : $c_bg_dark_selected
		})
		.attr("opacity", 0.25)
		.attr("stroke", $c_border_light)
		.attr("stroke-width", 2);

	node.append("text")
		.text(function(d){
			return d.children ? "" : d.name ;
		});

});