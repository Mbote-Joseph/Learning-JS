let courses = [
  "JavaScript",
  "ReactJS",
  "NodeJS",
  "AngularJS",
  "VueJS",
  "MongoDB",
  "ExpressJS",
  "HTML",
  "CSS",
  "Bootstrap",
  "jQuery",
  "PHP",
];

let courseList = document.getElementsByClassName("output");
let enrolled = document.getElementsByClassName("enrolled");
//  Show the list of courses in the output div elements using for loop
// for (let i = 0; i < courses.length; i++) {
//   for (let j = 0; j < courseList.length; j++) {
//     courseList[j].innerHTML += courses[i] + "<br>";
//   }
// }

//  Show the list of courses in the output div elements using forEach loop
courses.forEach((course) => {
  for (let j = 0; j < courseList.length; j++) {
    courseList[j].innerHTML +=
      "<div class='task'>" +
      course +
      "<button> Enroll in" +
      course +
      "</button>" +
      "</div>";
  }
});

// List of Courses enrolled
let enrolledCourses = [];

//  Enroll in a course
let enroll = document.getElementsByTagName("button");
for (let i = 0; i < enroll.length; i++) {
  enroll[i].addEventListener("click", () => {
    enrolledCourses.push(courses[i]);
    console.log(enrolledCourses);
  });
}

// course.log(enrolledCourses);

enrolledCourses.forEach((course) => {
  for (let j = 0; j < enrolled.length; j++) {
    enrolled[j].innerHTML +=
      "<div class='task'>" +
      course +
      "<button> Enroll in" +
      course +
      "</button>" +
      "</div>";
  }
});

if (enrolledCourses.length > 0) {
  document.getElementsByClassName("enrolled").style.display = "block";
}
