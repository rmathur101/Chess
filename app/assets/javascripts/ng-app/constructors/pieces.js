function Piece(){
	this.name = undefined;
	this.pieceType = undefined;
	this.image = undefined;
	this.position = undefined;
	this.coordinates = undefined;
	this.color = undefined;
	this.possibles = [];
	this.firstMoveTaken = false;

	this.getColor = function(){
		this.color = this.name.match("[a-z]+")[0];
	};

	this.getPieceType = function(){
		this.pieceType = this.name.match("[A-Z]{1}[a-z]+")[0];
	};

	this.placePiece = function(square_position) {
		$('#'+square_position).append($('#'+this.name));
		this.position = square_position;
		this.clearState();
		this.firstMoveTaken = true;
	};

	this.placePieceInitial = function(square_position){
		$('#'+square_position).append(this.image);
		this.position = square_position;
	};

	this.getCoordinates = function(){
		var letter = this.position[0];
		var number = this.position[1];
		var coordinates = {x: undefined, y: undefined}
		for (var i = 0; i < 8; i++){
			if (letter == LETTER_NOTATION[i]){
				coordinates.x = i;
			};
		 	if (number == NUMBER_NOTATION[i]){
				coordinates.y = i;
			};
		};
		this.coordinates = coordinates;
	};

	this.getNotation = function(x, y){
		var notation = LETTER_NOTATION[x] + NUMBER_NOTATION[y]
		return notation;
	};

	this.clearState = function(){
		this.possibles = [];
		this.coordinates = [];
	};

	this.init = function(name, image, position) {
		this.name = name;
		this.position = position;
		this.image = '<img id='+this.name+' class="chess_piece '+this.color+'" src="'+image+'" alt="image">';
		this.getPieceType();
		this.getColor();
		this.placePieceInitial(position);
	};
};




