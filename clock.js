const clockContainer=document.querySelector(".js-clock")
 ,clockTitle=clockContainer.querySelector("h2");

function getTime(){
  const dates=new Date();
  const hours=dates.getHours();
  const minutes=dates.getMinutes();
  const seconds=dates.getSeconds();
  clockTitle.innerText=`${hours}:${minutes}:${seconds}`;
}

function init(){
  getTime();
  setInterval(getTime,1000);
}

init();
