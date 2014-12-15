function Game (player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  this.active = 'white';
  this.pieces = {};
  this.squares = {};
  this.possibles = undefined;
  this.currentPiece = undefined;

  this.connectPieceToSquare = function(piece, position){
    this.squares[position] = piece
  };

  this.createPiecesDictionary = function(){
    for(piece in PIECE_INITIALIZATION){
      var pieceType = piece.match("[A-Z]{1}[a-z]+")[0];
      var image = PIECE_INITIALIZATION[piece].image;
      var position = PIECE_INITIALIZATION[piece].position;
      var newPiece = eval('new '+pieceType);
      newPiece.init(piece, image, position);
      this.pieces[piece] = newPiece;
      this.connectPieceToSquare(piece, position);
    };
  };

  this.createSquaresDictionary = function(){
    for(letter in LETTER_NOTATION){
      for(number in NUMBER_NOTATION){
        this.squares[LETTER_NOTATION[letter] + NUMBER_NOTATION[number]] = '';
      }
    };
  };

  this.initializeDictionaries = function(){
    this.createSquaresDictionary();
    this.createPiecesDictionary();
  };

  this.listenForEvents = function(){
    var game = this;
    $('.chess_piece').draggable({revert: "invalid"});
    $('.chess_piece').mousedown(function(){movePiece(game, this)});
  };

  function movePiece(game, selectedPiece){
    game.currentPiece = game.pieces[selectedPiece.id];
    game.possibles = game.currentPiece.getPossiblePositions();
    dropPiece(game);
  };

  function makeSquaresDroppable(possibles) {
    _.each(possibles, function(position){
      $('#'+position).addClass('drop_positions');
    });
  };

  function removeSquaresDroppable(){
    $('.drop_positions').droppable('destroy');
    $('.drop_positions').removeClass('drop_positions');
  };

  function dropPiece(game){
    makeSquaresDroppable(game.possibles);
    $('.drop_positions').droppable({
      drop: function(event, ui) {
        var square = $('#' + event.target.id);
        var piece = $('#' + event.toElement.id);
        updateSquares(game, game.currentPiece.position, square[0].id)
        game.currentPiece.placePiece(square[0].id);
        modifyStyling(piece);
        removeSquaresDroppable();
        // square.empty();
      }
    });
  };

  function updateSquares(game, oldPosition, newPosition) {
    game.squares[oldPosition] = "";
    game.squares[newPosition] = game.currentPiece.name;
  };

  function modifyStyling(piece){
    piece.css("position", "relative");
    piece.css("left", '0px');
    piece.css("right", '0px');
    piece.css("top", '0px');
    piece.css("bottom", '0px');
  };
};
