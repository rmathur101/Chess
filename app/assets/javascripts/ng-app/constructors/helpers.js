var LETTER_NOTATION = ["a", "b", "c", "d", "e", "f", "g", "h"];
var NUMBER_NOTATION = ['1', '2', '3', '4', '5', '6', '7', '8'];

function convertCoordinatesToNotation(x, y){
	var notation = LETTER_NOTATION[x] + NUMBER_NOTATION[y]
	return notation;
};