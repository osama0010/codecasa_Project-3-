const Celsius = document.querySelector("#celsius");
const Fahrenheit = document.querySelector("#fahrenheit");

window.addEventListener("input", () => Celsius.focus());

Celsius.addEventListener("input", () => {
    Fahrenheit.value = ((Celsius.value * 9) / 5 + 32).toFixed(2);
    if (!Celsius.value) Fahrenheit.value = "";
});

Fahrenheit.addEventListener("input", () => {
    Celsius.value = (((Fahrenheit.value - 32) * 5) / 9).toFixed(2);
});