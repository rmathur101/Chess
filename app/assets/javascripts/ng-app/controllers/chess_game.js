angular.module('AngChess')
    .controller('ChessGameCtrl', function ($scope) {

    	$scope.init = function(){
				markDivs();
				$scope.createGame();
    	};

    	


    	$scope.createGame = function(){
    		function Player (color) {
    			this.color = color;
    			this.castleKing = true;
    			this.castleQueen = true;
    			this.initializePieces = function(){
    				this.king = new King(this.color);
    				this.queen = new Queen(this.color);
    				this.bishop1 = new Bishop(this.color);
    				this.bishop2 = new Bishop(this.color);
    				this.rook1 = new Rook(this.color);
    				this.rook2 = new Rook(this.color);
    				this.knight1 = new Knight(this.color);
    				this.knight2 = new Knight(this.color);
    				this.pawn1 = new Pawn(this.color);
    				this.pawn2 = new Pawn(this.color);
    				this.pawn3 = new Pawn(this.color);
    				this.pawn4 = new Pawn(this.color);
    				this.pawn5 = new Pawn(this.color);
    				this.pawn6 = new Pawn(this.color);
    				this.pawn7 = new Pawn(this.color);
    				this.pawn8 = new Pawn(this.color);
    			}
				}

				player1 = new Player('white');
				player2 = new Player('black');

				
				// function Piece () {
				// }

				function King () {
				}

				function Queen () {
				}
				function Bishop () {
				}
				function Rook () {
				}
				function Knight () {
				}
				function Pawn () {
				}

				player1.initializePieces();

    		function Game (player1, player2) {
				    this.player1 = player1;
				    this.player2 = player2;
				    this.activePlayer = player1;
				    this.activateCells = function(){
				    	console.log("here");
							var letter_notation = ["a", "b", "c", "d", "e", "f", "g", "h"]
							var number_notation = ['1', '2', '3', '4', '5', '6', '7', '8'];
							var num = 1;
							for (var i = 0; i < 8; i++) {
								for (var d = 0; d < 8; d++) {
									var square_notation = letter_notation[i] + number_notation[d]
									eval("var cell" + num + "= new Cell(square_notation);");
									eval("cell" + num + ".findCoordinates()")
									console.log(eval("cell" + num))
									// eval("console.log(cell" + num + ".findCoordinates())")

									num += 1;
								}
							}


				    }
				};

				function Cell (notation) {
					this.notation = notation;
					this.occupied = undefined;
					this.findCoordinates = function(){
						// console.log('hererererre')
						var letter_notation = ["a", "b", "c", "d", "e", "f", "g", "h"]
						var number_notation = ['1', '2', '3', '4', '5', '6', '7', '8'];
							for (var i = 0; i < 8; i++) {
								if (this.notation[0] == letter_notation[i] ) {
									this.x = i;
								}
								if (this.notation[1] == number_notation[i] ) {
									this.y = i;
								}
							}						
					}
				}

				var game = new Game(player1, player2);
				game.activateCells();

    	}

 			$scope.init();	








				

				


















				// var foo = new Game()

    	// };














			function markDivs (){
				var letter_notation = ["a", "b", "c", "d", "e", "f", "g", "h"]
				var number_notation = [8, 7, 6, 5, 4, 3, 2, 1];
				_.each(number_notation, function(number, number_index){
					var divString = '';
					_.each(letter_notation, function(letter, letter_index){
						var notation = letter + number
						if (number_index % 2 == 0){
							if (letter_index % 2 == 0){
								divString = divString + '<div class="chess_square white '+notation+'"></div>';
							}
							else{
								divString = divString + '<div class="chess_square black '+notation+'"></div>';
							}
						}
						else{
							if (letter_index % 2 == 0){
								divString = divString + '<div class="chess_square black '+notation+'"></div>';
							}
							else{
								divString = divString + '<div class="chess_square white '+notation+'"></div>';
							}
						}
					});
					$('#chess_board').append(divString);
				});

			};















    });

