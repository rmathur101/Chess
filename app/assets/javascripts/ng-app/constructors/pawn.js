function Pawn(){
	 //remember to change this after the piece has been placed; remember to change the possibilities after the piece has been moved

	this.getPossiblePositions = function(){
		this.possibles = [];
		this.coordinates = undefined;
		this.coordinates = this.getCoordinates();
		this.ifFirstMove();
		this.forwardMovement();
		return this.possibles
	};

	this.forwardMovement = function() {
		x = this.coordinates.x;
		y = this.coordinates.y + 1;
		this.possibles.push(this.getNotation(x, y));
	};

	this.ifFirstMove = function(argument) {
		if (this.firstMoveTaken == false){
			x = this.coordinates.x;
			y = this.coordinates.y + 2;
			this.possibles.push(this.getNotation(x, y));
		};
	}
};

