describe("Pawn", function() {

	// describe("findPossiblesWhite", function() {

	// });


	// describe("#forwardMovement", function() {
	//   beforeEach(function() {
	//   	initializePawnConstructor();
	// 		pawn = new Pawn;
	// 		pawn.position = "e4";
	// 		pawn.getCoordinates();
	// 		pawn.firstMoveTaken = true;
	//   });

	// 	it("populates possibles with all possible squares for a white piece", function() {
	// 		pawn.color = 'white';
	// 		pawn.forwardMovement();
	// 		expect(pawn.possibles).toContain('e5');
	// 	});

	// 	it("populates possibles with all possible squares for a black piece", function() {
	// 		pawn.color = 'black';
	// 		pawn.forwardMovement();
	// 		expect(pawn.possibles).toContain('e3');
	// 	});
	// });

	// describe("#forwardMovementBlack", function() {
	//   var pawn;

	//   beforeEach(function() {
	//   	initializePawnConstructor();
	// 		pawn = new Pawn;
	// 		pawn.color = 'black';
	// 		pawn.position = "c4";
	// 		pawn.getCoordinates();
	//   });

	//   it("returns possible squares for forward movement for black when first move", function() {
	//   	pawn.forwardMovementBlack();
	//   	expect(pawn.possibles).toContain('c3');
	//   	expect(pawn.possibles).toContain('c2');
	//   	expect(pawn.possibles.length).toEqual(2);
	//   });

	//   it("returns possible squares for forward movement for black when not first move", function() {
	//   	pawn.firstMoveTaken = true;
	//   	pawn.forwardMovementBlack();
	//   	expect(pawn.possibles).toContain('c3');
	//   	expect(pawn.possibles.length).toEqual(1);
	//   });
	// });

	// describe("#forwardMovementWhite", function() {
	// 	var pawn;

	// 	beforeEach(function() {
	// 		initializePawnConstructor();
	// 		pawn = new Pawn;
	// 		pawn.color = 'white';
	// 		pawn.position = "a2";
	// 		pawn.getCoordinates();
	// 	});

	// 	it("returns possible squares for forward movement for white when first move", function() {
	// 		pawn.forwardMovementWhite();
	// 		expect(pawn.possibles).toContain('a3');
	// 		expect(pawn.possibles).toContain('a4');
	// 		expect(pawn.possibles.length).toEqual(2);
	// 	});

	// 	it("returns possible squares for forward movement for white when not first move", function() {
	// 		pawn.firstMoveTaken = true;
	// 		pawn.forwardMovementWhite();
	// 		expect(pawn.possibles).toContain('a3');
	// 		expect(pawn.possibles.length).toEqual(1);
	// 	});
	// });

	// describe("#firstMoveBlack", function() {
	//   var pawn;

	//   beforeEach(function() {
	//   	initializePawnConstructor();
	// 		pawn = new Pawn;
	// 		pawn.color = 'black';
	// 		pawn.position = "h7";
	// 		pawn.getCoordinates();
	//   });

	//   it("does not add possible square if the first move has already been taken", function() {
	//   	pawn.firstMoveTaken = true;
	//   	pawn.firstMoveBlack();
	//   	expect(pawn.possibles.length).toEqual(0);
	//   });

	//   it("does not add possible square if there is already a piece in the next forward square", function() {
	//   	var opponent = new Piece;
	//   	pawn.squaresToPieces = {'h6': opponent,'h5': ''};
	//   	pawn.firstMoveBlack();
	//   	expect(pawn.possibles.length).toEqual(0);
	//   });

	//   it("does not add possible square if there is already a piece in the next next forward square", function() {
	//   	var opponent = new Piece;
	//   	pawn.squaresToPieces = {'h6': '' ,'h5': opponent};
	//   	pawn.firstMoveBlack();
	//   	expect(pawn.possibles.length).toEqual(0);
	//   });

	//   it("adds possible square if there are no pieces in the way", function() {
	//   	pawn.squaresToPieces = {'h6': '', 'h5': ''};
	//   	pawn.firstMoveBlack();
	//   	expect(pawn.possibles).toContain('h5');
	//   	expect(pawn.possibles.length).toEqual(1);
	//   });
	// });

	// describe("#firstMoveWhite", function() {
	//   var pawn;

	//   beforeEach(function() {
	//   	initializePawnConstructor();
	// 		pawn = new Pawn;
	// 		pawn.color = 'white';
	// 		pawn.position = "d2";
	// 		pawn.getCoordinates();
	//   });

	//   it("does not add possible square if the first move has already been taken", function() {
	//   	pawn.firstMoveTaken = true;
	//   	pawn.firstMoveWhite();
	//   	expect(pawn.possibles.length).toEqual(0);
	//   });

	//   it("does not add possible square if there is already a piece in the next forward square", function() {
	//   	var opponent = new Piece;
	//   	pawn.squaresToPieces = {'d3': opponent,'d4': ''};
	//   	pawn.firstMoveWhite();
	//   	expect(pawn.possibles.length).toEqual(0);
	//   });

	//   it("does not add possible square if there is already a piece in the next next forward square", function() {
	//   	var opponent = new Piece;
	//   	pawn.squaresToPieces = {'d3': '','d4': opponent};
	//   	pawn.firstMoveWhite();
	//   	expect(pawn.possibles.length).toEqual(0);
	//   });

	//   it("adds possible square if there are no pieces in the way", function() {
	// 		pawn.squaresToPieces = {'d3': '','d4': ''};
	//   	pawn.firstMoveWhite();
	//   	expect(pawn.possibles).toContain('d4');
	//   	expect(pawn.possibles.length).toEqual(1);
	//   });
	// });

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

