angular.module('AngChess').controller('ChessGameCtrl', function ($scope) {
		$scope.init = function(){
			drawChessBoard();
			$('.a1').append('<img class="chess_piece" src="assets/white_rook.png" alt="image">')

		};

		$scope.init();

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

		function colorSquares(number_index, letter_index){
			if ((number_index % 2 == 0 && letter_index % 2 == 0) || (number_index % 2 != 0 && letter_index % 2 != 0)){
				return "square_color1";
			}
			else if ((number_index % 2 == 0 && letter_index % 2 != 0) || (number_index % 2 != 0 && letter_index % 2 == 0)){
				return "square_color2";
			};

		};
	};
});

