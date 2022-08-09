//==========Script for hamburger manu start==========//
let navList = document.querySelector(".nav-section-wrapper-bar");
let togglerBtn = document.querySelector(".nav-section-wrapper-toggler");

togglerBtn.addEventListener("click", ()=>{
    navList.classList.toggle("active");
    
});

navList.addEventListener("click", () => {
    navList.classList.remove("active");
})
//==========Script for hamburger manu end==========//