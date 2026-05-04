// This function will stay the same.
// Only change is to export this so tests can use this directly.
// Now we can do property-based testing like in tetris shuffle.
export function diceRoll() {
  const min = 1;
  const max = 6;
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

// Dice rolls should be passed as parameters like the time in testable1
export function diceHandValue(die1, die2) {
  if (die1 === die2) {
    // one pair
    return 100 + die1;
  } else {
    // high die
    return Math.max(die1, die2);
  }
}
