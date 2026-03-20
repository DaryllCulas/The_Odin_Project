const display = document.querySelector(".result");
let expression = "";

function updateDisplay(value) {
  display.value = expression || "0";
}

function screen(value) {
  // allow 0–9 and "."
  if (!/^[0-9.]$/.test(value)) {
    return; // ignore anything that is not a number or dot
  }
  expression += value;
  updateDisplay();
}

function clear() {
  expression = "";
  updateDisplay();
}

function addition() {
  expression += "+";
  updateDisplay();
}

function subtraction() {
  expression += "-";
  updateDisplay();
}

function multiplication() {
  expression += "*"; // use * so eval works
  updateDisplay();
}

function division() {
  expression += "/";
  updateDisplay();
}

function modulo() {
  expression += "%";
  updateDisplay();
}

function parenthesis() {
  const opens = (expression.match(/\(/g) || []).length;
  const closes = (expression.match(/\)/g) || []).length;
  if (opens > closes) {
    expression += ")";
  } else {
    expression += "(";
  }
  updateDisplay();
}

function squareRoot() {
  if (!expression) return;

  try {
    const value = eval(expression);
    if (value < 0) {
      showError("Invalid input");
      return;
    }
    expression = String(Math.sqrt(value));
    updateDisplay();
  } catch (error) {
    showError("Invalid Expression");
  }
}

function result() {
  if (!expression) return;

  try {
    const value = eval(expression);
    expression = String(value);
    updateDisplay();
  } catch (e) {
    showError("Invalid Expression");
  }
}

function showError(message) {
  display.value = message; // show the text
  expression = "";         // clear internal expression
}



document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".global");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.value;

      if (value === "Del") {
        // Clear everything when Del is pressed
        clear();
      } else if (value === "=") {
        result();
      } else if (value === "+") {
        addition();
      } else if (value === "-") {
        subtraction();
      } else if (value === "X") {
        multiplication();
      } else if (value === "/") {
        division();
      } else if (value === "%") {
        modulo();
      } else if (value === "√") {
        squareRoot();
      } else if (value === "(" || value === ")") {
        // Use the helper that auto-picks ( or )
        parenthesis();
      } else {
        // Numbers, ".", etc.
        screen(value);
      }
    });
  });
  clear();
});
