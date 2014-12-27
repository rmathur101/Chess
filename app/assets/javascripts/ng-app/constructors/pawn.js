function Pawn(){
	this.getPossibles = function(squaresToPieces){
		this.clearState();
		this.squaresToPieces = squaresToPieces;
		this.getCoordinates();
		this.forwardMovement();
		return this.possibles;
	};

	this.getPossiblesWhite = function() {
		if (this.firstMoveTaken == false){
			this.getPossiblesFirstMoveWhite();

		};
	};

	this.getPossiblesBlack = function(){

	};

	this.getPossibleFirstMoveWhite = function(){
		x = this.coordinates.x;
		y = this.coordinates.y + 2;
		this.addPossibleFirstMoveWhite(x, y);
	};

	this.getPossiblesFirstMoveBlack = function(){

	};

	this.addPossibleFirstMoveWhite = function(x, y) {
		var checkNext = convertCoordinatesToNotation(x, y - 1);
		var possible = convertCoordinatesToNotation(x, y);
		if (this.squaresToPieces[possible] == "" && this.squaresToPieces[checkNext] == ""){
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

	this.addPossibleWhite = function(x, y) {

	};
};

function initializePawnConstructor(){
	Pawn.prototype = new Piece();
	Pawn.constructor = Pawn;
};

