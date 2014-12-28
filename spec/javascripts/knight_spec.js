describe("Knight", function() {
	describe("#getPossiblePositions", function() {
		var knight, enemy, friend;

		beforeEach(function() {
		  initializeKnightConstructor();
		  knight = new Knight;
		  knight.color = 'black';
		  knight.position = 'g7';
		  knight.getCoordinates();
		  friend = new Pawn;
		  friend.color = 'black';
		  enemy = new Pawn;
		  enemy.color = 'white';
		});

		it("adds possible squares for knight if there are no pieces in them", function() {
			knight.squaresToPieces = {'e8': '', 'e6': '', 'f5': '', 'h5': ''};
			knight.getPossiblePositions();
			expect(knight.possibles).toContain('e8');
			expect(knight.possibles).toContain('e6');
			expect(knight.possibles).toContain('f5');
			expect(knight.possibles).toContain('h5');
			expect(knight.possibles.length).toEqual(4);
		});

		it("adds possible squares for knight if there are enemy pieces in them", function() {
			knight.squaresToPieces = {'e8': enemy, 'e6': enemy, 'f5': enemy, 'h5': enemy};
			knight.getPossiblePositions();
			expect(knight.possibles).toContain('e8');
			expect(knight.possibles).toContain('e6');
			expect(knight.possibles).toContain('f5');
			expect(knight.possibles).toContain('h5');
			expect(knight.possibles.length).toEqual(4);
		});

		it("does not add any possible squares for knight if there are friendly pieces in them ", function() {
			knight.squaresToPieces = {'e8': friend, 'e6': friend, 'f5': friend, 'h5': friend};
			knight.getPossiblePositions();
			expect(knight.possibles.length).toEqual(0);
		});
	});
});