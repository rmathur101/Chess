$(function() {
//to find if there is something in the div
// console.log($('#a1').find(':first').attr('id'));
	drawChessBoard();
	setPrototypes();
	var game = newGame();
	game.populatePieces();

	$('.chess_piece').draggable({revert: "invalid"});
	$('.chess_piece').mousedown(function(){
		var selected = $('#'+this.id);
		var pieceObject = game.pieces[this.id];
		var possibles = pieceObject.getPossiblePositions();
		makeSquaresDroppable(possibles);
		dropPiece(pieceObject);
	});
});

function makeSquaresDroppable(possibles) {
		console.log(possibles);
	_.each(possibles, function(position){
		console.log(position);
		$('#'+position).addClass('drop_positions');
	});
};

function removeSquaresDroppable(){
	$('.drop_positions').droppable('destroy');
	$('.drop_positions').removeClass('drop_positions');
};

function dropPiece(pieceObject){
	$('.drop_positions').droppable({
    drop: function(event, ui) {
    	var square = $('#' + event.target.id);
    	var piece = $('#' + event.toElement.id);
    	pieceObject.placePiece(square[0].id);
			pieceObject.position = square[0].id;
			modifyStyling(piece);
			removeSquaresDroppable();
   		// square.empty();
    }
  });
};

function modifyStyling(piece){
  piece.css("position", "relative");
	piece.css("left", '0px');
	piece.css("right", '0px');
	piece.css("top", '0px');
	piece.css("bottom", '0px');
};


function setPrototypes(){
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
};

function newGame() {
	player1 = new Player('white');
	player2 = new Player('black');
	var game = new Game(player1, player2);
	return game;
};