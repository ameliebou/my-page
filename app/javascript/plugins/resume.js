const skills = document.getElementById("skills")
const skillsDetails = document.getElementById("skills-details")
const skillsArrow = document.getElementById("skills-arrow")
const skillsToggle = skills.addEventListener('click', () => {
  skillsDetails.classList.toggle('show');
  skillsArrow.classList.toggle('rotate-arrow')
});

const workingExp = document.getElementById("working-exp")
const workingExpDetails = document.getElementById("working-exp-details")
const workingExpArrow = document.getElementById("working-exp-arrow")
const workingExpToggle = workingExp.addEventListener('click', () => {
  workingExpDetails.classList.toggle('show');
  workingExpArrow.classList.toggle('rotate-arrow')
});

const education = document.getElementById("education")
const educationDetails = document.getElementById("education-details")
const educationArrow = document.getElementById("education-arrow")
const educationToggle = education.addEventListener('click', () => {
  educationDetails.classList.toggle('show');
  educationArrow.classList.toggle('rotate-arrow')
});

const languages = document.getElementById("languages")
const languagesDetails = document.getElementById("languages-details")
const languagesArrow = document.getElementById("languages-arrow")
const languagesToggle = languages.addEventListener('click', () => {
  languagesDetails.classList.toggle('show');
  languagesArrow.classList.toggle('rotate-arrow')
});

export { skillsToggle, workingExpToggle, educationToggle, languagesToggle };
