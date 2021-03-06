function convertCoordinatesToNotation(x, y){
	var notation = LETTER_NOTATION[x] + NUMBER_NOTATION[y]
	return notation;
};

function convertNotationToCoordinates(notation) {
	var letter = notation[0];
	var number = notation[1];
	var coordinates = {x: undefined, y: undefined}
	for (var i = 0; i < 8; i++){
		if (letter == LETTER_NOTATION[i]){
			coordinates.x = i;
		};
	 	if (number == NUMBER_NOTATION[i]){
			coordinates.y = i;
		};
	};
	return coordinates;
};

function isOnBoard(x, y) {
	if (x >= 0 && x <= 7 && y >= 0 && y <= 7){
		return true;
	}
	else{
		return false;
	}
};

function markFirstMoveTaken(piece, type){
	if (piece.firstMoveTaken == false && type == "Pawn"){
		piece.firstMoveTaken = true;
	};
};


