function myFuncside() {
  var element = document.getElementById('side');
  if(element.classList) {
    element.classList.toggle('sideout');
  } else {
    var classes = element.className.split(' ');
    var i = classes.indexOf('sideout');
    if (i >= 0)
      classes.splice(i, 1);
    else 
    classes.push('sideout');
    element.className = classes.join(' ');
  }
}

function myFuncsideout() {
  var element = document.getElementById('side');
  if (element.classList) {
    element.classList.toggle('sideout');
  } else {
    var classes = element.className.split(' ');
    var i = classes.indexOf('sideout');
    if (i >= 0)
      classes.splice(i, 1);
    else 
    classes.push('sideout');
    element.className = classes.join(' ');
  }
}
