let pages = document.getElementsByClassName('page');

console.log(pages);

//create background with stars
function stars(){
    let count = 1000;
    let scene = document.getElementById("scene1");
    console.log(scene);
    let i=0;
    while (i<count){
        let star = document.createElement("i");
        let x = Math.floor(Math.random()*scene.clientWidth);
        let y = Math.floor(Math.random()*scene.clientHeight);
        let duration = Math.random()*10;
        let size = Math.random()*2;

        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1+size+'px';
        star.style.height = 1+size+'px';

        star.style.animationDuration = 5+duration+'s';
        star.style.animationDelay = duration+'s';

        scene.appendChild(star);
        i++;
    }
}

// Function for revealing sections as we scroll
function checkBoxes(){
    let triggerBottom = window.innerHeight/5*4;
    for (let i = 0; i< pages.length; i++) {
        let pageTop = pages[i].getBoundingClientRect().top;
        if (pageTop < triggerBottom){
            pages[i].classList.add('show');
        }
        else{
            pages[i].classList.remove('show');
        }  
    }
}

// Interactivity of the clicking action on the navigation bar
let home = document.getElementById("home1");
home.addEventListener('click', ()=>{
    document.getElementById("home").scrollIntoView({behavior: 'smooth'});
})

let cat = document.getElementById('cat1');
cat.addEventListener('click', ()=>{
    document.getElementById('cat').scrollIntoView({behavior: 'smooth'});
})

let map = document.getElementById('map1');
map.addEventListener('click', ()=>{
    document.getElementById('map').scrollIntoView({behavior: 'smooth'});
})

let vid = document.getElementById('vid1');
vid.addEventListener('click', ()=>{
    document.getElementById('video').scrollIntoView({behavior: 'smooth'});
})

let plant = document.getElementById('plant1');
plant.addEventListener('click', ()=>{
    document.getElementById('plant').scrollIntoView({behavior: 'smooth'});
})

let more = document.getElementById('more1');
more.addEventListener('click', ()=>{
    document.getElementById('more').scrollIntoView({behavior: 'smooth'});
})


// Interactivity of the scrolling action
window.addEventListener('load', ()=>{
    window.addEventListener('scroll', ()=>{
        checkBoxes();
        let bus=document.getElementById("bus");
        let busDiv = document.getElementById("busCont");
        console.log(busDiv.clientWidth);
        bus.style.left = (window.scrollY*(busDiv.clientWidth/(document.body.clientHeight-window.innerHeight))+20 + (window.innerWidth)/2)+'px';
    })
    stars();
})