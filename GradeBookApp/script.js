function getAverage(scores) {
  let totalScores = 0;
  const totalStudents = scores.length;
  for (let i = 0; i < totalStudents; i++) {
    totalScores += scores[i];
  }
  return totalScores / totalStudents;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  if (score >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));
