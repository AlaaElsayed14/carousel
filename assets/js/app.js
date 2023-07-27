const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".btn-left");
const rightBtn = document.querySelector(".btn-right");
let index = 0;
let move = 0;

leftBtn.addEventListener("click", prevSlide)
rightBtn.addEventListener("click", nextSlide)

function nextSlide (){
    index++;
    if (index >= slides.length){
        index = 0;
    }
    slides.forEach(slide => {
        slide.classList.remove("active");
    });
    slides[index].classList.add("active");
}

function prevSlide(){
    index--;
    
    if(index <= 0){
        index = slides.length-1;
    }
    console.log(index);
    slides.forEach(slide => {
        slide.classList.remove("active");
    });
    slides[index].classList.add("active");
}