function Calculate(FirstIntegerElement, SecondIntegerElement) {

const CalculateSpanElement = document.querySelector('.Answer-Span');
const first = parseInt(FirstIntegerElement.value);
const second = parseInt(SecondIntegerElement.value);
const result = first + second;

CalculateSpanElement.innerHTML = result;


}

function Reset(FirstIntegerElement, SecondIntegerElement) {
  if(FirstIntegerElement.value.trim()!=="" || SecondIntegerElement.value.trim()!=="") {
    FirstIntegerElement.value = "";
    SecondIntegerElement.value = "";
  }
}