$(function() {
	drawChessBoard();
	initializeConstructors();
	var game = newGame();
	game.initializeSquaresToPiecesDictionary();
	game.listenForNewEvents();
});


function initializeConstructors(){
	initializePawnConstructor();
	initializeKnightConstructor();
	initializeBishopConstructor();


	Rook.prototype = new Piece();
	Rook.constructor = Rook;

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

function initializePawnConstructor(){
	Pawn.prototype = new Piece();
	Pawn.constructor = Pawn;
};

function initializeKnightConstructor(){
	Knight.prototype = new Piece();
	Knight.constructor = Knight;
};

function initializeBishopConstructor(){
	Bishop.prototype = new Piece();
	Bishop.constructor = Bishop;
};