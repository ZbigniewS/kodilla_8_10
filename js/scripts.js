// plik scripts.js
var buttons = document.getElementsByClassName('button');
var n = buttons.length;
var i;
function tekstprzycisku(i) {
  var przycisk = document.getElementById('przycisk');
  var newElem = document.createElement('p');
  newElem.innerText = buttons[i].innerText;
  przycisk.appendChild(newElem);
}

for (i = 0; i < n; i++) {
  tekstprzycisku(i);
}


console.log(buttons);
console.log(buttons.length);
console.log(n);
console.log(i);
console.log(tekstprzycisku);
