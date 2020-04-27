setInterval(setClock, 1000)
const wskazowkaGodziny = document.querySelector('[data-hour-wskazowka]')
const wskazowkaMinuty = document.querySelector('[data-minute-wskazowka]')
const wskazowkaSekundy = document.querySelector('[data-second-wskazowka]')
function setClock() {
  const currentDate = new Date()
  const wspolczynnikSekund = currentDate.getSeconds() / 60
  const wspolczynnikMinut = (wspolczynnikSekund + currentDate.getMinutes()) / 60
  const wspolczynnikGodzin = (wspolczynnikMinut + currentDate.getHours()) / 12
  setRotation(wskazowkaSekundy, wspolczynnikSekund)
  setRotation(wskazowkaMinuty, wspolczynnikMinut)
  setRotation(wskazowkaGodziny, wspolczynnikGodzin)
}
function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()
