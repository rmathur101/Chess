function Knight(){
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

	this.addPossiblePosition = function(x, y){
		var possible = convertCoordinatesToNotation(x, y);
		if (isOnBoard(x,y) && (this.squaresToPieces[possible] == '' || this.squaresToPieces[possible].color != this.color)){
			this.possibles.push(possible);
		};
	};
};

function initializeKnightConstructor(){
	Knight.prototype = new Piece();
	Knight.constructor = Knight;
};