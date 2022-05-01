let minutos = 0;
let segundos = 0;
let interval;

function startTimer() {
  interval = setInterval(relogio, 1000);
}

function pauseTimer() {
  clearInterval(interval);
}

function clearTimer() {
  clearInterval(interval);
  minutos = 0;
  segundos = 0;
  document.getElementById("relogio").innerText = "00:00";
}

function relogio() {
  segundos++;
  if (segundos == 60) {
    minutos++;
    segundos = 0;
  }
  document.getElementById("relogio").innerText =
    (minutos < 10 ? "0" + minutos : minutos) +
    ":" +
    (segundos < 10 ? "0" + segundos : segundos);
}
