var tiempoActual = [0, 0, 0];
var intervalo;

function sumarMinuto() {
  var relojElemento = document.getElementById('reloj');
  var hora = tiempoActual[0];
  var minuto = tiempoActual[1];
  var segundo = tiempoActual[2];

  if (segundo === 20) {
    minuto += 1;
    segundo=0;
    if (minuto === 60) {
      minuto = 0;
      hora += 1;
      if (hora === 24) {
        detenerReloj();
        hora = 0;
        segundo=0;
      }
    }
  }

  tiempoActual = [hora, minuto, segundo + 1];
  relojElemento.innerHTML = formatoHora(hora) + ':' + formatoHora(minuto) + ':' + formatoHora(segundo + 1);
}

function sumarHora() {
  var relojElemento = document.getElementById('reloj');
  var hora = tiempoActual[0];
  var minuto = tiempoActual[1];
  var segundo = tiempoActual[2];

  hora += 1;
  if (hora === 24) {
    detenerReloj();
    hora = 0;
    segundo=0;
  }

  tiempoActual = [hora, minuto, segundo];
  relojElemento.innerHTML = formatoHora(hora) + ':' + formatoHora(minuto) + ':' + formatoHora(segundo);
}

function sumarMinutos() {
    var relojElemento = document.getElementById('reloj');
    var hora = tiempoActual[0];
    var minuto = tiempoActual[1];
    var segundo = tiempoActual[2];
  
    minuto += 1;
    if (minuto === 60) {
        minuto = 0;
        hora += 1;
        if (hora === 24) {
            detenerReloj();
            hora = 0;
          segundo=0;
        }
      }
  
    tiempoActual = [hora, minuto, segundo];
    relojElemento.innerHTML = formatoHora(hora) + ':' + formatoHora(minuto) + ':' + formatoHora(segundo);
  }

function formatoHora(tiempo) {
  if (tiempo < 10) {
    return '0' + tiempo;
  } else {
    return tiempo.toString();
  }
}

function iniciarReloj() {
  intervalo = setInterval(sumarMinuto, 1000);
}

function detenerReloj() {
  clearInterval(intervalo);
  
}
