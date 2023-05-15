mylist = ["Apple", "Mango", "Orange", "Banana", "Strawberry"];

// Using for in loop
for (list in mylist) {
  console.log(mylist[list]);
}

// Using for...of loop
for (list of mylist) {
  console.log(list);
}

// Using forEach loop
mylist.forEach((list) => {
  console.log(list);
});

console.log(` ========Testing other things in the list======`);
console.log(mylist.shift());
console.log(mylist.length);
console.log(mylist.reverse());
console.log(mylist.sort());
console.log(mylist[0].split(""));

word = "Zebra";
console.log(word.split(""));

function reverse(a) {
  let string = "";
  for (let i = a.length - 1; i >= 0; i--) {
    string += a[i];
  }

  return string;
}

console.log(reverse("Zebra")); // Prints the reversed word
console.log(`${word.toUpperCase()}`); // Prints the word in uppercase
console.log(`${word.toLowerCase()}`); // Prints the word in lower
console.log(`${word.charAt(0)}`); // Prints the first character of the word
console.log(`${word.charAt(word.length - 1)}`); // Prints the last character of the word
console.log(`${word.slice(1, 4)}`); // Prints the characters from index 1 to 4
