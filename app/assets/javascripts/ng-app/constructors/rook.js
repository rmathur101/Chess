function Rook(){
	this.getPossibles = function(){
		this.clearState();
		this.squaresToPieces = squaresToPieces;
		this.getCoordinates();
		this.getAllPositions();
		return this.possibles;
	};

	this.getAllPositions = function(){
		this.getVerticalRightPositions();
		this.getVerticalLeftPositions();
		this.getHorizontalRightPositions();
		this.getHorizontalLeftPositions();
	};

	this.getVerticalUpPositions = function(){
		var x = this.coordinates.x;
		var y;
		for (y = this.coordinates.y + 1; y < 8; y++) {
			this.addPossiblePosition(x,y);
			if (this.squaresToPieces[convertCoordinatesToNotation(x,y)] != ''){
				break;
			};
		};
	};

	this.getVerticalDownPositions = function(){
		var x = this.coordinates.x;
		var y;
		for (y = this.coordinates.y - 1; y < 8; y--) {
			this.addPossiblePosition(x,y);
			if (this.squaresToPieces[convertCoordinatesToNotation(x,y)] != ''){
				break;
			};
		};
	};

	this.getHorizontalRightPositions = function(){

	};

	this.getHorizontalLeftPositions = function(){

	};

	this.addPossiblePosition = function(x, y){
		var possible = convertCoordinatesToNotation(x, y);
		if (isOnBoard(x,y) && (this.squaresToPieces[possible] == '' || this.squaresToPieces[possible].color != this.color)){
			this.possibles.push(possible);
		};
	};
};