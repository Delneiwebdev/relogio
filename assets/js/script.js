const horas = document.getElementById("horas");
minutos = document.getElementById("minutos");
segundos = document.getElementById("segundos");
const relogio = setInterval(function() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    document.getElementById('horas').textContent = hr < 10 ? '0' + hr : hr;
    document.getElementById('minuto').textContent = min < 10 ? '0' + min : min;
    document.getElementById('segundos').textContent = sec < 10 ? '0' + sec : sec;
}, 1000);
