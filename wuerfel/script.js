let pel = document.getElementById("diceVal");
let trie = 0;
let six = 0;
let tryEl = document.getElementById("trys");
let sixEl = document.getElementById("sixs");
let bodyEl = document.getElementById("green");
let commEl = document.getElementById("comm");
let comm = ["Spitze", "Super", "Der Hammer", "Besser geht's nicht", "Wau", "Bäm", "Yepee", "Glaub ich nicht", "Wahnsinn", "Boahhh", "Klasse", "Der Würfel ist gezinkt", "Man man man", "Never ever", "Kann nicht sein", "Was passiert hier?  ", "Wie verhext", "Hier stimmt was nicht"];

function dice() {
   commEl.innerHTML = "---";
   bodyEl.setAttribute("class", "beige");
   trie++;
   tryEl.innerHTML = trie;
   let randomLoc = Math.floor(Math.random() * 6 + 1);
   pel.innerHTML = randomLoc;
   if (randomLoc == 6) {
      let rdcomm =Math.floor(Math.random() * comm.length)
      commEl.innerHTML = comm[rdcomm] + "!!!";
      six++;
      sixEl.innerHTML = six;
      bodyEl.setAttribute("class", "green");
   }
}