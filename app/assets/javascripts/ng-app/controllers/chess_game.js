
angular.module('AngChess').controller('ChessGameCtrl', ['$scope', function ($scope) {
		$scope.init = function(){
			createGame();
			$('.a1').append('<img class="chess_piece" src="assets/white_rook.png" alt="image">');
		};

 		$scope.init();

 		function Pawn(color){
      this.color = color;
    };

 		function Bishop(color){};
 		function Knight(color){};
 		function Rook(color){};
 		function Queen(color){};
 		function King(color){};

  	function createGame(){
  		drawChessBoard();
			player1 = new Player('white');
			player2 = new Player('black');
			var game = new Game(player1, player2);
			game.activateSquares();
      game.populateImages();
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
				var letter_notation = ["a", "b", "c", "d", "e", "f", "g", "h"]
				var number_notation = ['1', '2', '3', '4', '5', '6', '7', '8'];

				for (var i = 0; i < 8; i++) {
					for (var d = 0; d < 8; d++) {
						var square_notation = letter_notation[i] + number_notation[d]
            this.squares[square_notation] = new Square(square_notation)
            this.populatePawns(square_notation)
					};
				};
        this.populateMajorPieces();
        console.log(this.pieceToSquare);
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
              pawn.image = '<img class="chess_piece" src="assets/white_pawn.png" alt="white_pawn">'
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
              pawn.image = '<img class="chess_piece" src="assets/black_pawn.png" alt="black_pawn">'
              this.squares[square_notation].occupied = pawn;
            }
          }
        }
      };

      this.populateImages = function(){

        // piece_keys = Object.keys(this.pieceToSquare)
        for (piece in this.pieceToSquare) {
          var notation_class = "." + this.pieceToSquare[piece].notation //yields 
          $(notation_class).append(this.pieceToSquare[piece].occupied.image)
        }
 
                  // console.log('boo')
        // $('.a1').append('<img class="chess_piece" src="assets/white_rook.png" alt="image">');
      };

      this.populateMajorPieces = function(){

        this.pieceToSquare['whiterook1'] = this.squares['a1']
          this.squares['a1'].occupied = new Rook('white')
        this.pieceToSquare['whiteknight1'] = this.squares['b1']
          this.squares['b1'].occupied = new Knight('white')
        this.pieceToSquare['whitebishop1'] = this.squares['c1']
          this.squares['c1'].occupied = new Bishop('white')
        this.pieceToSquare['whitequeen'] = this.squares['d1']
          this.squares['d1'].occupied = new Queen('white')
        this.pieceToSquare['whiteking'] = this.squares['e1']
          this.squares['e1'].occupied = new King('white')
        this.pieceToSquare['whitebishop2'] = this.squares['f1']
          this.squares['f1'].occupied = new Bishop('white')
        this.pieceToSquare['whiteknight2'] = this.squares['g1']
          this.squares['g1'].occupied = new Knight('white')
        this.pieceToSquare['whiterook2'] = this.squares['h1']
          this.squares['h1'].occupied = new Rook('white')

        this.pieceToSquare['blackrook1'] = this.squares['a8']
          this.squares['a8'].occupied = new Rook('black')
        this.pieceToSquare['blackknight1'] = this.squares['b8']
          this.squares['b8'].occupied = new Knight('black')
        this.pieceToSquare['blackbishop1'] = this.squares['c8']
          this.squares['c8'].occupied = new Bishop('black')
        this.pieceToSquare['blackqueen'] = this.squares['d8']
          this.squares['d8'].occupied = new Queen('black')
        this.pieceToSquare['blackking'] = this.squares['e8']
          this.squares['e8'].occupied = new King('black')
        this.pieceToSquare['blackbishop2'] = this.squares['f8']
          this.squares['f8'].occupied = new Bishop('black')
        this.pieceToSquare['blackknight2'] = this.squares['g8']
          this.squares['g8'].occupied = new Knight('black')
        this.pieceToSquare['blackrook2'] = this.squares['h8']
          this.squares['h8'].occupied = new Rook('black')
      };
		};

		function convertCoordinatesToNotation(x, y){
			var letter_notation = ["a", "b", "c", "d", "e", "f", "g", "h"]
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
					divString = divString + '<div class="chess_square '+square_color+' '+notation+'"></div>';
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

