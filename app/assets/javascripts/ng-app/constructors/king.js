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

	this.isVerticalUpAttack = function(){
		var x = this.coordinates.x;
		for(y = this.coordinates.y + 1; y < 8; y++){
			var possible = convertCoordinatesToNotation(x, y);
			if(this.squaresToPieces[possible].color != this.color && (this.squaresToPieces[possible].pieceType == 'rook' || this.squaresToPieces[possible].pieceType == 'queen')){
				return true;
			};
		};
		return false;
	};

	this.isVerticalDownAttack = function(){

	};

	this.isHorizontalLeftAttack = function(){

	};

	this.isDiagonalUpRightAtack = function(){

	};

	this.isDiagonalDownLeftAtack = function(){

	};

	this.isDiagonalUpLeftAttack = function(){

	};

	this.isDiagonalDownRightAttack = function(){

	};


};