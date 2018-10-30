// pageXOffset 和 pageYOffset 属性返回文档在窗口左上角水平和垂直方向滚动的像素。
var prevScrollpos = window.pageYOffset;
var navbar = document.getElementById('navbar');

window.onscroll = function() {
  var currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-100px';
  }

  prevScrollpos = currentScrollpos;
}