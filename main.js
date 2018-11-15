const slideList = [{
      img: "images/img1.jpg",
      text: 'Niebieska pajęczyna'
   },
   {
      img: "images/img2.jpg",
      text: 'zielona pajęczyna'
   },
   {
      img: "images/img3.jpg",
      text: 'Zachód słońca'
   }
];

const image = document.querySelector('img.slider');
const h3 = document.querySelector('h3.slider');
const dots = [...document.querySelectorAll('.dots span')];
// Interfejs
const time = 10000;
let active = 0;

const changeDot = () => {
   const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
   dots[activeDot].classList.remove('active');
   dots[active].classList.add("active");
}


const changeSlide = () => {
   active++;
   if (active === slideList.length) {
      active = 0;
   }
   image.src = slideList[active].img;
   h3.textContent = slideList[active].text;
   changeDot();
}

let indexInterval = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
   if (e.keyCode == "39") {
      changeSlide();
      clearInterval(indexInterval);
   }
   if (e.keyCode == "37") {
      active--;
      clearInterval(indexInterval);
      if (active < 0) {
         active = slideList.length - 1;
      }
      image.src = slideList[active].img;
      h3.textContent = slideList[active].text;
      changeDot();
   }
   indexInterval = setInterval(changeSlide, time);
}

window.addEventListener('keydown', keyChangeSlide);


const advices = ["Poradzisz sobie!", "You can do it!", "Rób co chcesz"];

//dodawanie elementów tablicy
const input = document.querySelector("input");
const btnAdd = document.querySelector("button.add");
const btnClean = document.querySelector("button.clean");

const addOption = (e) => {
   e.preventDefault();
   const advice = input.value;
   advices.push(advice);
   input.value = "";
}

const cleanOptions = () => {
   e.preventDefault();
   advices = [];
}

btnAdd.addEventListener("click", addOption);
btnClean.addEventListener("click", cleanOptions)

//pokazywanie rady i możliwości
const btnShowAdvice = document.querySelector('button.showAdvice');
const btnShowOptions = document.querySelector('button.showOptions');
const h1 = document.querySelector('h1');
const h4 = document.querySelector('h4');

const showOption = () => {
   h1.textContent = "";
   advices.forEach((adv, index) => {
      const div = document.createElement('div');
      div.textContent = `Rada nr ${index+1}:\n ${adv}`
      h4.appendChild(div);
   })
}

const showAdvice = () => {
   const advice = advices[Math.floor(Math.random() * advices.length)];
   h1.textContent = advice
}

btnShowAdvice.addEventListener("click", showAdvice)
btnShowOptions.addEventListener("click", showOption);