
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
document.addEventListener('DOMContentLoaded', function() {
  let teenusedItems = document.querySelectorAll('.teenused-text');

  teenusedItems.forEach(function(item) {
      item.addEventListener('mouseover', function() {
          let imageSrc = item.getAttribute('data-image');
          let description = item.getAttribute('data-description');

          if (imageSrc) {
              document.getElementById('related-image').style.backgroundImage = 'url(images/' + imageSrc + ')';
          }
          if (description) {
              document.getElementById('related-description').innerText = description;
          }
      });

      item.addEventListener('mouseout', function() {
          document.getElementById('related-image').style.backgroundImage = 'none';
          document.getElementById('related-description').innerText = '';
      });
  });
});


const description = document.querySelector('.related-description');
const image = document.querySelector('.related-image');

let windowWidth = window.innerWidth;

let mouseoverListener;

document.addEventListener('DOMContentLoaded', function() {
  let teenusedItems = document.querySelectorAll('.teenused-text');

  teenusedItems.forEach(function(item) {
    mouseoverListener = item.addEventListener('mouseover', function() {
      let imageSrc = item.getAttribute('data-image');
      let description = item.getAttribute('data-description');
      if (imageSrc) {
        document.getElementById('related-image').style.backgroundImage = 'url(images/' + imageSrc + ')';
      }
      if (description) {
        document.getElementById('related-description').innerHTML = description;
      }

      if (windowWidth > 768) {
        description.style.display = 'block';
        image.style.display = 'block';
      } else {
        description.style.display = 'none';
        image.style.display = 'none';
      }
    });

    item.addEventListener('resize', function() {
      if (windowWidth <= 768) {
        description.style.display = 'none';
        image.style.display = 'none';
        item.removeEventListener('mouseover', mouseoverListener);
      }
    });
  });
});

//section jumping through navbar

const navigation =
    document.querySelector(".primary-navigation")

const navigationHeight =
 navigation.offsetHeight;

document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px"
);




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


  
  