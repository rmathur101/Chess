function King(){
	Piece.call(this);

	this.getPossibles = function(squaresToPieces){
		this.clearState();
		this.squaresToPieces = squaresToPieces;
		this.getCoordinates();
		this.getAllPositions();
		return this.possibles;
	};

	this.getAllPositions = function(){
		this.addPossiblePosition(this.coordinates.x, this.coordinates.y + 1);
		this.addPossiblePosition(this.coordinates.x, this.coordinates.y - 1);
		this.addPossiblePosition(this.coordinates.x + 1, this.coordinates.y);
		this.addPossiblePosition(this.coordinates.x - 1, this.coordinates.y);
		this.addPossiblePosition(this.coordinates.x + 1, this.coordinates.y + 1);
		this.addPossiblePosition(this.coordinates.x - 1, this.coordinates.y + 1);
		this.addPossiblePosition(this.coordinates.x - 1, this.coordinates.y - 1);
		this.addPossiblePosition(this.coordinates.x + 1, this.coordinates.y - 1);
	};
};