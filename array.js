// Creating a new Array
var school = new Array();
school[0] = "UC Berkeley";
school[1] = "Stanford";
school[2] = "UCLA";
school[3] = "UC Davis";
school[4] = "UC San Diego";
school[5] = "UC Santa Barbara";
school[6] = "UC Irvine";

console.log(school);
console.log(school.length);

var scores = [34, 12, 45, 67, 23, 56, 78, 89, 90, 100];
console.log(scores);
console.log(scores.length);

// Array methods
console.log(scores.sort());
console.log(scores.reverse());

//  Reduce method
var sum = scores.reduce((a, b) => {
  return a + b;
}, 0);
console.log(`The sum of the scores is ${sum}`);

//  Map method
var newScores = scores.map((score) => {
  return score * 2;
});
console.log(newScores);

//  Filter method
var filteredScores = scores.filter((score) => {
  return score > 50;
});
console.log(filteredScores);

scores.forEach((score) => {
  console.log(score);
});

var mylist = ["Apple", "Mango", "Orange", "Banana", "Strawberry", "Apple"];

var myFinalList = [...mylist, "Pineapple", "Watermelon"];
console.log(myFinalList);

// Removing duplicates from an array using Set method
var newList = [];

console.log(newList);
for (let i = 0; i < mylist.length; i++) {
  if (!newList.includes(mylist[i])) {
    newList.push(mylist[i]);
  }
}
console.log(newList);

var scores = [34, 12, 45, 67, 23, 56, 78, 89, 90, 100];

// Sorting my values in ascending order
function sorting(scores) {
  for (let i = 0; i < scores.length; i++) {
    for (let j = i + 1; j < scores.length; j++) {
      if (scores[i] > scores[j]) {
        let temp = scores[i];
        scores[i] = scores[j];
        scores[j] = temp;
      }
    }
  }
  return scores;
}

console.log(sorting(scores));
