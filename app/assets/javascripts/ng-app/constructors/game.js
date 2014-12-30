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

    $('.chess_piece').unbind();

    $('.chess_piece.'+game.active).mouseover(function(){
      game.clearState();
      game.currentPiece = game.pieceIdToObject(this.id);
      game.currentPossibles = game.currentPiece.getPossibles(game.squaresToPieces);
      _.each(game.currentPossibles, function(x){
        $('#' + x).addClass('highlight_square');
      });
    });

    $('.chess_square').mouseout(function(){
      $('.chess_square').removeClass('highlight_square');
    });

    $('.chess_piece.'+game.active).draggable({revert: "invalid"});
    $('.chess_piece.'+game.active).mousedown(function(event){
      event.preventDefault();
      game.clearState();
      game.removeDroppable();
      game.currentPiece = game.pieceIdToObject(this.id);
      game.currentPossibles = game.currentPiece.getPossibles(game.squaresToPieces);
      game.dropPiece();
    });

  };

  this.dropPiece = function(){
    this.makeSquaresDroppable();
    var game = this;
    $('.drop_positions').droppable({
      drop: function(event, ui) {
        var oldPosition = game.currentPiece.position;
        var newPosition = event.target.id;
        game.placePiece(oldPosition, newPosition);
        game.modifyStyling();
        game.removeDraggable();
        game.changeActiveColor();
        game.listenForNewEvents();
        // square.empty();
      }
    });
  };

  this.placePiece = function(oldPosition, newPosition){
    this.capturePiece(newPosition);
    this.currentPiece.position = newPosition;
    this.currentPiece.firstMoveTaken = true;
    this.currentPiece.clearState();
    this.squaresToPieces[newPosition] = this.squaresToPieces[oldPosition];
    this.squaresToPieces[oldPosition] = "";
    $('#'+newPosition).append($('#'+this.currentPiece.name));
  };

  this.capturePiece = function(newPosition){
    var capturedPiece = this.squaresToPieces[newPosition];
    if (capturedPiece.color == 'white'){
      $('#white_graveyard').append($('#' + capturedPiece.name));
      capturedPiece.captured = true;
    }
    else if (capturedPiece.color == 'black'){
      $('#black_graveyard').append($('#' + capturedPiece.name));
      capturedPiece.captured = true;
    };
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

  this.removeDroppable = function(){
    $('.drop_positions').droppable('destroy');
    $('.drop_positions').removeClass('drop_positions');
  };

  this.removeDraggable = function(){
    $('.chess_piece.ui-draggable').draggable('destroy');
  };

  this.modifyStyling = function(){
    var piece = $('#'+this.currentPiece.name);
    piece.css("position", "relative");
    piece.css("left", '0px');
    piece.css("right", '0px');
    piece.css("top", '0px');
    piece.css("bottom", '0px');
  };

  this.clearState = function(){
    this.currentPossibles = undefined;
    this.currentPiece = undefined;
  };
};
