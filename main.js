// Ambil element
const skills = document.getElementById("skills");
const primarySkill = document.getElementById("primarySkill");

// Inisialisasi Array
const mySkills = ["UX Design", "Web Development", "Video Editor"];

// Map
const printSkills = mySkills.map((skill) => {
  return skill;
});

skills.innerHTML = printSkills;

// Filter
const myPrimarySkill = mySkills.filter((skill) => {
  return skill === "UX Design"; // -> return yang sama dengan UX Design
  //   return skill !== "Video Editor"; // -> return selain video editor
});

console.log(myPrimarySkill);
primarySkill.innerHTML = myPrimarySkill;
