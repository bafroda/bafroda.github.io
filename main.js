var myPage = document.querySelector('h1');
var iframe = document.querySelector('#marketing');

myPage.onclick = function() {
    let WilDE = 'Willkommen';
    let WelEN = 'Welcome';

    if (myPage.textContent === WilDE) {
        myPage.textContent = WelEN;
    } else {
        myPage.textContent = WilDE;
    }

    var My123 = WilDE;
    console.log(My123);
    var My456 = WelEN;
    console.log(My456);
}

var MyButton = document.querySelector('button');

MyButton.onclick = function() {
    var myP = document.querySelector('p');
    var AktuellesDatum = Date();
    myP.textContent = AktuellesDatum;
}

alert("Hello World");
