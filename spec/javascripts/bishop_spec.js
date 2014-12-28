describe("Bishop", function() {
	describe("#getRightDiagonalPositions", function() {
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
			bishop.squaresToPieces = {'a2': '', 'b3': '', 'd5': '', 'e6': '', 'f7': '', 'g8': ''};
			bishop.getDiagonalRightPositions();
			expect(bishop.possibles).toContain('d5');
			expect(bishop.possibles).toContain('e6');
			expect(bishop.possibles).toContain('f7');
			expect(bishop.possibles).toContain('g8');
			expect(bishop.possibles.length).toEqual(4);
		});

		it("adds possible positions to the diagonal up right until a friendly piece", function() {
		});

		it("adds possible positions to the diagonal up right until and including an enemy piece", function() {
		});

		it("adds possible positions to the diagonal down right if there are no pieces in the way", function() {

		});

		it("adds possible positions to the diagonal down right until a friendly piece", function() {
		});

		it("adds possible positions to the diagonal down right until and including an enemy piece", function() {
		});


	});

});