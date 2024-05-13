function getAverage(scores) {
  let totalScores = 0;
  const totalStudents = scores.length;
  for (let i = 0; i < totalStudents; i++) {
    totalScores += scores[i];
  }
  return totalScores / totalStudents;
}

function getGrade(score) {}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
