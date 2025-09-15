const inputField = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const outputBox = document.getElementById('result');

function normalizeString(str) {
    return str.replace(/[^0-9a-z]/gi, '').toLowerCase();
}

function isPalindrome(str) {
    const cleaned = normalizeString(str);
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

function displayResult(text) {
    outputBox.innerHTML = ''; 

    const message = document.createElement('p');
    message.classList.add('user-input');

    const verdict = isPalindrome(text)
        ? 'is a palindrome'
        : 'is not a palindrome';

    message.innerHTML = `<strong>${text}</strong> ${verdict}`;
    outputBox.appendChild(message);
    outputBox.classList.remove('hidden');
}

function handleCheck() {
    const inputValue = inputField.value.trim();

    if (!inputValue) {
        alert('Please input a value'); 
        return;
    }

    displayResult(inputValue);
    inputField.value = '';
}

checkBtn.addEventListener('click', handleCheck);
inputField.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleCheck();
    }
});
