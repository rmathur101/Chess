function Bishop(){
	this.getPossibles = function(squaresToPieces){
		this.clearState();
		this.squaresToPieces = squaresToPieces;
		this.getCoordinates();
		this.getPositiveSlopePositions();
		return this.possibles;
	};

	this.getPositiveSlopePositions = function(){
		this.getDiagonalUpRightPositions();
		this.getDiagonalDownLeftPositions();
	};

	this.getDiagonalUpRightPositions = function(){
		var x, y;
		for (x = this.coordinates.x + 1, y = this.coordinates.y + 1; x < 8 && y < 8; x++, y++) {
			this.addPossiblePosition(x,y);
			if (this.squaresToPieces[convertCoordinatesToNotation(x,y)] != ''){
				break;
			};
		};
	};

	this.getDiagonalDownLeftPositions = function(){
		var x, y;
		for (x = this.coordinates.x - 1, y = this.coordinates.y - 1; x >= 0 && y >= 0; x--, y--) {
			this.addPossiblePosition(x,y);
			if (this.squaresToPieces[convertCoordinatesToNotation(x,y)] != ''){
				break;
			};
		};
	};

	this.addPossiblePosition = function(x, y){
		var possible = convertCoordinatesToNotation(x, y);
		if (isOnBoard(x,y) && (this.squaresToPieces[possible] == '' || this.squaresToPieces[possible].color != this.color)){
			this.possibles.push(possible);
		};
	};
};
