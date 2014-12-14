describe("Pawn", function() {
	describe("#getPossiblePositions", function() {
	  beforeEach(function() {
	  	initializePawnConstructor();
			pawn = new Pawn;
	  	pawn.color = 'white';
			pawn.position = "a7";
			pawn.firstMoveTaken = true;
	  });

	  it("returns a collection of all possible squares", function() {
	  	expect(pawn.getPossiblePositions()).toContain('a8');
	  	expect(pawn.getPossiblePositions().length).toEqual(1);
	  });
	});

	describe("forwardMovement", function() {
	  beforeEach(function() {
	  	initializePawnConstructor();
			pawn = new Pawn;
			pawn.position = "e4";
			pawn.getCoordinates();
			pawn.firstMoveTaken = true;
	  });

		it("populates possibles with all possible squares for a white piece", function() {
			pawn.color = 'white';
			pawn.forwardMovement();
			expect(pawn.possibles).toContain('e5');
		});

		it("populates possibles with all possible squares for a black piece", function() {
			pawn.color = 'black';
			pawn.forwardMovement();
			expect(pawn.possibles).toContain('e3');
		});
	});

	describe("#forwardMovementBlack", function() {
	  var pawn;

	  beforeEach(function() {
	  	initializePawnConstructor();
			pawn = new Pawn;
			pawn.color = 'black';
			pawn.position = "c4";
			pawn.getCoordinates();
	  });

	  it("returns possible squares for forward movement for black when first move", function() {
	  	pawn.forwardMovementBlack();
	  	expect(pawn.possibles).toContain('c3');
	  	expect(pawn.possibles).toContain('c2');
	  	expect(pawn.possibles.length).toEqual(2);
	  });

	  it("returns possible squares for forward movement for black when not first move", function() {
	  	pawn.firstMoveTaken = true;
	  	pawn.forwardMovementBlack();
	  	expect(pawn.possibles).toContain('c3');
	  	expect(pawn.possibles.length).toEqual(1);
	  });
	});

	describe("#forwardMovementWhite", function() {
		var pawn;

		beforeEach(function() {
			initializePawnConstructor();
			pawn = new Pawn;
			pawn.color = 'white';
			pawn.position = "a2";
			pawn.getCoordinates();
		});

		it("returns possible squares for forward movement for white when first move", function() {
			pawn.forwardMovementWhite();
			expect(pawn.possibles).toContain('a3');
			expect(pawn.possibles).toContain('a4');
			expect(pawn.possibles.length).toEqual(2);
		});

		it("returns possible squares for forward movement for white when not first move", function() {
			pawn.firstMoveTaken = true;
			pawn.forwardMovementWhite();
			expect(pawn.possibles).toContain('a3');
			expect(pawn.possibles.length).toEqual(1);
		});
	});

	describe("#firstMoveBlack", function() {
	  var pawn;

	  beforeEach(function() {
	  	initializePawnConstructor();
			pawn = new Pawn;
			pawn.color = 'black';
			pawn.position = "h7";
			pawn.getCoordinates();
	  });

	  it("returns possible square for first move if first move has not been taken", function() {
	  	pawn.firstMoveBlack();
	  	expect(pawn.possibles).toContain('h5');
	  	expect(pawn.possibles.length).toEqual(1);
	  });

	  it("returns no possible square for first move if first move has not been taken", function() {
	  	pawn.firstMoveTaken = true;
	  	pawn.firstMoveBlack();
	  	expect(pawn.possibles.length).toEqual(0);
	  });
	});

	describe("#firstMoveWhite", function() {
	  var pawn;

	  beforeEach(function() {
	  	initializePawnConstructor();
			pawn = new Pawn;
			pawn.color = 'white';
			pawn.position = "d2";
			pawn.getCoordinates();
	  });

	  it("returns possible square for first move if first move has not been taken", function() {
	  	pawn.firstMoveWhite();
	  	expect(pawn.possibles).toContain('d4');
	  	expect(pawn.possibles.length).toEqual(1);
	  });

	  it("returns no possible square for first move if first move has not been taken", function() {
	  	pawn.firstMoveTaken = true;
	  	pawn.firstMoveWhite();
	  	expect(pawn.possibles.length).toEqual(0);
	  });
	});
});

