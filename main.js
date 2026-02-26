
const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const generateBtn = document.getElementById('generate-btn');

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers);
}

generateBtn.addEventListener('click', () => {
    const numbers = generateLottoNumbers();
    const numberDivs = lottoNumbersContainer.querySelectorAll('.number');
    numberDivs.forEach((div, index) => {
        div.textContent = numbers[index];
        // Optional: Add some animation or color change
        div.style.backgroundColor = getRandomColor();
    });
});

function getRandomColor() {
    const colors = ['#f44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722'];
    return colors[Math.floor(Math.random() * colors.length)];
}
