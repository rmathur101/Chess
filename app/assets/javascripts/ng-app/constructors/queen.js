function Queen(){
	Piece.call(this);
	HorizontalAndVerticalMovement.call(this);
	DiagonalMovement.call(this);

	this.getPossibles = function(squaresToPieces){
		this.clearState();
		this.squaresToPieces = squaresToPieces;
		this.getCoordinates();
		this.getAllPositions();
		return this.possibles;
	};

	this.getAllPositions = function(){
		this.getVerticalUpPositions();
		this.getVerticalDownPositions();
		this.getHorizontalRightPositions();
		this.getHorizontalLeftPositions();
		this.getPositiveSlopePositions();
		this.getNegativeSlopePositions();
	};
};