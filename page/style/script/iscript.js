function ValentinePage() {
    window.location.href = 'page/valentine.html';
}

function changeContent() {
    var textContent = document.getElementById('textContent');
    textContent.innerHTML = '<h2>Ви точно бажаєте прочитати листа??</h2>';

    var gifImage = document.getElementById('gifImage');
    gifImage.src = '/page/image/open-mail.png';
    gifImage.style.width = '250px'; 
    gifImage.style.height = '250px';
    gifImage.style.position = 'fixed';
    gifImage.style.left = '50%';
    gifImage.style.transform = 'translate(-50%, -50%)';
}

function moveNoButton() {
    var button = document.querySelector('.no-button');
    
    var maxX = 400 - button.clientWidth;
    var maxY = 400 - button.clientHeight;

    var randomX = Math.max(0, Math.min(maxX, Math.random() * maxX));
    var randomY = Math.max(0, Math.min(maxY, Math.random() * maxY));

    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}
