function Calculate(FirstIntegerElement, SecondIntegerElement) {

const CalculateSpanElement = document.querySelector('.Answer-Span');
const first = parseInt(FirstIntegerElement.value);
const second = parseInt(SecondIntegerElement.value);
const result = first + second;

CalculateSpanElement.innerHTML = result;

function Reset() {
  if(first.trim()!=="" || second.trim()!=="") {
    FirstIntegerElement.value = "";
    SecondIntegerElement.value = "";
  }
}


}

