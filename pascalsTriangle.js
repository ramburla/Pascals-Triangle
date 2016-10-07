'use strict';

module.exports = {
   pascalTriangle: pascalTriangle 
};
// This function builds Pascals Triangle.
function pascalTriangle(rows){
	// The pascal will be an array of rows and each row will be an array.
	var pascal = [];
	// Fill in the pascal array using Pascal's triangle formula.
	for (var row = 0; row < rows; row += 1) {
		pascal.push([]);
		for (var column = 0; column <= row; column += 1) {
			if (column === 0 || column === row) {
				pascal[row][column] = 1;
			} else {
				pascal[row][column] = pascal[row-1][column-1] + pascal[row-1][column];
			}
		}
	}
	return pascal;	
}