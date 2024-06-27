const mode = document.querySelector(".moonIcon");
const header = document.querySelector("header");
const body = document.body;
const lightMobileImage = 'url("images/images/bg-mobile-light.jpg")';
const darkMobileImage =  'url("images/images/bg-mobile-dark.jpg")';
const lightDesktopImage = 'url("images/images/bg-desktop-light.jpg")';
const darkDesktopImage = 'url("images/images/bg-desktop-dark.jpg")';
const sun = "images/images/icon-sun.svg";
const moon = "images/images/icon-moon.svg";
const ul = document.querySelector("ul");
let container = document.querySelector(".container");
const form = document.querySelector("form");
const input = document.querySelector("#inputTag");

form.addEventListener("submit", function(event){
    event.preventDefault();
    addItems();
});

mode.addEventListener("click", modeChange);
let isClicked = false;

function modeChange(){
    // const currentImage = window.getComputedStyle(header).backgroundImage;
    // if(currentImage.includes("images/images/bg-mobile-light.jpg") || currentImage.includes("images/images/bg-desktop-light.jpg")){
    //     if(window.innerWidth >= 600){
    //         header.style.backgroundImage = darkDesktopImage;
    //     }
        // else{
        //     header.style.backgroundImage = darkMobileImage;
        // }
        // body.style.background = "#181824";
        // container.classList.add("contain");
        // mode.src = sun;
        // container.classList.add(".contain"); 
    // }
    // else{
    //     if(window.innerWidth >= 600){
    //         header.style.backgroundImage = lightDesktopImage;
    //     }
    //     else{
    //         header.style.backgroundImage = lightMobileImage;
    //     }

    //     body.style.background = "#fafafa";
    //     container.classList.remove("contain");
    //     mode.src = moon;
    // };
    if(isClicked === false){
        if(window.innerWidth >= 600){
            header.style.backgroundImage = darkDesktopImage;
            body.style.background = "#181824";
            container.classList.add("contain");
            mode.src = sun;
            container.classList.add(".contain"); 
        }
            else{
                header.style.backgroundImage = darkMobileImage;
            }
      isClicked = true;  
    }
    else{
        if(window.innerWidth >= 600){
            header.style.backgroundImage = lightDesktopImage;
        }
        else{
            header.style.backgroundImage = lightMobileImage;
        }
        
        body.style.background = "#fafafa";
        container.classList.remove("contain");
        mode.src = moon;
        isClicked = false;
    };
}

function addItems() {
    if(input.value === ''){
        alert("You Order is empty");
    }else{
        let li = document.createElement("li");
        let crossImg = document.createElement("img");
        crossImg.src = "images/images/icon-cross.svg";
        li.innerHTML = input.value;
        li.appendChild(crossImg);
        ul.append(li);
    }
    input.value = '';
};

ul.addEventListener("click", (e) =>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
    }
});