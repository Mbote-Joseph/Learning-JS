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

//  Show the list of courses in the output div elements using forEach loop
courses.forEach((course) => {
  for (let j = 0; j < courseList.length; j++) {
    courseList[j].innerHTML +=
      "<li class='task'>" +
      course +
      "<button onclick='enrollInCourse(\"" +
      course +
      "\")'> Enroll in " +
      course +
      "</button>" +
      "</li>";
  }
});

// List of Courses enrolled
let enrolledCourses = [];

function enrollInCourse(course) {
  //   check if the course is already enrolled
  if (enrolledCourses.includes(course)) {
    alert("You have already enrolled in " + course);
    // create a modal to show the message that the course is already enrolled
    // write the code to create a modal
    "<div class='modal'> <div class='modal-content'> <span class='close'>&times;</span> <p>You have already enrolled in " +
      course +
      "</p> </div> </div>";

    // Get the modal
    let modal = document.getElementsByClassName("modal")[0];
    // modal.style.display = "block";

    return;
  }
  enrolledCourses.push(course);
  console.log(enrolledCourses);
  updateEnrolledCourses();
}

function updateEnrolledCourses() {
  for (let j = 0; j < enrolled.length; j++) {
    enrolled[j].innerHTML = ""; // Clear current list
    enrolledCourses.forEach((course) => {
      enrolled[j].innerHTML += "<li class='task'>" + course + "</li>";
    });

    // Show or hide the enrolled courses list based on whether any courses are enrolled
    if (enrolledCourses.length > 0) {
      enrolled[j].style.display = "block";
    } else {
      enrolled[j].style.display = "none";
    }
  }
}

// Initialize the enrolled courses list as hidden
for (let j = 0; j < enrolled.length; j++) {
  enrolled[j].style.display = "none";
}
