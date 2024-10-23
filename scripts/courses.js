// scripts/courses.js

const courses = document.querySelectorAll(".course");
let currentCourseIndex = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
  courses[currentCourseIndex].classList.remove("active");
  currentCourseIndex = (currentCourseIndex + 1) % courses.length;
  courses[currentCourseIndex].classList.add("active");
});

document.getElementById("prevBtn").addEventListener("click", () => {
  courses[currentCourseIndex].classList.remove("active");
  currentCourseIndex =
    (currentCourseIndex - 1 + courses.length) % courses.length;
  courses[currentCourseIndex].classList.add("active");
});
