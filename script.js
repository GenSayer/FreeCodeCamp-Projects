/* Code partially inspired by and borrowed from Landon Schlangen's YouTube Tutorial for understanding and with enhancements */

const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// Convert Number to Roman
function convertNumToRoman(num) {
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syms = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  return val.reduce((roman, currVal, i) => {
    const count = Math.floor(num / currVal);
    num -= count * currVal;
    return roman + syms[i].repeat(count);
  }, '');
}

// Event Listener for Convert Button
convertBtn.addEventListener("click", handleConvert);

function handleConvert() {
  const value = parseInt(input.value, 10);

  if (isNaN(value)) {
    output.innerText = "Please enter a valid number";
    return;
  }

  if (value < 1) {
    output.innerText = "Please enter a number greater than or equal to 1";
    return;
  }

  if (value > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  output.innerText = convertNumToRoman(value);
}
