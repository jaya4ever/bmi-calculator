let button = document.querySelector("#btn");
window.onload = alert("Welcome to BMI Calculator");

function calculateBMI() {
  let height = parseInt(document.querySelector("#height").value);

  let weight = parseInt(document.querySelector("#weight").value);

  let result = document.querySelector("#result");

  if (height === "" || isNaN(height)) {
    alert("Provide a valid number !");
  } else if (weight === "" || isNaN(weight)) {
    alert("Provide a valid number !");
  }

  let bmi = parseFloat(weight) / (parseFloat(height) / 100) ** 2;

  if (bmi < 18.6) {
    result.innerHTML = `You are Under Weight, Start Eating : Your BMI is<span>${bmi}</span>`;
    result.style.color = "#ffc44d";
  } else if (bmi >= 18.6 && bmi < 24.9) {
    result.innerHTML = `Your weight is Normal : Your BMI is <span>${bmi}</span>`;
    result.style.color = "#0be881";
  } else {
    result.innerHTML = `You are Over Weight, Don't eat much : Your BMI is <span>${bmi}</span>`;
    result.style.color = "#ff884d";
  }
}
button.addEventListener("click", calculateBMI);
