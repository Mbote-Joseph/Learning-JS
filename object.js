let details = {
  name: "Joseph Mbote",
  age: 25,
  country: "Kenya",
  hobbies: ["Coding", "Reading", "Swimming"],
  isMarried: false,
  email: "mbotejoseph001@gmail",
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
    for (let skill in this.skills) {
      console.log(`${skill} (${this.skills[skill]})`);
    }
    return this.skills;
  },

  getHobbies: function () {
    for (let hobby of this.hobbies) {
      console.log(hobby);
    }
    return this.hobbies;
  },

  addHobbies: function (hobby) {
    if (!this.hobbies.includes(hobby)) {
      this.hobbies.push(hobby);
    } else {
      console.log("Hobby already exists");
    }
  },
};

details.addHobbies("Swim");
details.addHobbies("Swim");

console.log(details.getHobbies());
