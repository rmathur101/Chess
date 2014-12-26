function Pawn(){
	this.getPossiblePositions = function(squaresToPieces){
		this.clearState();
		this.squaresToPieces = squaresToPieces;
		this.getCoordinates();
		this.forwardMovement();
		return this.possibles;
	};

	this.diagonalCaptureWhite = function(){
		this.addPossible(this.coordinates.x + 1, this.coordinates.y + 1)
		// var x;
		// var y;
		// x = this.coordinates.x + 1;
		// y = this.coordinates.y + 1;
		// this.addPossible(x, y);
		// x = this.coordinates
	};

	this.forwardMovement = function() {
		if (this.color == 'white'){
			this.forwardMovementWhite();
		}
		else if (this.color == 'black'){
			this.forwardMovementBlack();
		};
	};

	this.forwardMovementWhite = function(){
		if (this.color == "white"){
			x = this.coordinates.x;
			y = this.coordinates.y + 1;
			this.possibles.push(convertCoordinatesToNotation(x, y));
			this.firstMoveWhite();
		};
	};

	this.forwardMovementBlack = function(){
		if (this.color == "black"){
			x = this.coordinates.x;
			y = this.coordinates.y - 1;
			this.possibles.push(convertCoordinatesToNotation(x, y));
			this.firstMoveBlack();
		};
	};

	this.firstMoveWhite = function() {
		if (this.firstMoveTaken == false){
			x = this.coordinates.x;
			y = this.coordinates.y + 2;
			this.addPossibleFirstMoveWhite(x, y);
		};
	};

	this.firstMoveBlack = function(){
		if (this.firstMoveTaken == false && this.color == "black"){
			var x = this.coordinates.x;
			var y = this.coordinates.y - 2;
			this.addPossibleFirstMoveBlack(x, y);
		};
	};

	this.addPossibleFirstMoveWhite = function(x, y) {
		var check = convertCoordinatesToNotation(x, y-1);
		var possible = convertCoordinatesToNotation(x, y);
		if (this.squaresToPieces[possible] == "" && this.squaresToPieces[check] == ""){
			this.possibles.push(possible);
		};
	};

	this.addPossibleFirstMoveBlack = function(x, y) {
		var check = convertCoordinatesToNotation(x, y+1);
		var possible = convertCoordinatesToNotation(x, y);
		if (this.squaresToPieces[possible] == "" && this.squaresToPieces[check] == ""){
			this.possibles.push(possible);
		};
	};

	this.addPossibleForwardWhite = function(x, y) {

	};
};

function initializePawnConstructor(){
	Pawn.prototype = new Piece();
	Pawn.constructor = Pawn;
};

