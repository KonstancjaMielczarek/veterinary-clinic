// var header = document.getElementById("navig");
var btns = document.getElementsByClassName("nav__item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace("--is--active", "");
  this.className += " active";
  });
}