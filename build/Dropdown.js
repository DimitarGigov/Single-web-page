
function myFunction()  {
  var element = document.getElementById('drop');
  if (element.classList) {
    element.classList.toggle('dropdown');
  } else {
    var classes = element.className.split(" ");
    var i = classes.indexOf('dropdown');
    if (i >= 0)
      classes.splice(i, 1);
    else
    classes.push('dropdown');
    element.className = classes.join(' ');
  }
}
function myFunc()  {
  var element = document.getElementById('drop');
  if (element.classList) {
    element.classList.toggle('dropdown');
  } else {
    var classes = element.className.split(" ");
    var i = classes.indexOf('dropdown');
    if (i >= 0)
      classes.splice(i, 1);
    else
    classes.push('dropdown');
    element.className = classes.join(' ');
  }
}
/* dropdown function responsive bar menu*/

function myFuncresbar() {
  var element = document.getElementById('showmenu');
  if (element.classList) {
    element.classList.toggle('dropdownresponsive')
  } else {
    var classes = element.className.split(' ');
    var i = classes.indexOf('dropdownresponsive');
    if (i >= 0)
      classes.splice(i, 1);
    else
    classes.push('dropdownresponsive');
    element.className = classes.join(' '); 
  }
}