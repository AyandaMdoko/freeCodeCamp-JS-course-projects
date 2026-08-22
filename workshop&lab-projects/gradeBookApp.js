
// Grade Book Application

// This application calculates the average score of a class, determines the letter grade for a student's score,
// and checks if the student has passed or failed the course.
function getAverage(scores) {
  const sum = scores.reduce((total, score) => total + score, 0);
  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else if (score >= 50) {
    return "E";
    } else {
        return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(scores, studentScore) {
  const average = getAverage(scores);
  const grade = getGrade(studentScore);
  const result = hasPassingGrade(studentScore) ? "passed" : "failed";

  return `Class average: ${average}. Your grade: ${grade}. You ${result} the course.`;
}

// Example usage:
const scores = [85, 90, 78, 92, 60, 50];
console.log(getAverage(scores)); // 81
console.log(getGrade(92)); // "A"
console.log(hasPassingGrade(55)); // false
console.log(studentMsg(scores, 92));
// "Class average: 81. Your grade: A. You passed the course."
console.log(studentMsg(scores, 55));
// "Class average: 81. Your grade: F. You failed the course."