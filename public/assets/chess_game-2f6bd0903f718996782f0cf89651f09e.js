// Angular Rails Template
// source: app/assets/templates/chess_game.html

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("chess_game.html", '<h1>Chess</h1>\n\n<div id="chess_board">\n\n\n</div>\n\n<br><br>\n\n<img class="chess_piece" src="assets/black_king.png" alt="image">\n<img class="chess_piece" src="assets/white_king.png" alt="image">\n\n<img class="chess_piece" src="assets/black_rook.png" alt="image">\n<img class="chess_piece" src="assets/white_rook.png" alt="image">\n\n<img class="chess_piece" src="assets/black_bishop.png" alt="image">\n<img class="chess_piece" src="assets/white_bishop.png" alt="image">\n\n<img class="chess_piece" src="assets/black_knight.png" alt="image">\n<img class="chess_piece" src="assets/white_knight.png" alt="image">\n\n<img class="chess_piece" src="assets/black_pawn.png" alt="image">\n<img class="chess_piece" src="assets/white_pawn.png" alt="image">')
}]);

