const hour = document.getElementById('hour');
const minute = document.getElementById('minutes')
const second = document.getElementById('seconds')
const year = document.getElementById('year');
const month = document.getElementById('month')
const day = document.getElementById('day')
const ampm = document.getElementById('ampm')

function updateClock (){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let y = new Date().getFullYear();
    let mth = new Date().getMonth() + 1;
    let d = new Date().getDate();
    let ampmEl = "AM"
  
    if(h > 12){
      h = h - 12;
      ampmEl = "PM"
    } 

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    mth = mth < 10 ? "0" + mth: mth;
    d = d < 10 ? "0" + d : d;

    hour.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    year.innerText = y;
    month.innerText = mth;
    day.innerText = d;
    ampm.innerText = ampmEl;
    setTimeout(()=>{
      updateClock();
    },1000);
}

updateClock()