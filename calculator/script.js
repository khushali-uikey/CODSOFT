let display = document.getElementById("display");

// Sab buttons select karo
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        let value = this.innerText;

        if (value == "C") {
            display.value = "";
        }
        else if (value == "⌫") {
            display.value = display.value.slice(0, -1);
        }
        else if (value == "=") {
            display.value = eval(display.value);
        }
        else {
            display.value += value;
        }
    });
});