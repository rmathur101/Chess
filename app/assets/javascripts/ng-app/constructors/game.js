function Game (player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.active = 'white';
  this.pieces = {};

  this.populatePieces = function(){
    for(piece in PIECE_INITIALIZATION){
      var pieceType = piece.match("[A-Z]{1}[a-z]+")[0];
      var image = PIECE_INITIALIZATION[piece].image;
      var position = PIECE_INITIALIZATION[piece].position;
      var newPiece = eval('new '+pieceType);
      newPiece.init(piece, image, position);
      this.pieces[piece] = newPiece;
    };
  };
};