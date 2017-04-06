// plik scripts.js
var button = document.getElementsByClassName('button');
var n = button.length;
var i;
var ourTable = button;
for (i = 0; i < n; i++) {

  // tekstprzycisku(i);
  function tekstprzycisku() {
    var przycisk = document.getElementById('przycisk');
    var newElem = document.createElement('p');
    //newElem.innerHTML = button [i];
    newElem.innerText = button [i];
    przycisk.appendChild(newElem);
  }
  tekstprzycisku();
}

console.log(button);
console.log(button.length);
console.log(n);
console.log(i);
