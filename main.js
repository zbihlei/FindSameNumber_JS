const field = document.querySelector('.field__container');
const singleField = document.querySelectorAll('.field__item');
const startbtn = document.querySelector('.startbtn');
const playagain = document.querySelector('.playagain');
const pressstart = document.querySelector('.pressstart');
const youwin = document.querySelector('.youwin');


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


let elements = [];
let elementsCount = new Set();

const showElement =()=>{
   
    singleField.forEach.call(singleField,function(el){
       
        el.addEventListener('click', ()=>{

                el.classList.toggle('active');
                setTimeout(()=>{
                    el.classList.remove('active');
                    elements.push(el.innerText);

                     for (let i =0; i<elements.length; i++){
                        if (elements[i] === elements[i-1]){
                            // el.classList.add('found');
                            // elements[i].classList.add('found');
                            // elements[i-1].classList.add('found');
                            // document.getElementById(elements[i]).classList.add('found');
                            // document.getElementById(elements[i-1]).classList.add('found');

                            // if (el.id !== el.innerText){
                            //     el.classList.add('found');
                            // }
                            // document.getElementById(el.innerText).classList.add('found');
                           
                            elements = elements.splice();
                        }
                   }
                },300); 
          });
    });
}

// if (/*smth*/){
//     stop();
//     field.classList.add('pregame');
//     youwin.style.display = 'block';
//     startbtn.style.display = 'none';
//     playagain.style.display = 'block';
// }


startbtn.addEventListener('click', ()=>{
    start();
    showElement();
});

playagain.addEventListener('click', ()=>{
    location.reload();
});








 

