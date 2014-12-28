function Bishop(){
	this.getPossibles = function(squaresToPieces){
		this.clearState();
		this.squaresToPieces = squaresToPieces;
		this.getCoordinates();
		this.getPossiblePositions();
		return this.possibles;
	};

	this.getDiagonalRightPositions = function(){
		this.getDiagonalUpRightPositions();
	};

	this.getDiagonalUpRightPositions = function(){
		var x, y;
		for (x = this.coordinates.x + 1, y = this.coordinates.y + 1; x < 8 && y < 8; x++, y++) {
			this.addPossiblePosition(x,y);
		};
	};

	this.getDiagonalDownRightPositions = function(){
	};

	this.addPossiblePosition = function(x, y){
		var possible = convertCoordinatesToNotation(x, y);
		if (isOnBoard(x,y) && (this.squaresToPieces[possible] == '' || this.squaresToPieces[possible].color != this.color)){
			this.possibles.push(possible);
		};
	};
};
