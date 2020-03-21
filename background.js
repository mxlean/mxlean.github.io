setInterval(function(){

  var hue = 252 - window.pageYOffset/350;
  document.documentElement.style.background = "hsl(" + hue + ", 55%, 13%)";
  console.log(hue);

}, 5);
