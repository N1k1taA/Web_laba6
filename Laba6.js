var leftButton = document.getElementById('leftButton'),
    bothButton = document.getElementById('bothButton'),
    rightButton = document.getElementById('rightButton'),
    left = document.getElementById('left'),
    right = document.getElementById('right');

leftButton.onclick = function() {
  left.style.width = "calc(100% - 30px)";
  right.style.width = "30px";
}

rightButton.onclick = function() {
  left.style.width = "30px";
  right.style.width = "calc(100% - 30px)";
}

bothButton.onclick = function() {
  left.style.width = "50%";
  right.style.width = "50%";
}