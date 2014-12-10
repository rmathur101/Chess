function Square(notation) {
	this.notation = notation;
	this.occupied = undefined;
	this.x = undefined;
	this.y = undefined;
	this.findCoordinates = function(){
		for (var i = 0; i < 8; i++) {
			if (this.notation[0] == LETTER_NOTATION[i] ) {
				this.x = i;
			};
			if (this.notation[1] == NUMBER_NOTATION[i] ) {
				this.y = i;
			};
		};
	};
	this.findCoordinates();
};