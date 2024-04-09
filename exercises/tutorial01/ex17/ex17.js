let score = 99;
let grade = "F";
if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 80 && score <= 89) {
  grade = "B";
} else if (score >= 70 && score <= 79) {
  grade = "C";
} else if (score >= 60 && score <= 69) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`Grade is : ${grade}`);

//-----------------
//using switch
score =100;
console.log(score);
// Convert numeric score to a letter range to use in switch
switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;
  case score >= 80 && score < 90:
    grade = "B";
    break;
  case score >= 70 && score < 80:
    grade = "C";
    break;
  case score >= 60 && score < 70:
    grade = "D";
    break;
  case score < 60:
    grade = "F";
    break;
  default:
    grade = "Invalid score";
}
console.log(`${score} is ${grade}`);
