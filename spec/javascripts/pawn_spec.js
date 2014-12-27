describe("Pawn", function() {

	describe("#getPossiblesDiagonalBlack", function() {
	});

	describe("#getPossibleFirstMoveWhite", function() {
		var pawn;

	  beforeEach(function() {
	  	initializePawnConstructor();
			pawn = new Pawn;
			pawn.color = 'white';
			pawn.position = "d2";
			pawn.getCoordinates();
	  });

		it("adds possible if there is no piece in next and next next square", function() {
			pawn.squaresToPieces = {'d3': '', 'd4': ''};
			pawn.getPossibleFirstMoveWhite();
			expect(pawn.possibles).toContain('d4');
			expect(pawn.possibles.length).toEqual(1);
		});

		it("adds no possible if there is a piece in the next square and the next next square", function(){
			pawn.squaresToPieces = {'d3': 'x', 'd4': 'x'};
			pawn.getPossibleFirstMoveWhite();
			expect(pawn.possibles.length).toEqual(0);
		});

		it("adds no possible if there is a piece in the next square", function(){
			pawn.squaresToPieces = {'d3': 'x', 'd4': ''};
			pawn.getPossibleFirstMoveWhite();
			expect(pawn.possibles.length).toEqual(0);
		});

		it("adds no possible if there is a piece in the next next square", function(){
			pawn.squaresToPieces = {'d3': '', 'd4': 'x'};
			pawn.getPossibleFirstMoveWhite();
			expect(pawn.possibles.length).toEqual(0);
		});

		it("adds no possible if the first move has already been taken", function(){
			pawn.firstMoveTaken = true;
			pawn.squaresToPieces = {'d3': '', 'd4': ''};
			pawn.getPossibleFirstMoveWhite();
			expect(pawn.possibles.length).toEqual(0);
		});
	});

	describe("#getPossibleFirstMoveBlack", function() {
		var pawn;

	  beforeEach(function() {
	  	initializePawnConstructor();
			pawn = new Pawn;
			pawn.color = 'black';
			pawn.position = "f7";
			pawn.getCoordinates();
	  });

		it("adds possible if there is no piece in next and next next square", function() {
			pawn.squaresToPieces = {'f6': '', 'f5': ''};
			pawn.getPossibleFirstMoveBlack();
			expect(pawn.possibles).toContain('f5');
			expect(pawn.possibles.length).toEqual(1);
		});

		it("adds no possible if there is a piece in the next square and the next next square", function(){
			pawn.squaresToPieces = {'f6': 'x', 'f5': 'x'};
			pawn.getPossibleFirstMoveBlack();
			expect(pawn.possibles.length).toEqual(0);
		});

		it("adds no possible if there is a piece in the next square", function(){
			pawn.squaresToPieces = {'f6': 'x', 'f5': ''};
			pawn.getPossibleFirstMoveBlack();
			expect(pawn.possibles.length).toEqual(0);
		});

		it("adds no possible if there is a piece in the next next square", function(){
			pawn.squaresToPieces = {'f6': '', 'f5': 'x'};
			pawn.getPossibleFirstMoveBlack();
			expect(pawn.possibles.length).toEqual(0);
		});

		it("adds no possible if the first move has already been taken", function(){
			pawn.firstMoveTaken = true;
			pawn.squaresToPieces = {'f6': '', 'f5': ''};
			pawn.getPossibleFirstMoveBlack();
			expect(pawn.possibles.length).toEqual(0);
		});
	});

	describe("#getPossibleForwardWhite", function() {
		var pawn;

	  beforeEach(function() {
	  	initializePawnConstructor();
			pawn = new Pawn;
			pawn.color = 'white';
	  });

		it("adds no possibles if there is a piece in the next square", function() {
			pawn.position = "b4";
			pawn.getCoordinates();
			pawn.squaresToPieces = {'b5': 'x'};
			pawn.getPossibleForwardWhite();
			expect(pawn.possibles.length).toEqual(0);
		});

		it("adds a possible if there is a no piece in the next square", function() {
			pawn.position = "b4";
			pawn.getCoordinates();
			pawn.squaresToPieces = {'b5': ''};
			pawn.getPossibleForwardWhite();
			expect(pawn.possibles).toContain('b5');
			expect(pawn.possibles.length).toEqual(1);
		});

		it("adds no possibles if the pawn has reached the edge of the board", function() {
	  	pawn.position = "a8";
	  	pawn.getCoordinates();
	    pawn.getPossibleForwardWhite();
	    expect(pawn.possibles.length).toEqual(0);
		});
	});

	describe("#getPossibleForwardBlack", function() {
		var pawn;

	  beforeEach(function() {
	  	initializePawnConstructor();
			pawn = new Pawn;
			pawn.color = 'black';
	  });

	  it("adds no possibles if there is a piece in the next square", function() {
	  	pawn.position = "g4";
	  	pawn.getCoordinates();
	    pawn.squaresToPieces = {'g3': 'x'};
	    pawn.getPossibleForwardBlack();
	    expect(pawn.possibles.length).toEqual(0);
	  });

	  it("adds a possible if there is no piece in the next square", function() {
	  	pawn.position = "g4";
	  	pawn.getCoordinates();
	    pawn.squaresToPieces = {'g3': ''};
	    pawn.getPossibleForwardBlack();
	    expect(pawn.possibles).toContain('g3');
	    expect(pawn.possibles.length).toEqual(1);
	  });


	  it("adds no possibles if the pawn has reached the edge of the board", function() {
	  	pawn.position = "g1";
	  	pawn.getCoordinates();
	    pawn.getPossibleForwardBlack();
	    expect(pawn.possibles.length).toEqual(0);
	  });

	});

	describe("#getPossiblesDiagonalWhite", function() {
		var pawn, enemy, friend;

		beforeEach(function() {
		  initializePawnConstructor();
		  pawn = new Pawn;
		  pawn.color = 'white';
		  pawn.position = 'c3';
		  pawn.getCoordinates();
			enemy = new Pawn;
			enemy.color = 'black';
			friend = new Pawn;
			friend.color = 'white'
		});

		it('adds no possibles if the there are no enemies diagonal to the piece', function(){
			pawn.squaresToPieces = {'d4': '', 'b4': ''};
			pawn.getPossiblesDiagonalWhite();
			expect(pawn.possibles.length).toEqual(0);
		});

		it('adds possible if there is an enemy to the diagonal right', function(){;
			pawn.squaresToPieces = {'d4': enemy, 'b4': friend};
			pawn.getPossiblesDiagonalWhite();
			expect(pawn.possibles).toContain('d4');
			expect(pawn.possibles.length).toEqual(1);
		});

		it('adds possible if there is an enemy to the diagonal left', function(){
			pawn.squaresToPieces = {'d4': friend , 'b4': enemy};
			pawn.getPossiblesDiagonalWhite();
			expect(pawn.possibles).toContain('b4');
			expect(pawn.possibles.length).toEqual(1);
		});
	});

	describe("#getPossiblesDiagonalBlack", function() {
		var pawn, enemy, friend;

		beforeEach(function() {
		  initializePawnConstructor();
		  pawn = new Pawn;
		  pawn.color = 'black';
		  pawn.position = 'g3';
		  pawn.getCoordinates();
		  enemy = new Pawn;
		  enemy.color = 'white';
		  friend = new Pawn;
		  friend.color = 'black';
		});

		it('adds no possibles if the there are no enemies diagonal to the piece', function(){
			pawn.squaresToPieces = {'f2': '', 'h2': ''};
			pawn.getPossiblesDiagonalBlack();
			expect(pawn.possibles.length).toEqual(0);
		});
	});
});

