let myText = "Hedeflerime ulaşmamda bu imkanları sağlayan <strong>KODLUYORUZ</strong> ekibine teşekkürlerimi iletirim."
document.querySelector('#myText').innerHTML = myText

let name = prompt("İsminizi giriniz...")
document.querySelector('#myName').innerHTML = name;

function showTime() {
  const today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let day = today.getDay();
  let days =["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
  let dayName = days[day];
  minute = checkTime(minute);
  second = checkTime(second);
  document.getElementById('myClock').innerHTML =  hour + ":" + minute + ":" + second + " " +dayName;
  setTimeout(showTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
showTime()
