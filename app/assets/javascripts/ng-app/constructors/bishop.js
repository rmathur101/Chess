function Bishop(){
	Piece.call(this);
	DiagonalMovement.call(this);

	this.getPossibles = function(squaresToPieces){
		this.clearState();
		this.squaresToPieces = squaresToPieces;
		this.getCoordinates();
		this.getAllPositions();
		return this.possibles;
	};

	this.getAllPositions = function(){
		this.getPositiveSlopePositions();
		this.getNegativeSlopePositions();
	};

};
