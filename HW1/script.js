let head = document.getElementById("head");
let eyes = document.getElementById("eyes");
let closedEyes = document.getElementById("closed");


head.addEventListener("mouseenter", ()=>{
    let eyes = document.getElementById("eyes");
    eyes.style.opacity = "0";
    let closedEyes = document.getElementById("closed");
    closedEyes.style.opacity = "1";
})

head.addEventListener("mouseleave", ()=>{
    eyes.style.opacity = "1";
    closedEyes.style.opacity = "0";
})

let cheek = document.getElementById("cheek");

cheek.addEventListener("mouseover",()=>{
    cheek.style.filter = "drop-shadow(0 0 0.75rem rgb(255, 47, 0))";
})

cheek.addEventListener("mouseleave",()=>{
    cheek.style.filter = "";
})
