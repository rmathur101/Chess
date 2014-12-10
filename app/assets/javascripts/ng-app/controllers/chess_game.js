
angular.module('AngChess').controller('ChessGameCtrl', ['$scope', function ($scope) {
		$scope.init = function(){
			createGame();
			// $('.a1').append('<img class="chess_piece" src="assets/white_rook.png" alt="image">');
		};

 		$scope.init();

 		function Pawn(){};

  	function createGame(){
  		drawChessBoard();
			player1 = new Player('white');
			player2 = new Player('black');
			var game = new Game(player1, player2);
			game.activateSquares();
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

		function Game(player1, player2) {
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
						var square_notation = letter_notation[i] + number_notation[d];
            this.squares[square_notation] = new Square(square_notation)
            this.checkOccupied(square_notation)
					}
				}
	    };

      this.checkOccupied = function(square_notation){
        var letter_notation = ["a", "b", "c", "d", "e", "f", "g", "h"];
        var letter = square_notation[0];
        var number = square_notation[1];
        if (number == '2') {
          for (var i = 0; i < 8; i++) {
            if (letter == letter_notation[i] ) {
              var piece = 'whitePawn' + (i + 1)
              this.pieceToSquare[piece] = this.squares[square_notation]
              this.squares[square_notation].occupied = new Pawn('white');
            }
          }
        }
        else if (number == '7') {
          for (var i = 0; i < 8; i++) {
            if (letter == letter_notation[i] ) {
              var piece = 'blackPawn' + (i + 1)
              this.pieceToSquare[piece] = this.squares[square_notation]
              this.squares[square_notation].occupied = new Pawn('black');
            }
          };
        };
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

