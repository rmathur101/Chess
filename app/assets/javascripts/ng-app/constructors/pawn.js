function Pawn(){
	this.getPossiblePositions = function(squaresToPieces){
		this.clearState();
		this.squaresToPieces = squaresToPieces;
		this.getCoordinates();
		this.forwardMovement();
		return this.possibles;
	};

	this.diagonalCaptureWhite = function(){
		var x = this.coordinates.x + 1;
		var y = this.coordinates.y + 1;
	};

	this.forwardMovement = function() {
		this.forwardMovementWhite();
		this.forwardMovementBlack();
	};

	this.forwardMovementWhite = function(){
		if (this.color == "white"){
			x = this.coordinates.x;
			y = this.coordinates.y + 1;
			this.possibles.push(this.getNotation(x, y));
			this.firstMoveWhite();
		};
	};

	this.forwardMovementBlack = function(){
		if (this.color == "black"){
			x = this.coordinates.x;
			y = this.coordinates.y - 1;
			this.possibles.push(this.getNotation(x, y));
			this.firstMoveBlack();
		};
	};

	this.firstMoveWhite = function() {
		if (this.firstMoveTaken == false && this.color == "white"){
			x = this.coordinates.x;
			y = this.coordinates.y + 2;
			this.possibles.push(this.getNotation(x, y));
		};
	};

	this.firstMoveBlack = function(){
		if (this.firstMoveTaken == false && this.color == "black"){
			var x = this.coordinates.x;
			var y = this.coordinates.y - 2;
			this.possibles.push(this.getNotation(x, y));
		};
	};

	this.addPossible = function(x, y) {
	}
};

function initializePawnConstructor(){
	Pawn.prototype = new Piece();
	Pawn.constructor = Pawn;
};

