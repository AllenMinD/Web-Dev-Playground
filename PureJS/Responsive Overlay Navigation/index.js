const toggle = document.getElementById('toggle');
const resize = document.getElementById('resize');

toggle.onclick = function(e) {
  // toggle "on"
  if (this.className.indexOf('on') === -1) {
    this.className = "on";
  }  else {
    this.className = "";
  }
  // toggle "active"
  if (resize.className.indexOf('active') === -1) {
    resize.className = "active";
  } else {
    resize.className = "";
  }
}