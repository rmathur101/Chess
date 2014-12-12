function Piece(){
	this.name = undefined;
	this.image = undefined;
	this.position = undefined;
	this.color = undefined;

	this.getColor = function(){
		this.color = this.name.match("[a-z]+")[0];
	};

	this.placePiece = function(position) {
		$('#'+position).append(this.image);
	};

	this.init = function(name, image, position) {
		this.name = name;
		this.position = position;
		this.image = '<img id='+this.name+' class="chess_piece '+this.color+'" src="'+image+'" alt="image">';
		this.getColor();
		this.placePiece(position);
	};
};

function Pawn(){
};
function Knight(){
};
function Rook(){
};
function Bishop(){
};
function Queen(){
};
function King(){
};

Pawn.prototype = new Piece();
Pawn.constructor = Pawn;

Knight.prototype = new Piece();
Knight.constructor = Knight;

Rook.prototype = new Piece();
Rook.constructor = Rook;

Bishop.prototype = new Piece();
Bishop.constructor = Bishop;

Queen.prototype = new Piece();
Queen.constructor = Queen;

King.prototype = new Piece();
King.constructor = King;
