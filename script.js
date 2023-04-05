function convertTemp() {
    var celsius = parseFloat(document.getElementById("temp").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("result").innerHTML = celsius + " degrees Celsius is equal to " + fahrenheit.toFixed(1) + " degrees Fahrenheit.";
  }
  