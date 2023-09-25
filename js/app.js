
const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".navbar-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  nav.classList.remove("active");
}))





//section jumping through navbar

document.addEventListener("DOMContentLoaded", function () {
  const navigation = document.querySelector(".primary-navigation");
  const navigationHeight = navigation.offsetHeight;

  document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px"
  );
});

$(document).ready(function() {
    // Initialize Fancybox for the tehtud-link elements
    $(".tehtud-link").fancybox({
      thumbs: {
        autoStart: true,
      },
      buttons: [
        "zoom",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close",
      ],
      beforeShow: function(instance, current) {
        // Show overlay and navigation arrows
        $("#tehtud-overlay").fadeIn(300);
        $(".overlay-arrow").fadeIn(300);
  
        // Display the current image in the overlay
        $("#tehtud-overlay-image img").attr("src", current.src);
      },
      afterClose: function() {
        // Hide overlay and navigation arrows
        $("#tehtud-overlay").fadeOut(300);
        $(".overlay-arrow").fadeOut(300);
      },
    });
  });


  const navbarMenu = document.querySelector('.navbar-menu');

// Add this code where you want to enable the hover effect
navbarMenu.classList.add('active');

// Add this code where you want to disable the hover effect
navbarMenu.classList.remove('active');



  
  