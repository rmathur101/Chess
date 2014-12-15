function Game (player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.active = 'white';
  this.squaresToPieces = {};
  this.currentPossibles = undefined;
  this.currentPiece = undefined;

  this.initializeSquaresToPiecesDictionary = function(){
    this.createSquaresToPiecesDictionary();
    this.populatePieces();
  };

  this.createSquaresToPiecesDictionary = function(){
    for(letter in LETTER_NOTATION){
      for(number in NUMBER_NOTATION){
        this.squaresToPieces[LETTER_NOTATION[letter] + NUMBER_NOTATION[number]] = '';
      }
    };
  };

  this.populatePieces = function(){
    for(piece in PIECE_INITIALIZATION){
      var pieceType = piece.match("[A-Z]{1}[a-z]+")[0];
      var image = PIECE_INITIALIZATION[piece].image;
      var position = PIECE_INITIALIZATION[piece].position;
      var newPiece = eval('new '+pieceType);
      newPiece.init(piece, image, position);
      this.squaresToPieces[position] = newPiece;
    };
  };


  this.listenForNewEvents = function(){
    var game = this;
    $('.chess_piece.'+game.active).draggable({revert: "invalid"});
    $('.chess_piece.'+game.active).mousedown(function(){
      game.currentPiece = game.pieceIdToObject(this.id);
      game.currentPossibles = game.currentPiece.getPossiblePositions(game.squaresToPieces);
      game.dropPiece();
    });
  };


  this.dropPiece = function(){
    this.makeSquaresDroppable();
    var game = this;
    $('.drop_positions').droppable({
      drop: function(event, ui) {
        // var square = $('#' + event.target.id);
        var piece = $('#' + event.toElement.id);
        var oldPosition = game.currentPiece.position;
        var newPosition = event.target.id;
        // game.updateSquaresToPieces(game.currentPiece.position, square[0].id);
        // game.currentPiece.placePiece(square[0].id);
        game.placePiece(oldPosition, newPosition);
        game.modifyStyling(piece);
        game.removeDraggableAndDroppable();
        game.changeActiveColor();
        game.listenForNewEvents();
        // square.empty();
      }
    });
  };

  this.placePiece = function(oldPosition, newPosition){
    this.currentPiece.position = newPosition;
    this.currentPiece.firstMoveTaken = true;
    this.currentPiece.clearState();
    $('#'+newPosition).append($('#'+this.currentPiece.name));
    this.squaresToPieces[newPosition] = this.squaresToPieces[oldPosition];
    this.squaresToPieces[oldPosition] = "";
  };

  this.updateSquaresToPieces = function(oldPosition, newPosition) {
    this.squaresToPieces[newPosition] = this.squaresToPieces[oldPosition];
    this.squaresToPieces[oldPosition] = "";
  };

  this.pieceIdToObject = function(pieceId){
    var selectedSquare = ($('#' + pieceId).parent());
    return this.squaresToPieces[selectedSquare[0].id];
  };

  this.changeActiveColor = function(){
    if (this.active == 'white'){
      this.active = 'black'
    }
    else{
      this.active = 'white'
    };
  };

  this.makeSquaresDroppable = function() {
    _.each(this.currentPossibles, function(position){
      $('#'+position).addClass('drop_positions');
    });
  };

  this.removeDraggableAndDroppable = function(){
    $('.drop_positions').droppable('destroy');
    $('.chess_piece.ui-draggable').draggable('destroy');
    $('.drop_positions').removeClass('drop_positions');
  };

  this.modifyStyling = function(piece){
    piece.css("position", "relative");
    piece.css("left", '0px');
    piece.css("right", '0px');
    piece.css("top", '0px');
    piece.css("bottom", '0px');
  };
};
