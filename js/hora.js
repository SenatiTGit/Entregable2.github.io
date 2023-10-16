function actualizarHora() {
    var elementoHora = document.getElementById("hora-actual");
    var hora = new Date();
    var horas = hora.getHours();
    var minutos = hora.getMinutes();
    var segundos = hora.getSeconds();
    var ampm = horas >= 12 ? 'PM' : 'AM';

    if (horas > 12) {
        horas = horas - 12;
    }

    if (horas < 10) {
        horas = "0" + horas;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    elementoHora.textContent = horas + ":" + minutos + ":" + segundos + " " + ampm;
}

setInterval(actualizarHora, 1000);
