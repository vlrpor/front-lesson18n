function currentTime() {
  let date = new Date(); 
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

    
  if(hh > 12){
      session = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    
   let time = hh + ":" + mm + ":" + ss + " " + session;

  document.getElementById("clock").innerText = time; 
  const t = setTimeout(function(){ currentTime() }, 1000); 

}

currentTime();

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slidesWrapper = document.querySelector(".slides-wrapper");

const startAutoSlides = document.querySelector(".start-slide");
const stopAutoSlides = document.querySelector(".stop-slide");

let currentSlide = 0;

function loadSlides() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function goToNextSlide() {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }
  loadSlides();
}

function goToPrevSlide() {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide -= 1;
  }
  loadSlides();
}

loadSlides();

let sliderIntervalId = null;
sliderIntervalId = setInterval(goToNextSlide, 3000);

stopAutoSlides.addEventListener("click", () => {
  clearInterval(sliderIntervalId);
});

slidesWrapper.addEventListener("mouseenter", () => {
  sliderIntervalId = setInterval(goToNextSlide, 3000);
});

slidesWrapper.addEventListener("mouseleave", () => {
  clearInterval(sliderIntervalId);
});