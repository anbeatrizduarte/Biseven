
// botao para mostrar senha

document.getElementById('olho').addEventListener('mousedown', function () {
  document.getElementById('iptPass').type = 'text';
});

document.getElementById('olho').addEventListener('mouseup', function () {
  document.getElementById('iptPass').type = 'password';
});

// register system