var isie6 = window.XMLHttpRequest ? false : true; 
 function newtoponload() { 
  var c = document.getElementById("back-to-top"); 
  function b() { 
   var a = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; 
   if (a > 0) { if (isie6) { c.style.display = "none"; clearTimeout(window.show); window.show = setTimeout(function () { var d = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop; if (d > 0) { c.style.display = "block"; c.style.top = (500 + d) + "px" } }, 300) } else { c.style.display = "block" } } else { c.style.display = "none" } } if (isie6) { c.style.position = "absolute" } window.onscroll = b; b() } if (window.attachEvent) { window.attachEvent("onload", newtoponload) } else { window.addEventListener("load", newtoponload, false) } document.getElementById("back-to-top").onclick = function () { window.scrollTo(0, 0) };