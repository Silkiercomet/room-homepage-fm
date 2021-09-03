let leftBtn = document.querySelector(".left-btn"),
rightBtn = document.querySelector(".right-btn"),
sliderContainer = document.querySelector("#container"),
leftContainer = document.querySelector(".images"),
sliderContainerLength = 3,
activeIndex = 1;

const moveImage = (x) => leftContainer.style.left = `${(x -1 ) * 100}% `



leftBtn.addEventListener("click", function(){
    switch(activeIndex) {
        case 1:
            ++activeIndex
            moveImage(activeIndex)
            break;
        case 2:
            ++activeIndex
            moveImage(activeIndex)
            break;
        case 3:
            activeIndex = 1 
            moveImage(activeIndex)
            break;
    }
})
rightBtn.addEventListener("click", function(){
    switch(activeIndex) {
        case 1:
            activeIndex = 3
            moveImage(activeIndex)
            break;
        case 2:
            --activeIndex
            moveImage(activeIndex)
            
            break;
        case 3:
            --activeIndex 
            moveImage(activeIndex)
           
            break;
    }
})
