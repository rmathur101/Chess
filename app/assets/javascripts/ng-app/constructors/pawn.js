function Pawn(){
	this.getPossibles = function(squaresToPieces){
		this.clearState();
		this.squaresToPieces = squaresToPieces;
		this.getCoordinates();
		if (this.color == 'white'){
			this.getPossiblesWhite();
		}
		else if (this.color == 'black'){
			this.getPossiblesBlack();
		}
		return this.possibles;
	};

	this.getPossiblesWhite = function() {
		this.getPossibleFirstMoveWhite();
		this.getPossibleForwardWhite();
		this.getPossiblesDiagonalWhite();
	};

	this.getPossiblesBlack = function(){
		this.getPossibleFirstMoveBlack();
		this.getPossibleForwardBlack();
		this.getPossiblesDiagonalBlack();
	};

	this.getPossiblesDiagonalWhite = function(){
		this.addPossibleDiagonalWhite(this.coordinates.x + 1, this.coordinates.y + 1);
		this.addPossibleDiagonalWhite(this.coordinates.x - 1, this.coordinates.y + 1);
	};

	this.addPossibleDiagonalWhite = function(x, y){
		var possible = convertCoordinatesToNotation(x, y);
		console.log(possible);
		if (isOnBoard(x,y)){
			if (this.squaresToPieces[possible].color != this.color && this.squaresToPieces[possible] != ''){
				this.possibles.push(possible);
			};
		};
	};

	this.getPossiblesDiagonalBlack = function(){
		this.addPossibleDiagonalBlack(this.coordinates.x + 1, this.coordinates.y - 1);
		this.addPossibleDiagonalBlack(this.coordinates.x - 1, this.coordinates.y - 1);
	};

	this.addPossibleDiagonalBlack = function(x, y){
		var possible = convertCoordinatesToNotation(x, y);
		if (isOnBoard(x,y)){
			if (this.squaresToPieces[possible].color != this.color && this.squaresToPieces[possible] != ''){
				this.possibles.push(possible);
			}
		};
	};

	this.getPossibleForwardWhite = function(){
		var x = this.coordinates.x;
		var y = this.coordinates.y + 1;
		this.addPossibleForwardWhite(x, y);
	};

	this.addPossibleForwardWhite = function(x, y) {
		var possible = convertCoordinatesToNotation(x, y);
		if (y == 8){
			return;
		}
		else if (this.squaresToPieces[possible] == ""){
			this.possibles.push(possible);
		};
	};

	this.getPossibleForwardBlack = function(){
		var x = this.coordinates.x;
		var y = this.coordinates.y - 1;
		this.addPossibleForwardBlack(x, y);
	};

	this.addPossibleForwardBlack = function(x, y) {
		var possible = convertCoordinatesToNotation(x, y);
		if (y == -1){
			return;
		}
		else if (this.squaresToPieces[possible] == ""){
			this.possibles.push(possible);
		};
	};

	this.getPossibleFirstMoveBlack = function(){
		if (this.firstMoveTaken == false){
			x = this.coordinates.x;
			y = this.coordinates.y - 2;
			this.addPossibleFirstMoveBlack(x, y);
		};
	};

	this.addPossibleFirstMoveBlack = function(x, y) {
		var checkNext = convertCoordinatesToNotation(x, y + 1);
		var possible = convertCoordinatesToNotation(x, y);
		if (this.squaresToPieces[possible] == "" && this.squaresToPieces[checkNext] == ""){
			this.possibles.push(possible);
		};
	};

	this.getPossibleFirstMoveWhite = function(){
		if (this.firstMoveTaken == false){
			var x = this.coordinates.x;
			var y = this.coordinates.y + 2;
			this.addPossibleFirstMoveWhite(x, y);
		};
	};

	this.addPossibleFirstMoveWhite = function(x, y) {
		var checkNext = convertCoordinatesToNotation(x, y - 1);
		var possible = convertCoordinatesToNotation(x, y);
		if (this.squaresToPieces[possible] == "" && this.squaresToPieces[checkNext] == ""){
			this.possibles.push(possible);
		};
	};
};

function initializePawnConstructor(){
	Pawn.prototype = new Piece();
	Pawn.constructor = Pawn;
};

