var myPage = document.querySelector('h1');

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
    user = document.getElementsByClassName('input')[0].value;
    pw = document.getElementsByClassName('input')[1].value;
    console.log(user);
    console.log(pw);
}


function myFunction() {
  document.open();
  document.write("<h1>Hello World</h1>");
  document.close();
  alert("Hello World");
}


