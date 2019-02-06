/*Footer Dropdown functions */
function dropFunc() {
    var element = document.getElementById('foot');
    if (element.classList) {
      element.classList.toggle('footdrop');
    } else {
      var classes = element.className.split(' ');
      var i = classes.indexOf('footdrop');
      if (i >= 0)
        classes.splice(i, 1);
      else 
      classes.push('footdrop');
      element.className = classes.join(' ');
    }
  }
  
  
  function dropFuncone() {
    var element = document.getElementById('footone');
    if (element.classList) {
      element.classList.toggle('footdrop');
    } else {
      var classes = element.className.split(' ');
      var i = classes.indexOf('footdrop');
      if (i >= 0)
        classes.splice(i, 1);
      else
      classes.push('footdrop');
      element.className = classes.join(' ');
    }
  }
  
  function dropFunctwo() {
    var element = document.getElementById('foottwo');
    if(element.classList) {
      element.classList.toggle('footdrop');
    } else {
      var classes = element.className.split(' ');
      var i = classes.indexOf('footdro[');
      if (i >= 0)
        classes.splice(i, 1);
      else
      classes.push('footdrop');
      element.className = classes.join(' ');
    }
  }