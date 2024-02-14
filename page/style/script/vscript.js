function moveNoButton() {
    var button = document.querySelector('.no-button');
    
    var maxX = 400 - button.clientWidth;
    var maxY = 400 - button.clientHeight;

    var randomX = Math.max(0, Math.min(maxX, Math.random() * maxX));
    var randomY = Math.max(0, Math.min(maxY, Math.random() * maxY));

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function changeContent() {
    var gifImage = document.getElementById('gifImage');
    gifImage.src = 'https://bestanimations.com/Animals/Mammals/Cats/cats/cute-kitty-animated-gif-36.gif';
    gifImage.style.width = '300px'; 
    gifImage.style.height = '300px';


    var textContent = document.getElementById('textContent');
    textContent.innerHTML = '<h2>Хехе, я так й знав що ти мені не відкажеш, кохаю тебе😘</h2>';

    var background = document.querySelector('.background');
    background.classList.add('show-overlay');

    var yesButton = document.querySelector('.yes-button');
    var noButton = document.querySelector('.no-button');
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
}