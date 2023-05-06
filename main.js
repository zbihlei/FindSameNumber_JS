
const field = document.querySelector('.field__container');
const singleField = document.querySelectorAll('.field__item');
const startbtn = document.querySelector('.startbtn');
const playagain = document.querySelector('.playagain');
const pressstart = document.querySelector('.pressstart');
const youwin = document.querySelector('.youwin');
const gametime = document.querySelector('.gametime');

//timer 
let timer = 0;
let timerInterval;
let ms = document.getElementById('ms');
let second = document.getElementById('second');
let minute = document.getElementById('minute');

function start() {

    pressstart.style.display = 'none';
    field.classList.remove('pregame');

  stop();
  timerInterval = setInterval(function() {
  timer += 1/60;
  let msVal = Math.floor((timer - Math.floor(timer))*100);
  let secondVal = Math.floor(timer) - Math.floor(timer/60) * 60;
  let minuteVal = Math.floor(timer/60);
  ms.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
  second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
  minute.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
  }, 1000/60);
}

function stop() {
  clearInterval(timerInterval);
}

console.log(timerInterval);

let classNames = [];
let objects = [];
let counter = 0;

const showElement =()=>{
   
    singleField.forEach.call(singleField,function(el){
       
        el.addEventListener('click', (e)=>{

            el.classList.toggle('active');
            objects.push(el);
            classNames.push(el.className);

            for (let i =0; i<classNames.length; i++){
              if (classNames[i] === classNames [i-1]){
                objects[i-1].classList.add('found');
                e.target.classList.add('found');
                classNames = classNames.splice();
                objects = objects.splice();
                counter +=1;
              }
            }

            setTimeout(()=>{
                el.classList.toggle('active');
              },300);
              if (counter === 8){
                stop();
                field.classList.add('pregame');
                youwin.style.display = 'block';
                startbtn.style.display = 'none';
                playagain.style.display = 'block';
                gametime.innerText = Math.floor(timer);
              }
          });
         
        });

    }

startbtn.addEventListener('click', ()=>{
    start();
    showElement();
});

playagain.addEventListener('click', ()=>{
    location.reload();
});








 

