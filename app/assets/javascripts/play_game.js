$(function() {
	drawChessBoard();
	var game = newGame();
	game.initializeSquaresToPiecesDictionary();
	game.listenForNewEvents();
});

function newGame() {
	player1 = new Player('white');
	player2 = new Player('black');
	var game = new Game(player1, player2);
	return game;
};


