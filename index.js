const display = document.getElementById("display");

function appendtodisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}
function Escape() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
