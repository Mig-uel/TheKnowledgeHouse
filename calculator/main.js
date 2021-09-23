function input(button) {
  document.calc.display.value += button.value;
}
function clearDisplay() {
  document.calc.display.value = "";
}
function enter() {
  document.calc.display.value = eval(document.calc.display.value);
}
