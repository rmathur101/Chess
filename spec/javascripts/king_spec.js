describe("King", function() {
	describe("#getAllPositions", function() {
		var king, enemy, friend;

		beforeEach(function() {
		  king = new King;
		  king.color = 'black';
		  king.position = 'g7';
		  king.getCoordinates();
		  friend = new Pawn;
		  friend.color = 'black';
		  enemy = new Pawn;
		  enemy.color = 'white';
		});

		it("adds possible squares for king if there are no pieces in them", function() {
			king.squaresToPieces = {'f8': '', 'g8': '', 'h8': '', 'f7': '', 'h7': '', 'f6': '', 'g6': '', 'h6': ''};
			king.getAllPositions();
			expect(king.possibles).toContain('f8');
			expect(king.possibles).toContain('g8');
			expect(king.possibles).toContain('h8');
			expect(king.possibles).toContain('f7');
			expect(king.possibles).toContain('h7');
			expect(king.possibles).toContain('f6');
			expect(king.possibles).toContain('g6');
			expect(king.possibles).toContain('h6');
			expect(king.possibles.length).toEqual(8);
		});

		it("adds possible squares for king if there are enemy pieces in them", function() {
			king.squaresToPieces = {'f8': enemy, 'g8': enemy, 'h8': enemy, 'f7': enemy, 'h7': enemy, 'f6': enemy, 'g6': enemy, 'h6': enemy};
			king.getAllPositions();
			expect(king.possibles).toContain('f8');
			expect(king.possibles).toContain('g8');
			expect(king.possibles).toContain('h8');
			expect(king.possibles).toContain('f7');
			expect(king.possibles).toContain('h7');
			expect(king.possibles).toContain('f6');
			expect(king.possibles).toContain('g6');
			expect(king.possibles).toContain('h6');
			expect(king.possibles.length).toEqual(8);
		});

		it("does not add any possible squares for king if there are friendly pieces in them ", function() {
			king.squaresToPieces = {'f8': friend, 'g8': friend, 'h8': friend, 'f7': friend, 'h7': friend, 'f6': friend, 'g6': friend, 'h6': friend};
			king.getAllPositions();
			expect(king.possibles.length).toEqual(0);
		});
	});
});