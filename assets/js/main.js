//==========Script for video section start==========// 
$(".video")
  .parent()
  .click(function () {
    if ($(this).children(".video").get(0).paused) {
      $(this).children(".video").get(0).play();
      $(this).children(".playpause").fadeOut();
    } else {
      $(this).children(".video").get(0).pause();
      $(this).children(".playpause").fadeIn();
    }
});
//==========Script for video section end==========//




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

