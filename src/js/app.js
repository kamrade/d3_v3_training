var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b',
	$c_min = '#0c5636',
	$c_max = '#27c681';

console.log( "D3 version: " + d3.version );

var width = 500,
	height = 500;

d3.csv("/mydata.csv", function(data) {
	
	var canvas = d3.select(".work").append("svg")
		.attr("width", width)
		.attr("height", height);

	canvas.selectAll("rect")
		.data(data)
		.enter()
			.append("rect")
			.attr("width", function(d) {
				return d.age * 5;
			})
			.attr("height", 20)
			.attr("y", function(d, i) {
				return i * 22;
			})
			.attr("fill", $c_01);

	canvas.selectAll("text")
		.data(data)
		.enter()
			.append("text")
			.attr("fill", "white")
			.attr("y", function(d, i) {
				return i * 22 + 14;
			})
			.attr("x", 4)
			.text(function(d) {
				return d.name;
			});

});


