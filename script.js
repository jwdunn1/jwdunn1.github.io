var _info_ = {
  Version   : "1.0.0",
  Author    : "James William Dunn",
  Copyright : "Motivara Corporation",
  Source    : "github.com/jwdunn1/jwdunn1.github.io"
};

function toggle() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") 
    x.className += " responsive";
  else 
    x.className = "topnav";
}
function toggleOff() {
  var x = document.getElementById("myTopnav");
    x.className = "topnav";
}

var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}