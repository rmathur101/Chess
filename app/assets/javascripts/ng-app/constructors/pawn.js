function Pawn(){
	this.getPossiblePositions = function(){
		this.clearState();
		this.getCoordinates();
		this.forwardMovement();
		return this.possibles;
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
			x = this.coordinates.x;
			y = this.coordinates.y - 2;
			this.possibles.push(this.getNotation(x, y));
		};
	};
};

function initializePawnConstructor(){
	Pawn.prototype = new Piece();
	Pawn.constructor = Pawn;
};

