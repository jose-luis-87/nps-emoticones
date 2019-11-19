var overlay3 = document.getElementById('overlay3'),
    popup3 = document.getElementById('popup3'),
    btnCerrarPopup3 = document.getElementById('btn-cerrar-popup3'),
    btnContinuar3 = document.getElementById('btn-continuar3'),
    backmenu = document.getElementById('bodyNps'),
    divGral = document.getElementById('divGral'),
    btnSalir3 = document.getElementById('btn-salir3');

$(document).ready(
    function() {
        overlay3.classList.add('active');
        popup3.classList.add('active');
        backmenu.classList.add('active');
    });

var btnAbrirPopup = document.getElementById('btn-enviar'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');
btnAceptar = document.getElementById('btn-aceptar');

btnAbrirPopup.addEventListener('click', function() {
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

btnAceptar.addEventListener('click', function() {
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

var btnAbrirPopup2 = document.getElementById('btn-cancelar'),
    overlay2 = document.getElementById('overlay2'),
    popup2 = document.getElementById('popup2'),
    btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2'),
    btnContinuar2 = document.getElementById('btn-continuar')
btnSalir2 = document.getElementById('btn-salir');

btnAbrirPopup2.addEventListener('click', function() {
    overlay2.classList.add('active');
    popup2.classList.add('active');
});

btnCerrarPopup2.addEventListener('click', function() {
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
});

btnContinuar2.addEventListener('click', function() {
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
});

btnSalir2.addEventListener('click', function() {
    overlay2.classList.remove('active');
    popup2.classList.remove('active');
});



btnCerrarPopup3.addEventListener('click', function() {
    overlay3.classList.remove('active');
    popup2.classList.remove('active');
});

btnContinuar3.addEventListener('click', function() {
    overlay3.classList.remove('active');
    popup3.classList.remove('active');
    backmenu.classList.remove('active');
    divGral.classList.add('active');
});

btnSalir3.addEventListener('click', function() {
    overlay3.classList.remove('active');
    popup3.classList.remove('active');
});