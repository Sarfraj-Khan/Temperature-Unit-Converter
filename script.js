const inputBox = document.getElementById("inputBox");
const result = document.getElementById("result");
const FahrenheittoCelcius = document.getElementById("Fahrenheit-Celsius");
const CelsiustoFahrenheit = document.getElementById("Celsius-Fahrenheit");
const CelsiustoKelvin = document.getElementById("Celsius-Kelvin");
const KelvintoCelsius = document.getElementById("Kelvin-Celsius");
const KelvintoFahrenheit = document.getElementById("Kelvin-Fahrenheit");
const FahrenheittoKelvin = document.getElementById("Fahrenheit-Kelvin");
const button = document.getElementById("btn");
let temperature;

function convert() {
  if (FahrenheittoCelcius.checked) {
    temperature = Number(inputBox.value);
    temperature = ((temperature - 32) * 5) / 9;
    result.innerText = temperature.toFixed(2) + " °C";
  } else if (CelsiustoFahrenheit.checked) {
    temperature = Number(inputBox.value);
    temperature = (temperature * 9) / 5 + 32;
    result.innerText = temperature.toFixed(2) + " °F";
  } else if (CelsiustoKelvin.checked) {
    temperature = Number(inputBox.value);
    temperature = temperature + 273.15;
    result.innerText = temperature.toFixed(2) + " K";
  } else if (KelvintoCelsius.checked) {
    temperature = Number(inputBox.value);
    temperature = temperature - 273.15;
    result.innerText = temperature.toFixed(2) + " °C";
  } else if (KelvintoFahrenheit.checked) {
    temperature = Number(inputBox.value);
    temperature = (temperature - 273.15) * (9 / 5) + 32;
    result.innerText = temperature.toFixed(2) + " °F";
  } else if (FahrenheittoKelvin.checked) {
    temperature = Number(inputBox.value);
    temperature = (temperature - 32) * (5 / 9) + 273.15;
    result.innerText = temperature.toFixed(2) + " K";
  } else {
    result.innerText = "You have not selected any unit";
  }
}
button.addEventListener("click", convert);
inputBox.addEventListener("click", selectText);

function selectText(input) {
  inputBox.focus();
  inputBox.select();
}
