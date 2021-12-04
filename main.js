var myPage = document.querySelector('h1');
const WilDE = 'Willkommen';
const WelEN = 'Welcome';

myPage.onclick = function() {
    if (myPage.textContent === WilDE) {
        myPage.textContent = WelEN;
    } else {
        myPage.textContent = WilDE;
    }

}