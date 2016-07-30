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
	.attr("width", width)
	.append("g")
		.attr( "transform", "translate(50, 50)" );

var tree = d3.layout.tree()
	.size([ 400, 400 ]);


d3.json("mydata.json", function(data) {

	var nodes = tree.nodes( data );
	var links = tree.links( nodes );

	var node = canvas.selectAll(".node")
		.data(nodes)
		.enter()
		.append("g")
			.attr("class", "node")
			.attr("transform", function(d) {
				return "translate( " + d.y + ", " + d.x + ")";
			});

	node.append("circle")
		.attr("r", 5)
		.attr("fill", $c_border_light);

	node.append("text")
		.text(function(d) {
			return d.name;
		})
		.attr();

	var diagonal = d3.svg.diagonal()
		.projection( function(d) {
			return [ d.y, d.x ];
		});

	canvas.selectAll(".link")
		.data(links)
		.enter()
		.append("path")
			.attr("class", "link")
			.attr("fill", "none")
			.attr("stroke", $c_border_light)
			.attr("d", diagonal);

});
