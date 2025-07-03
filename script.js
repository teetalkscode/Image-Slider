const imgs = document.querySelectorAll ("img")
const goPrev = document.querySelector (".prev")
const goNext = document.querySelector (".next")
const iSlider = document.querySelector (".slider")
let currentPic = 0;

imgs.forEach (
    (img, index) => {
    img.style.left = `${index * 100}%`
})

goNext.addEventListener ("click", () => {
    currentPic++
    imgslides(currentPic)
})

goPrev.addEventListener ("click", () => {
    currentPic--
    imgslides(currentPic)
})

function imgslides () {
    if (currentPic >= imgs.length) {
        currentPic = 0
    }   else if ( currentPic < 0) {
        currentPic = imgs.length -1
    }
    iSlider.style.transform = `translateX(-${currentPic * 100}%)`
}