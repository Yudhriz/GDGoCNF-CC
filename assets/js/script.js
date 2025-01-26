const birthYear = 2003;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
document.getElementById("age").textContent = age + " years old";
