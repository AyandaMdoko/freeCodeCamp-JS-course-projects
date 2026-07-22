function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
}

// Test cases
console.log(golfScore(5, 1));     // Hole-in-one!
console.log(golfScore(5, 2));     // Eagle (≤3)
console.log(golfScore(5, 4));     // Birdie
console.log(golfScore(5, 5));     // Par
console.log(golfScore(5, 6));     // Bogey
console.log(golfScore(5, 7));     // Double Bogey
console.log(golfScore(5, 9));     // Go Home! (≥8)

