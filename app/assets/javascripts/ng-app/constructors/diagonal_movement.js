function DiagonalMovement(){
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

	this.getNegativeSlopePositions = function(){
		this.getDiagonalUpLeftPositions();
		this.getDiagonalDownRightPositions();
	};

	this.getDiagonalUpLeftPositions = function(){
		var x, y;
		for (x = this.coordinates.x - 1, y = this.coordinates.y + 1; x >= 0 && y < 8; x--, y++) {
			this.addPossiblePosition(x,y);
			if (this.squaresToPieces[convertCoordinatesToNotation(x,y)] != ''){
				break;
			};
		};
	};

	this.getDiagonalDownRightPositions = function(){
		var x, y;
		for (x = this.coordinates.x + 1, y = this.coordinates.y - 1; x < 8 && y >= 0; x++, y--) {
			this.addPossiblePosition(x,y);
			if (this.squaresToPieces[convertCoordinatesToNotation(x,y)] != ''){
				break;
			};
		};
	};

};