let leftBtn = document.querySelector(".left-btn"),
rightBtn = document.querySelector(".right-btn"),
sliderContainer = document.querySelector("#container"),
leftContainer = document.querySelector(".images"),
sliderContainerLength = 3,
activeIndex = 1;


const moveImage = (x) => leftContainer.style.left = `${(x -1 ) * 100}% `

const changeText = (x) => {
    if( x == 1){
        document.querySelector("#header").textContent = "Discover innovative ways to decorate"
        document.querySelector("#paragraph").textContent = "  We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
        
    }else if(x == 2){
        document.querySelector("#header").textContent =  "We are available all across the globe"
        document.querySelector("#paragraph").textContent = "  With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    }else if(x == 3){
        document.querySelector("#header").textContent =  "Manufactured with the best materials"
        document.querySelector("#paragraph").textContent = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
}


leftBtn.addEventListener("click", function(){

    switch(activeIndex) {
        case 1:
            ++activeIndex
            moveImage(activeIndex)
            changeText(activeIndex)
            break;
        case 2:
            ++activeIndex
            moveImage(activeIndex)
            changeText(activeIndex)
            break;
        case 3:
            activeIndex = 1
            moveImage(activeIndex)
            changeText(activeIndex)
            
            break;
    }
    console.log(activeIndex)
})
rightBtn.addEventListener("click", function(){
    switch(activeIndex) {
        case 1:
            activeIndex = 3
            moveImage(activeIndex)
            changeText(activeIndex)
            break;
        case 2:
            --activeIndex
            moveImage(activeIndex)
            changeText(activeIndex)
            break;
        case 3:
            --activeIndex 
            moveImage(activeIndex)
            changeText(activeIndex)
            break;
    }
})
