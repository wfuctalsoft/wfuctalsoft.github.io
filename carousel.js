let elements = document.getElementById("banners").children;
let idx = 0;
function slideInit(){
    for(let i = 0; i < elements.length; i++){
        let pos = (idx+i)%elements.length;
        if(pos > 5)
            elements[i].style.transform = `translateX(-250%)`;
        else
            elements[i].style.transform = `translateX(${pos*100-250}%)`;

        if(pos == 2) elements[i].style.opacity = `100%`;
        else if(pos == 1 || pos == 3) elements[i].style.opacity = `50%`;
        else elements[i].style.opacity = `0%`;

        elements[i].style.transition = "transform 1s, opacity 1s";
    }
}
function slide(){
    for(let i = 0; i < elements.length; i++){
        let pos = (idx+i)%elements.length;
        if(pos > 5)
            elements[i].style.transform = `translateX(-250%)`;
        else
            elements[i].style.transform = `translateX(${pos*100-250}%)`;

        if(pos == 2) elements[i].style.opacity = `100%`;
        else if(pos == 1 || pos == 3) elements[i].style.opacity = `50%`;
        else elements[i].style.opacity = `0%`;
    }
    idx--;
    if(idx < 0) idx = elements.length-1;
}