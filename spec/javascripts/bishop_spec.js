describe("Bishop", function() {
	describe("#getDiagonalUpRightPositions", function() {
		var bishop, enemy, friend;

		beforeEach(function() {
		  initializeBishopConstructor();
		  bishop = new Bishop;
		  bishop.color = 'white';
		  bishop.position = 'c4';
		  bishop.getCoordinates();
		  friend = new Pawn;
		  friend.color = 'white';
		  enemy = new Pawn;
		  enemy.color = 'black';
		});

		it("adds possible positions to the diagonal up right if there are no pieces in the way", function() {
			bishop.squaresToPieces = {'a2': '', 'b3': '', 'd5': '', 'e6': '', 'f7': friend, 'g8': ''};
			bishop.getDiagonalUpRightPositions();
			expect(bishop.possibles).toContain('d5');
			expect(bishop.possibles).toContain('e6');
			expect(bishop.possibles.length).toEqual(2);
		});

		it("adds possible positions to the diagonal up right until a friendly piece", function() {
			bishop.squaresToPieces = {'a2': '', 'b3': '', 'd5': '', 'e6': '', 'f7': '', 'g8': ''};
			bishop.getDiagonalUpRightPositions();
			expect(bishop.possibles).toContain('d5');
			expect(bishop.possibles).toContain('e6');
			expect(bishop.possibles).toContain('f7');
			expect(bishop.possibles).toContain('g8');
		});

		it("adds possible positions to the diagonal up right until and including an enemy piece", function() {
			bishop.squaresToPieces = {'a2': '', 'b3': '', 'd5': enemy, 'e6': '', 'f7': '', 'g8': ''};
			bishop.getDiagonalUpRightPositions();
			expect(bishop.possibles).toContain('d5');
			expect(bishop.possibles.length).toEqual(1);
		});
	});

	describe("#getDiagonalLeftDownPositions", function() {
		beforeEach(function() {
		  initializeBishopConstructor();
		  bishop = new Bishop;
		  bishop.color = 'white';
		  bishop.position = 'c4';
		  bishop.getCoordinates();
		  friend = new Pawn;
		  friend.color = 'white';
		  enemy = new Pawn;
		  enemy.color = 'black';
		});

		it("adds possible positions to the diagonal down left if there are no pieces in the way", function() {
			bishop.squaresToPieces = {'a2': '', 'b3': '', 'd5': '', 'e6': '', 'f7': '', 'g8': ''};
			bishop.getDiagonalDownLeftPositions();
			expect(bishop.possibles).toContain('b3');
			expect(bishop.possibles).toContain('a2');
			expect(bishop.possibles.length).toEqual(2);
		});

		it("adds possible positions to the diagonal down left until a friendly piece", function() {
			bishop.squaresToPieces = {'a2': '', 'b3': friend, 'd5': '', 'e6': '', 'f7': '', 'g8': ''};
			bishop.getDiagonalDownLeftPositions();
			expect(bishop.possibles.length).toEqual(0);
		});

		it("adds possible positions to the diagonal down left until and including an enemy piece", function() {
			bishop.squaresToPieces = {'a2': '', 'b3': enemy, 'd5': '', 'e6': '', 'f7': '', 'g8': ''};
			bishop.getDiagonalDownLeftPositions();
			expect(bishop.possibles).toContain('b3');
			expect(bishop.possibles.length).toEqual(1);
		});
	});
});