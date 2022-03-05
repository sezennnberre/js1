let visitorName = prompt('Adınızı Girin','Adınız').toUpperCase()
let name = document.querySelector('#name')

myName.innerHTML = `Merhaba ${visitorName}`;

setInterval( ()=> {

    let date = new Date()
    let day = date.getDay()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]

    let clock = document.querySelector('#clock')
    let text = document.querySelector('#text')

    hour = (hour < 10) ? "0" + hour : hour
    minute = (minute < 10) ? "0" + minute : minute
    second = (second < 10) ? "0" + second : second

    myClock.innerHTML = `${hour}:${minute}:${second} ${days[day]}`
  }, 1000);