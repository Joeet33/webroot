function changeTSize(nu) {
  var body = document.getElementsByTagName("body")[0]; 
 
  var fontSizeString = window
     .getComputedStyle(body, null)
     .getPropertyValue("font-size");
  var fontSize = parseFloat(fontSizeString); 
  body.style.fontSize = (fontSize + nu) + "px";
 }

