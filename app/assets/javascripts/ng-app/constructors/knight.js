function Knight(){
	Piece.call(this);

	this.getPossibles = function(squaresToPieces){
		this.clearState();
		this.squaresToPieces = squaresToPieces;
		this.getCoordinates();
		this.getPossiblePositions();
		return this.possibles;
	};

	this.getPossiblePositions = function(){
		this.addPossiblePosition(this.coordinates.x - 2, this.coordinates.y + 1);
		this.addPossiblePosition(this.coordinates.x - 2, this.coordinates.y - 1);
		this.addPossiblePosition(this.coordinates.x + 2, this.coordinates.y + 1);
		this.addPossiblePosition(this.coordinates.x + 2, this.coordinates.y - 1);
		this.addPossiblePosition(this.coordinates.x - 1, this.coordinates.y + 2);
		this.addPossiblePosition(this.coordinates.x - 1, this.coordinates.y - 2);
		this.addPossiblePosition(this.coordinates.x + 1, this.coordinates.y + 2);
		this.addPossiblePosition(this.coordinates.x + 1, this.coordinates.y - 2);
	};
};

