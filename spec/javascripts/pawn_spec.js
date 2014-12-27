describe("Pawn", function() {

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
});

