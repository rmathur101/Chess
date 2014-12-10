function drawChessBoard(){
	_.each(NUMBER_NOTATION.reverse(), function(number, number_index){
		var divString = '';
		_.each(LETTER_NOTATION, function(letter, letter_index){
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
