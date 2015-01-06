function King(){
	Piece.call(this);
	this.check = false;
	this.checkmate = false;

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
			if(this.squaresToPieces[possible] != ''){
				if(this.squaresToPieces[possible].color != this.color && (this.squaresToPieces[possible].pieceType == 'rook' || this.squaresToPieces[possible].pieceType == 'queen')){
					return true;
				}
				else{
					return false;
				};
			};
		};
		return false;
	};

	this.isVerticalDownAttack = function(){
		var x = this.coordinates.x;
		for(y = this.coordinates.y - 1; y >= 0; y--){
			var possible = convertCoordinatesToNotation(x, y);
			if(this.squaresToPieces[possible] != ''){
				if(this.squaresToPieces[possible].color != this.color && (this.squaresToPieces[possible].pieceType == 'rook' || this.squaresToPieces[possible].pieceType == 'queen')){
					return true;
				}
				else{
					return false;
				};
			};
		};
		return false;
	};

	this.isHorizontalLeftAttack = function(){
		var y = this.coordinates.y;
		for( var x = this.coordinates.x - 1; x >= 0; x--){
			var possible = convertCoordinatesToNotation(x, y);
			if(this.squaresToPieces[possible] != ''){
				if(this.squaresToPieces[possible].color != this.color && (this.squaresToPieces[possible].pieceType == 'rook' || this.squaresToPieces[possible].pieceType == 'queen')){
					return true;
				}
				else{
					return false;
				};
			};
		};
		return false;
	};

	this.isHorizontalRightAttack = function(){
		var y = this.coordinates.y;
		for( var x = this.coordinates.x + 1; x < 8; x++){
			var possible = convertCoordinatesToNotation(x, y);
			if(this.squaresToPieces[possible] != ''){
				if(this.squaresToPieces[possible].color != this.color && (this.squaresToPieces[possible].pieceType == 'rook' || this.squaresToPieces[possible].pieceType == 'queen')){
					return true;
				}
				else{
					return false;
				};
			};
		};
		return false;
	};

	this.isDiagonalUpRightAttack = function(){
		var x, y;
		for(x = this.coordinates.x + 1, y = this.coordinates.y + 1; x < 8 && y < 8; x ++, y++){
			var possible = convertCoordinatesToNotation(x, y);
			if(this.squaresToPieces[possible] != ''){
				if(this.squaresToPieces[possible].color != this.color && (this.squaresToPieces[possible].pieceType == 'queen' || this.squaresToPieces[possible].pieceType == 'bishop')){
					return true;
				}
				else{
					return false;
				};
			};
		};
		return false;
	};

	this.isDiagonalDownLeftAttack = function(){
		var x, y;
		for(x = this.coordinates.x - 1, y = this.coordinates.y - 1; x >= 0 && y >= 0; x --, y--){
			var possible = convertCoordinatesToNotation(x, y);
			if(this.squaresToPieces[possible] != ''){
				if(this.squaresToPieces[possible].color != this.color && (this.squaresToPieces[possible].pieceType == 'queen' || this.squaresToPieces[possible].pieceType == 'bishop')){
					return true;
				}
				else{
					return false;
				};
			};
		};
		return false;
	};

	this.isDiagonalUpLeftAttack = function(){
		var x, y;
		for(x = this.coordinates.x - 1, y = this.coordinates.y + 1; x >= 0 && y < 8; x --, y++){
			var possible = convertCoordinatesToNotation(x, y);
			if(this.squaresToPieces[possible] != ''){
				if(this.squaresToPieces[possible].color != this.color && (this.squaresToPieces[possible].pieceType == 'queen' || this.squaresToPieces[possible].pieceType == 'bishop')){
					return true;
				}
				else{
					return false;
				};
			};
		};
		return false;
	};

	this.isDiagonalDownRightAttack = function(){
		var x, y;
		for(x = this.coordinates.x + 1, y = this.coordinates.y - 1; x < 8 && y >= 0; x ++, y--){
			var possible = convertCoordinatesToNotation(x, y);
			if(this.squaresToPieces[possible] != ''){
				if(this.squaresToPieces[possible].color != this.color && (this.squaresToPieces[possible].pieceType == 'queen' || this.squaresToPieces[possible].pieceType == 'bishop')){
					return true;
				}
				else{
					return false;
				};
			};
		};
		return false;
	};

	this.isKnightAttack = function(){
		var x = this.coordinates.x;
		var y = this.coordinates.y;

		if(this.checkKnightAttack(x - 2, y + 1)){
			return true;
		}
		else if(this.checkKnightAttack(x - 2, y - 1)){
			return true;
		}
		else if(this.checkKnightAttack(x + 2, y + 1)){
			return true;
		}
		else if(this.checkKnightAttack(x + 2, y - 1)){
			return true;
		}
		else if(this.checkKnightAttack(x - 1, y + 2)){
			return true;
		}
		else if(this.checkKnightAttack(x - 1, y - 2)){
			return true;
		}
		else if(this.checkKnightAttack(x + 1, y + 2)){
			return true;
		}
		else if(this.checkKnightAttack(x + 1, y - 2)){
			return true;
		}
		else{
			return false;
		};
	};


	this.checkKnightAttack = function(x, y){
		console.log(convertCoordinatesToNotation(x,y));
	 if(isOnBoard(x ,y) && this.squaresToPieces[convertCoordinatesToNotation(x, y)].pieceType == 'knight' && this.squaresToPieces[convertCoordinatesToNotation(x ,y)].color != this.color){
	 	return true;
	 }
	};

	this.isWhitePawnAttack = function(){

	};

	this.isBlackPawnAttack = function(){

	};
};