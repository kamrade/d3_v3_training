var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b';

console.log( "D3 version: " + d3.version );

var width = 500;
var height = 500;

d3.select("h1.title")
	.text("D3 JS testing");

d3.select(".head-text")
	.append("p")
	.style("color", $c_01)
	.text("Practice and learnng 3-rd version of d3");

