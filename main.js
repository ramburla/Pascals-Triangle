'use strict';
var pascalResponse = require('./pascalsTriangle.js');
//  'n' number of rows in Pascals Triangle
var n=10;
// calling pascalTriangle function to get triangle results
var pascal = pascalResponse.pascalTriangle(n);    
	// Display the data into row by row.
	for (var row = 0; row < pascal.length; row += 1) {
		console.log(pascal[row].join(' '));
	}