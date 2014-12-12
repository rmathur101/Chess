angular.module('AngChess').controller('ChessGameCtrl', ['$scope', function ($scope) {
	$scope.init = function(){
		createGame();

		//testing.....................................................

		// console.log($('#a1').find(':first').attr('id'));
		// $('#chess_board').append('<img id="whitePawn8" class="chess_piece white" src='+CHESS_PIECE_IMAGES['whitePawn1']+' alt="image">');


		// pawn = new Pawn();
		// pawn.init('whitePawn1', 'e1');

		//testing.....................................................


		$('.chess_piece').draggable({
	 		revert: "invalid"
	  });

    $('.chess_square').droppable({
      drop: function(event, ui) {
      	var square = $('#' + event.target.id);
      	var piece = $('#' + event.toElement.id);
      	square.empty();
      	square.append(piece);
      	piece.css("position", "relative");
      	piece.css("left", '0px');
      	piece.css("right", '0px');
      	piece.css("top", '0px');
      	piece.css("bottom", '0px');

      	$(ui.draggable).draggable({"disabled":false});
      }
    });
	};

	$scope.init();

	function createGame(){
		drawChessBoard();
		player1 = new Player('white');
		player2 = new Player('black');
		var game = new Game(player1, player2);
		game.populatePieces();
	};
}]);


