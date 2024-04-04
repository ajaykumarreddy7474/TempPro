function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let result;

    if (isNaN(temperatureInput)) {
      alert("Please enter a valid number for temperature.");
      return;
    }

    if (unit === "celsius") {
      result = (temperatureInput * 9/5) + 32;
      document.getElementById("result").innerText = `${temperatureInput}°C = ${result.toFixed(2)}°F`;
    } else if (unit === "fahrenheit") {
      result = (temperatureInput - 32) * 5/9;
      document.getElementById("result").innerText = `${temperatureInput}°F = ${result.toFixed(2)}°C`;
    } else if (unit === "kelvin") {
      result = temperatureInput - 273.15;
      document.getElementById("result").innerText = `${temperatureInput}K = ${result.toFixed(2)}°C`;
    }
  }