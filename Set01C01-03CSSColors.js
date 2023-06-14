function setStyles(color = 'black', fontSize = '16px', backgroundColor = 'white') {
  this.style.color = color;
  this.style.fontSize = fontSize;
  this.style.backgroundColor = backgroundColor;
}
  
let element = document.getElementById('theElement'); 
  
setStyles.call(element, 'red', '20px', 'lightblue');
  