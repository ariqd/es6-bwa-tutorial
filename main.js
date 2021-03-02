// Ambil element
const skills = document.getElementById("skills");

// ES 6
const mySkills = ["UX Design", "Web Development", "Video Editor"];
// console.log(mySkills[0]);
// skills.innerHTML = mySkills[0];

mySkills.push("Dev Ops");

let parent = "<ul>";

mySkills.forEach((skill) => {
  console.log(skill);
  parent += `<li>${skill}</li>`;
});

parent += "</ul>";

skills.innerHTML = parent;
