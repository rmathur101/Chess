angular.module('AngChess').controller('ChessGameCtrl', ['$scope', function ($scope) {
	$scope.init = function(){
		createGame();
		$('.chess_piece').draggable({
	 		revert: "invalid",
	 		scope: "items"
	  });
		// $( ".chess_square" ).droppable({
  //     accept: ".chess_piece"
  //   });
    $('.chess_square').droppable({
        scope: "items",
        drop: function(event, ui) {
        	console.log(event);
        	var square = $('#' + event.target.id);
        	var piece = $('#' + event.toElement.id);
        	console.log(square);
        	console.log(piece);
        	// $('div').removeAttr('style');
        	square.append(piece);
        	piece.removeAttr('style');

        	// $(ui.draggable).draggable({"disabled":true});
        }
    });

	};

	$scope.init();

	function Pawn(color){};
	function Bishop(color){};
	function Knight(color){};
	function Rook(color){
		this.color = color
		this.image = undefined;

	};
	function Queen(color){};
	function King(color){};


	function createGame(){
		drawChessBoard();
		player1 = new Player('white');
		player2 = new Player('black');
		var game = new Game(player1, player2);
		game.activateSquares();
		game.populateImages();
		console.log(game.pieceToSquare);
	};

	function Player (color) {
		this.color = color;
		this.castleKing = true;
		this.castleQueen = true;
	};

	function Square(notation) {
		this.notation = notation;
		this.occupied = undefined;
		this.x = undefined;
		this.y = undefined;
		this.findCoordinates = function(){
			var letter_notation = ["a", "b", "c", "d", "e", "f", "g", "h"];
			var number_notation = ['1', '2', '3', '4', '5', '6', '7', '8'];
			for (var i = 0; i < 8; i++) {
				if (this.notation[0] == letter_notation[i] ) {
					this.x = i;
				};
				if (this.notation[1] == number_notation[i] ) {
					this.y = i;
				};
			};
		};
		this.findCoordinates();
	};

	function Game (player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.activePlayer = player1;
    this.squares = {};
    this.pieceToSquare = {};

    this.activateSquares = function(){
			var letter_notation = ["a", "b", "c", "d", "e", "f", "g", "h"];
			var number_notation = ['1', '2', '3', '4', '5', '6', '7', '8'];

			for (var i = 0; i < 8; i++) {
				for (var d = 0; d < 8; d++) {
					var square_notation = letter_notation[i] + number_notation[d]
          this.squares[square_notation] = new Square(square_notation)
          this.populatePawns(square_notation)
				};
			};
      this.populateMajorPieces();
    };

		this.populatePawns = function(square_notation){
      var letter_notation = ["a", "b", "c", "d", "e", "f", "g", "h"]
      var letter = square_notation[0];
      var number = square_notation[1];

      if (number == '2') {
        for (var i = 0; i < 8; i++) {
          if (letter == letter_notation[i] ) {
            var piece = 'whitePawn' + (i + 1)
            this.pieceToSquare[piece] = this.squares[square_notation]
            var pawn = new Pawn('white');
            pawn.image = '<img class="chess_piece" id="' + piece + '" src="assets/white_pawn.png" alt="white_pawn">'
            this.squares[square_notation].occupied = pawn;
          }
        }
      }
      else if (number == '7') {
        for (var i = 0; i < 8; i++) {
          if (letter == letter_notation[i] ) {
            var piece = 'blackPawn' + (i + 1)
            this.pieceToSquare[piece] = this.squares[square_notation]
            var pawn = new Pawn('black');
            pawn.image = '<img class="chess_piece" id="' + piece + '" src="assets/black_pawn.png" alt="black_pawn">'
            this.squares[square_notation].occupied = pawn;
          }
        }
      }
    };

    this.populateImages = function(){

      // piece_keys = Object.keys(this.pieceToSquare)
      for (piece in this.pieceToSquare) {
        var notation_class = "#" + this.pieceToSquare[piece].notation //yields
        $(notation_class).append(this.pieceToSquare[piece].occupied.image);
      }

    };

    this.populateMajorPieces = function(){
      this.pieceToSquare['whiterook1'] = this.squares['a1'];
      	whiterook1 = new Rook ('white');
      	whiterook1.image = '<img id="whiterook1" class="chess_piece" src="assets/white_rook.png" alt="image">';
        this.squares['a1'].occupied = whiterook1;

      this.pieceToSquare['whiteknight1'] = this.squares['b1'];
      	whiteknight1 = new Knight('white');
      	whiteknight1.image = '<img id="whiteknight1" class="chess_piece" src="assets/white_knight.png" alt="image">';
        this.squares['b1'].occupied = whiteknight1;

      this.pieceToSquare['whitebishop1'] = this.squares['c1'];
      	whitebishop1 = new Bishop('white');
      	whitebishop1.image = '<img id="whitebishop1" class="chess_piece" src="assets/white_bishop.png" alt="image">';
        this.squares['c1'].occupied = whitebishop1;

      this.pieceToSquare['whitequeen'] = this.squares['d1'];
      	whitequeen = new Queen('white');
      	whitequeen.image = '<img id="whitequeen" class="chess_piece" src="assets/white_queen.png" alt="image">';
        this.squares['d1'].occupied = whitequeen;

      this.pieceToSquare['whiteking'] = this.squares['e1'];
      	whiteking = new King('white');
      	whiteking.image = '<img id="whiteking" class="chess_piece" src="assets/white_king.png" alt="image">';
        this.squares['e1'].occupied = whiteking;

      this.pieceToSquare['whitebishop2'] = this.squares['f1'];
      	whitebishop2 = new Bishop('white');
      	whitebishop2.image = '<img id="whitebishop2" class="chess_piece" src="assets/white_bishop.png" alt="image">';
        this.squares['f1'].occupied = whitebishop2;

      this.pieceToSquare['whiteknight2'] = this.squares['g1'];
      	whiteknight2 = new Knight('white');
      	whiteknight2.image = '<img id="whiteknight2" class="chess_piece" src="assets/white_knight.png" alt="image">';
        this.squares['g1'].occupied = whiteknight2;

      this.pieceToSquare['whiterook2'] = this.squares['h1'];
      	whiterook2 = new Rook('white');
      	whiterook2.image = '<img id="whiterook2" class="chess_piece" src="assets/white_rook.png" alt="image">';
        this.squares['h1'].occupied = whiterook2;

      this.pieceToSquare['blackrook1'] = this.squares['a8'];
        blackrook1 = new Rook('black');
      	blackrook1.image = '<img id="blackrook1" class="chess_piece" src="assets/black_rook.png" alt="image">';
        this.squares['a8'].occupied = blackrook1;

      this.pieceToSquare['blackknight1'] = this.squares['b8'];
      	blackknight1 = new Knight('black');
      	blackknight1.image = '<img id="blackknight1" class="chess_piece" src="assets/black_knight.png" alt="image">';
        this.squares['b8'].occupied = blackknight1;

      this.pieceToSquare['blackbishop1'] = this.squares['c8'];
      	blackbishop1 = new Bishop('black');
      	blackbishop1.image = '<img id="blackbishop1" class="chess_piece" src="assets/black_bishop.png" alt="image">';
        this.squares['c8'].occupied = blackbishop1;

      this.pieceToSquare['blackqueen'] = this.squares['d8'];
      	blackqueen = new Queen('black');
      	blackqueen.image = '<img id="blackqueen" class="chess_piece" src="assets/black_queen.png" alt="image">';
        this.squares['d8'].occupied = blackqueen;

      this.pieceToSquare['blackking'] = this.squares['e8'];
      	blackking = new King('black');
      	blackking.image = '<img id="blackking" class="chess_piece" src="assets/black_king.png" alt="image">';
        this.squares['e8'].occupied = blackking;

      this.pieceToSquare['blackbishop2'] = this.squares['f8'];
      	blackbishop2 = new Bishop('black');
      	blackbishop2.image = '<img id="blackbishop2" class="chess_piece" src="assets/black_bishop.png" alt="image">';
        this.squares['f8'].occupied = blackbishop2;

      this.pieceToSquare['blackknight2'] = this.squares['g8'];
      	blackknight2 = new Knight('black');
      	blackknight2.image = '<img id="blackknight2" class="chess_piece" src="assets/black_knight.png" alt="image">';
        this.squares['g8'].occupied = blackknight2;

      this.pieceToSquare['blackrook2'] = this.squares['h8'];
      	blackrook2 = new Rook('black');
      	blackrook2.image = '<img id="blackrook2" class="chess_piece" src="assets/black_rook.png" alt="image">';
        this.squares['h8'].occupied = blackrook2;
    };
	};

	function convertCoordinatesToNotation(x, y){
		var letter_notation = ["a", "b", "c", "d", "e", "f", "g", "h"];
		var number_notation = ['1', '2', '3', '4', '5', '6', '7', '8'];
		var notation = letter_notation[x] + number_notation[y]
		return notation;
	};

	function drawChessBoard(){
		var letter_notation = ["a", "b", "c", "d", "e", "f", "g", "h"]
		var number_notation = [8, 7, 6, 5, 4, 3, 2, 1];
		_.each(number_notation, function(number, number_index){
			var divString = '';
			_.each(letter_notation, function(letter, letter_index){
				var notation = letter + number
				var square_color = colorSquares(number_index, letter_index);
				divString = divString + '<div id='+notation+' class="chess_square '+square_color+'"></div>';
			});
			$('#chess_board').append(divString);
		});
	};

	function colorSquares(number_index, letter_index){
		if ((number_index % 2 == 0 && letter_index % 2 == 0) || (number_index % 2 != 0 && letter_index % 2 != 0)){
			return "square_color1";
		}
		else if ((number_index % 2 == 0 && letter_index % 2 != 0) || (number_index % 2 != 0 && letter_index % 2 == 0)){
			return "square_color2";
		};
	};
}]);

