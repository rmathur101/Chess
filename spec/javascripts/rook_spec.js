describe("Rook", function() {
	describe("#getVerticalUpPositions", function() {
		var rook, enemy, friend;

		beforeEach(function() {
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

	describe("#getHorizontalRightPositions", function() {
		var rook, enemy, friend;

		beforeEach(function() {
		  rook = new Rook;
		  rook.color = 'black';
		  rook.position = 'd4';
		  rook.getCoordinates();
		  friend = new Pawn;
		  friend.color = 'black';
		  enemy = new Pawn;
		  enemy.color = 'white';
		});

		it("adds possible horizontal right positions if there are no pieces in the way", function() {
			rook.squaresToPieces = {'a4': '', 'b4': '', 'c4': '', 'e4': '', 'f4': '', 'g4': '', 'h4': ''};
			rook.getHorizontalRightPositions();
			expect(rook.possibles).toContain('e4');
			expect(rook.possibles).toContain('f4');
			expect(rook.possibles).toContain('g4');
			expect(rook.possibles).toContain('h4');
			expect(rook.possibles.length).toEqual(4);
		});

		it("adds possible horizontal right positions until a friendly piece", function() {
			rook.squaresToPieces = {'a4': '', 'b4': '', 'c4': '', 'e4': '', 'f4': friend, 'g4': friend, 'h4': friend};
			rook.getHorizontalRightPositions();
			expect(rook.possibles).toContain('e4');
			expect(rook.possibles.length).toEqual(1);
		});

		it("adds possible horizontal right positions until and including an enemy piece", function() {
			rook.squaresToPieces = {'a4': '', 'b4': '', 'c4': '', 'e4': '', 'f4': enemy, 'g4': enemy, 'h4': enemy};
			rook.getHorizontalRightPositions();
			expect(rook.possibles).toContain('e4');
			expect(rook.possibles).toContain('f4');
			expect(rook.possibles.length).toEqual(2);
		});
	});

	describe("#getHorizontalLeftPositions", function() {
		var rook, enemy, friend;

		beforeEach(function() {
		  rook = new Rook;
		  rook.color = 'black';
		  rook.position = 'd4';
		  rook.getCoordinates();
		  friend = new Pawn;
		  friend.color = 'black';
		  enemy = new Pawn;
		  enemy.color = 'white';
		});

		it("adds possible horizontal left positions if there are no pieces in the way", function() {
			rook.squaresToPieces = {'a4': '', 'b4': '', 'c4': '', 'e4': '', 'f4': '', 'g4': '', 'h4': ''};
			rook.getHorizontalLeftPositions();
			expect(rook.possibles).toContain('c4');
			expect(rook.possibles).toContain('b4');
			expect(rook.possibles).toContain('a4');
			expect(rook.possibles.length).toEqual(3);
		});

		it("adds possible horizontal left positions until a friendly piece", function() {
			rook.squaresToPieces = {'a4': friend, 'b4': '', 'c4': '', 'e4': '', 'f4': friend, 'g4': friend, 'h4': friend};
			rook.getHorizontalLeftPositions();
			expect(rook.possibles).toContain('c4');
			expect(rook.possibles).toContain('b4');
			expect(rook.possibles.length).toEqual(2);
		});

		it("adds possible horizontal left positions until and including an enemy piece", function() {
			rook.squaresToPieces = {'a4': '', 'b4': '', 'c4': enemy, 'e4': '', 'f4': enemy, 'g4': enemy, 'h4': enemy};
			rook.getHorizontalLeftPositions();
			expect(rook.possibles).toContain('c4');
			expect(rook.possibles.length).toEqual(1);
		});
	});
});