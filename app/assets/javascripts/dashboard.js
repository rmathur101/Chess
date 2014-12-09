// // Shorthand for $( document ).ready()
// $(function() {



// 	var letter_notation = ["a", "b", "c", "d", "e", "f", "g", "h"]
// 	var number_notation = [8, 7, 6, 5, 4, 3, 2, 1];

// 	markDivs();

// 	function markDivs (){
// 			var change = true;
// 		_.each(number_notation, function(number, number_index){
// 			var divString = '';
// 			var change = !change;
// 			_.each(letter_notation, function(letter, letter_index){
// 				var notation = letter + number
// 				if (number_index % 2 == 0){
// 					if (letter_index % 2 == 0){
// 						divString = divString + '<div class="chess_square white '+notation+'"></div>';
// 					}
// 					else{
// 						divString = divString + '<div class="chess_square black '+notation+'"></div>';
// 					}
// 				}
// 				else{
// 					if (letter_index % 2 == 0){
// 						divString = divString + '<div class="chess_square black '+notation+'"></div>';
// 					}
// 					else{
// 						divString = divString + '<div class="chess_square white '+notation+'"></div>';
// 					}
// 				}
// 			});
// 			$('#chess_board').append(divString);
// 		});

// 	};

// });