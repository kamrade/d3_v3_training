var $c_01 = '#21b1e0',
	$c_02 = '#1abc9c',
	$c_03 = '#1d7e6b',
	$c_min = '#0c5636',
	$c_max = '#27c681';

console.log( "D3 version: " + d3.version );

var data = [ 44, 10, 20, 30, 40, 50 ];

console.log( data.shift() );
console.log( data );
console.log( data.sort(d3.descending) );
console.log( d3.min(data) );
console.log( d3.max(data) );
console.log( d3.extent(data) );
console.log( d3.sum(data) );
console.log( d3.mean(data) );
console.log( d3.median(data) );
console.log( d3.shuffle(data) );