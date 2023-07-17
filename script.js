let button = document.querySelector("#btn");
window.onload = alert("Welcome to BMI Calculator");

function calculateBMI() {
  let height = parseInt(document.querySelector("#height").value);

  let weight = parseInt(document.querySelector("#weight").value);

  let result = document.querySelector("#result");

  if (!height === "" || isNaN(height)) {
    alert("Provide a valid height number !");
    return;
  } 
  if (!weight === "" || isNaN(weight)) {
    alert("Provide a valid weight number !");
    return;
  }
 else{
  let bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (bmi < 18.6) {
    result.innerHTML = `You are Under Weight,  at Date ${Date.now()}.toISOString(); : Your BMI is<span>${bmi}</span>`;
    result.style.color = "#ffc44d";
  } else if (bmi >= 18.6 && bmi < 24.9) {
    result.innerHTML = `Your weight is Normal, at Date ${new Date().toISOString()} : Your BMI is <span>${bmi}</span>`;
    result.style.color = "#0be881";
  } else if (bmi <= 30) {
    result.innerHTML = `Your weight is overweight,at Date ${new Date().toISOString()} : Your BMI is <span>${bmi}</span>`;
    result.style.color = "#ff884d";
  } else {
    result.innerHTML = `You are obesed,at Date ${new Date().toISOString()} : Your BMI is <span>${bmi}</span>`;
    result.style.color = "#ff5e57";
  }
}
}

button.addEventListener("click", calculateBMI);
