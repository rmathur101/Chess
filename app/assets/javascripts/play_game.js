$(function() {
	drawChessBoard();
	initializeConstructors();
	var game = newGame();
	game.initializeSquaresToPiecesDictionary();
	game.listenForNewEvents();

});


function initializeConstructors(){
	initializePawnConstructor();
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