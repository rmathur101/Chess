	function Game (player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.activePlayer = player1;
    this.squares = {};
    this.pieceToSquare = {};

    this.activateSquares = function(){
			for (var i = 0; i < 8; i++) {
				for (var d = 0; d < 8; d++) {
					var square_notation = LETTER_NOTATION[i] + NUMBER_NOTATION[d]
          this.squares[square_notation] = new Square(square_notation)
          this.populatePawns(square_notation)
				};
			};
      this.populateMajorPieces();
    };

		this.populatePawns = function(square_notation){
      var letter = square_notation[0];
      var number = square_notation[1];

      if (number == '2') {
        for (var i = 0; i < 8; i++) {
          if (letter == LETTER_NOTATION[i] ) {
            var piece = 'whitePawn' + (i + 1)
            this.pieceToSquare[piece] = this.squares[square_notation]
            var pawn = new Pawn('white');
            pawn.image = '<img class="chess_piece white" id="' + piece + '" src="assets/white_pawn.png" alt="white_pawn">'
            this.squares[square_notation].occupied = pawn;
          }
        }
      }
      else if (number == '7') {
        for (var i = 0; i < 8; i++) {
          if (letter == LETTER_NOTATION[i] ) {
            var piece = 'blackPawn' + (i + 1)
            this.pieceToSquare[piece] = this.squares[square_notation]
            var pawn = new Pawn('black');
            pawn.image = '<img class="chess_piece black" id="' + piece + '" src="assets/black_pawn.png" alt="black_pawn">'
            this.squares[square_notation].occupied = pawn;
          }
        }
      }
    };

    this.populateImages = function(){
      for (piece in this.pieceToSquare) {
        var notation_class = "#" + this.pieceToSquare[piece].notation;
        $(notation_class).append(this.pieceToSquare[piece].occupied.image);
      };
    };

    this.populateMajorPieces = function(){
      this.pieceToSquare['whiterook1'] = this.squares['a1'];
      	whiterook1 = new Rook ('white');
      	whiterook1.image = '<img id="whiterook1" class="chess_piece white" src="assets/white_rook.png" alt="image">';
        this.squares['a1'].occupied = whiterook1;

      this.pieceToSquare['whiteknight1'] = this.squares['b1'];
      	whiteknight1 = new Knight('white');
      	whiteknight1.image = '<img id="whiteknight1" class="chess_piece white" src="assets/white_knight.png" alt="image">';
        this.squares['b1'].occupied = whiteknight1;

      this.pieceToSquare['whitebishop1'] = this.squares['c1'];
      	whitebishop1 = new Bishop('white');
      	whitebishop1.image = '<img id="whitebishop1" class="chess_piece white" src="assets/white_bishop.png" alt="image">';
        this.squares['c1'].occupied = whitebishop1;

      this.pieceToSquare['whitequeen'] = this.squares['d1'];
      	whitequeen = new Queen('white');
      	whitequeen.image = '<img id="whitequeen" class="chess_piece white" src="assets/white_queen.png" alt="image">';
        this.squares['d1'].occupied = whitequeen;

      this.pieceToSquare['whiteking'] = this.squares['e1'];
      	whiteking = new King('white');
      	whiteking.image = '<img id="whiteking" class="chess_piece white" src="assets/white_king.png" alt="image">';
        this.squares['e1'].occupied = whiteking;

      this.pieceToSquare['whitebishop2'] = this.squares['f1'];
      	whitebishop2 = new Bishop('white');
      	whitebishop2.image = '<img id="whitebishop2" class="chess_piece white" src="assets/white_bishop.png" alt="image">';
        this.squares['f1'].occupied = whitebishop2;

      this.pieceToSquare['whiteknight2'] = this.squares['g1'];
      	whiteknight2 = new Knight('white');
      	whiteknight2.image = '<img id="whiteknight2" class="chess_piece white" src="assets/white_knight.png" alt="image">';
        this.squares['g1'].occupied = whiteknight2;

      this.pieceToSquare['whiterook2'] = this.squares['h1'];
      	whiterook2 = new Rook('white');
      	whiterook2.image = '<img id="whiterook2" class="chess_piece white" src="assets/white_rook.png" alt="image">';
        this.squares['h1'].occupied = whiterook2;

      this.pieceToSquare['blackrook1'] = this.squares['a8'];
        blackrook1 = new Rook('black');
      	blackrook1.image = '<img id="blackrook1" class="chess_piece black" src="assets/black_rook.png" alt="image">';
        this.squares['a8'].occupied = blackrook1;

      this.pieceToSquare['blackknight1'] = this.squares['b8'];
      	blackknight1 = new Knight('black');
      	blackknight1.image = '<img id="blackknight1" class="chess_piece black" src="assets/black_knight.png" alt="image">';
        this.squares['b8'].occupied = blackknight1;

      this.pieceToSquare['blackbishop1'] = this.squares['c8'];
      	blackbishop1 = new Bishop('black');
      	blackbishop1.image = '<img id="blackbishop1" class="chess_piece black" src="assets/black_bishop.png" alt="image">';
        this.squares['c8'].occupied = blackbishop1;

      this.pieceToSquare['blackqueen'] = this.squares['d8'];
      	blackqueen = new Queen('black');
      	blackqueen.image = '<img id="blackqueen" class="chess_piece black" src="assets/black_queen.png" alt="image">';
        this.squares['d8'].occupied = blackqueen;

      this.pieceToSquare['blackking'] = this.squares['e8'];
      	blackking = new King('black');
      	blackking.image = '<img id="blackking" class="chess_piece black" src="assets/black_king.png" alt="image">';
        this.squares['e8'].occupied = blackking;

      this.pieceToSquare['blackbishop2'] = this.squares['f8'];
      	blackbishop2 = new Bishop('black');
      	blackbishop2.image = '<img id="blackbishop2" class="chess_piece black" src="assets/black_bishop.png" alt="image">';
        this.squares['f8'].occupied = blackbishop2;

      this.pieceToSquare['blackknight2'] = this.squares['g8'];
      	blackknight2 = new Knight('black');
      	blackknight2.image = '<img id="blackknight2" class="chess_piece black" src="assets/black_knight.png" alt="image">';
        this.squares['g8'].occupied = blackknight2;

      this.pieceToSquare['blackrook2'] = this.squares['h8'];
      	blackrook2 = new Rook('black');
      	blackrook2.image = '<img id="blackrook2" class="chess_piece black" src="assets/black_rook.png" alt="image">';
        this.squares['h8'].occupied = blackrook2;
    };
	};