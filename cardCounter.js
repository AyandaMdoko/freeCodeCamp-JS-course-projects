let count = 0;

function cardCounter(card) {
	// Normalize string cards
	if (typeof card === 'string') {
		card = card.trim().toUpperCase();
	}

	// Increase for 2-6
	if (typeof card === 'number' && card >= 2 && card <= 6) {
		count += 1;
	}
	// No change for 7-9
	else if (typeof card === 'number' && card >= 7 && card <= 9) {
		// no change
	}
	// Decrease for 10 and face cards
	else if (
		(typeof card === 'number' && card === 10) ||
		card === '10' ||
		card === 'J' ||
		card === 'Q' ||
		card === 'K' ||
		card === 'A'
	) {
		count -= 1;
	}

	return count > 0 ? `${count} Bet` : `${count} Hold`;
}

// Example usage
console.log(cardCounter(2));
console.log(cardCounter(3));
console.log(cardCounter(7));
console.log(cardCounter('K'));
console.log(cardCounter('A'));

