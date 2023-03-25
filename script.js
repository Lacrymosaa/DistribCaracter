var modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', function() {
  var body = document.getElementsByTagName('body')[0];
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  }
});
  

function distribuir() {
    var caracter = document.getElementById('entrada').value
    document.getElementById('entrada').value = ''
    caracter.trim()

    if (!isNaN(parseInt(caracter))) {
        // a string contém um número válido, então convertemos para inteiro
        caracter = parseInt(caracter);
    }

    switch(typeof caracter){
        case 'number':
            document.getElementById('num').value += caracter
            break;
        case 'string':
            document.getElementById('letters').value += caracter
            break;
    }
}

