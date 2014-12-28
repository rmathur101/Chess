describe("Rook", function() {
	describe("#getVerticalUpPositions", function() {
		var rook, enemy, friend;

		beforeEach(function() {
		  initializeRookConstructor();
		  rook = new Rook;
		  rook.color = 'white';
		  rook.position = 'b3';
		  rook.getCoordinates();
		  friend = new Pawn;
		  friend.color = 'white';
		  enemy = new Pawn;
		  enemy.color = 'black';
		});

		it("adds possible vertical positions if there are no pieces in the way", function() {
			rook.squaresToPieces = {'b1': '', 'b2': '', 'b4': '', 'b5': '', 'b6': '', 'b7': '', 'b8': ''};
			rook.getVerticalUpPositions();
			expect(rook.possibles).toContain('b4');
			expect(rook.possibles).toContain('b5');
			expect(rook.possibles).toContain('b6');
			expect(rook.possibles).toContain('b7');
			expect(rook.possibles).toContain('b8');
			expect(rook.possibles.length).toEqual(5);
		});

		it("adds possible vertical positions until a friendly piece", function() {
			rook.squaresToPieces = {'b1': '', 'b2': '', 'b4': '', 'b5': '', 'b6': friend, 'b7': '', 'b8': ''};
			rook.getVerticalUpPositions();
			expect(rook.possibles).toContain('b4');
			expect(rook.possibles).toContain('b5');
			expect(rook.possibles.length).toEqual(2);
		});

		it("adds possible vertical positions until and including an enemy piece", function() {
			rook.squaresToPieces = {'b1': '', 'b2': '', 'b4': '', 'b5': '', 'b6': enemy, 'b7': '', 'b8': ''};
			rook.getVerticalUpPositions();
			expect(rook.possibles).toContain('b4');
			expect(rook.possibles).toContain('b5');
			expect(rook.possibles).toContain('b6');
			expect(rook.possibles.length).toEqual(3);
		});
	});

	describe("#getVerticalDownPositions", function() {
		var rook, enemy, friend;

		beforeEach(function() {
		  initializeRookConstructor();
		  rook = new Rook;
		  rook.color = 'white';
		  rook.position = 'b3';
		  rook.getCoordinates();
		  friend = new Pawn;
		  friend.color = 'white';
		  enemy = new Pawn;
		  enemy.color = 'black';
		});

		it("adds possible vertical down positions if there are no pieces in the way", function() {
			rook.squaresToPieces = {'b1': '', 'b2': '', 'b4': '', 'b5': '', 'b6': '', 'b7': '', 'b8': ''};
			rook.getVerticalDownPositions();
			expect(rook.possibles).toContain('b2');
			expect(rook.possibles).toContain('b1');
			expect(rook.possibles.length).toEqual(2);
		});

		it("adds possible vertical down positions until a friendly piece", function() {
			rook.squaresToPieces = {'b1': friend, 'b2': '', 'b4': '', 'b5': '', 'b6': friend, 'b7': '', 'b8': ''};
			rook.getVerticalDownPositions();
			expect(rook.possibles).toContain('b2');
			expect(rook.possibles.length).toEqual(1);
		});

		it("adds possible vertical down positions until and including an enemy piece", function() {
			rook.squaresToPieces = {'b1': enemy, 'b2': enemy, 'b4': '', 'b5': '', 'b6': enemy, 'b7': '', 'b8': ''};
			rook.getVerticalDownPositions();
			expect(rook.possibles).toContain('b2');
			expect(rook.possibles.length).toEqual(1);
		});
	});

	// describe("#getHorizontalRightPositions", function() {

	// });

	// describe("#getHorizontalLeftPositions", function() {

	// });

});