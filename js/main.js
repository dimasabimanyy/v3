// Smooth navigation scroll
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  })
  
  
  // Button Hover Effect
  let button = document.querySelector(".primary-button");
  let item = document.querySelector(".primary-button .round");
  
//   button.addEventListener("mouseenter", function(event) {
//     this.classList += " animate";
  
//     let buttonX = event.offsetX;
//     let buttonY = event.offsetY;
  
//     if (buttonY < 24) {
//       item.style.top = 0 + "px";
//     } else if (buttonY > 30) {
//       item.style.top = 48 + "px";
//     }
  
//     item.style.left = buttonX + "px";
//     item.style.width = "1px";
//     item.style.height = "1px";
//   });
  
//   button.addEventListener("mouseleave", function() {
//     this.classList.remove("animate");
  
//     let buttonX = event.offsetX;
//     let buttonY = event.offsetY;
  
//     if (buttonY < 24) {
//       item.style.top = 0 + "px";
//     } else if (buttonY > 30) {
//       item.style.top = 48 + "px";
//     }
//     item.style.left = buttonX + "px";
//   });
  
  // Navigation
  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
  
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active'); //Toggle nav
        
        // Animate links
        navLinks.forEach((link, index) => { 
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards`;
            }
            // console.log(index / 5 + 0.2);
        });
        // Burger animation
        burger.classList.toggle('toggle');
    });
  }
  
  navSlide();
  
  // Smooth scrolling to section
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  