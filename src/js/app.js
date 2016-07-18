var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b';

console.log( "D3 version: " + d3.version );


d3.select("p.test")
	.text("This text placed here with d3");

d3.select(".work")
	.append("p")
	.text("New text here");