var details = {
  name: "Joseph Mbote",
  age: 25,
  country: "Kenya",
  hobbies: ["Coding", "Reading", "Swimming"],
  isMarried: false,
  email: "mbotejoseph001@gmail.com",
  skills: {
    html: "80%",
    css: "70%",
    javascript: "60%",
    php: "50%",
  },
  getFullName: function () {
    return this.name;
  },
  getSkills: function () {
    return this.skills;
  },
};

console.log(
  `My name is ${details.getFullName()}. I am ${
    details.age
  } years old. I live in ${details.country}. I am ${
    details.isMarried ? "married" : "not married"
  }. I have the following skills: ${Object.keys(
    details.getSkills()
  )}. My email address is ${details.email}.`
);

var dashboard = document.getElementById("dashboard");

// Create a div element to hold the details of the user and append it to the dashboard element with the details id
var userDetails = document.createElement("div");
userDetails.setAttribute("id", "details");
dashboard.appendChild(userDetails);

// Create a h1 element for the name of the user and append it to the userDetails div
var names = document.createElement("h1");
names.innerHTML = `${details.name}`;
userDetails.appendChild(names);

// Create a p element for the skills of the user and append it to the userDetails div
var skills = document.createElement("p");
var skillsText = "Skills: ";
for (let skill in details.skills) {
  skillsText += `${skill} (${details.skills[skill]}), `;
}
// Remove trailing comma and space
skillsText = skillsText.slice(0, -2);
skills.innerHTML = skillsText;
userDetails.appendChild(skills);

// Create a p element for the age of the user and append it to the userDetails div
var age = document.createElement("p");
age.innerHTML = `Age: ${details.age}`;
userDetails.appendChild(age);

// Create a p element for the country of the user and append it to the userDetails div
var country = document.createElement("p");
country.innerHTML = `Country: ${details.country}`;
userDetails.appendChild(country);

// Create a p element for the hobbies of the user and append it to the userDetails div
var hobbies = document.createElement("p");
hobbies.innerHTML = `Hobbies: ${details.hobbies}`;
userDetails.appendChild(hobbies);

// Create a p element for the marital status of the user and append it to the userDetails div
var maritalStatus = document.createElement("p");
maritalStatus.innerHTML = `Marital Status: ${
  details.isMarried ? "Married" : "Not Married"
}`;
userDetails.appendChild(maritalStatus);

// Create a p element for the email of the user and append it to the userDetails div
var email = document.createElement("p");
email.innerHTML = `Email: ${details.email}`;
userDetails.appendChild(email);
