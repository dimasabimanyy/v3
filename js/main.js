// Smooth navigation scroll
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// Start typewriter effect in hero
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 110 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};
// End typweriter

// Button Hover Effect -> Download  CV button
let button = document.querySelector(".btn-primary");
let item = document.querySelector(".round");

button.addEventListener("mouseenter", function (event) {
  this.classList += " animate";

  let buttonX = event.offsetX;
  let buttonY = event.offsetY;

  if (buttonY < 24) {
    item.style.top = 0 + "px";
  } else if (buttonY > 30) {
    item.style.top = 48 + "px";
  }

  item.style.left = buttonX + "px";
  item.style.width = "1px";
  item.style.height = "1px";
});

button.addEventListener("mouseleave", function () {
  this.classList.remove("animate");

  let buttonX = event.offsetX;
  let buttonY = event.offsetY;

  if (buttonY < 24) {
    item.style.top = 0 + "px";
  } else if (buttonY > 30) {
    item.style.top = 48 + "px";
  }
  item.style.left = buttonX + "px";
});

// Button hover effect -> Resume button
let button_resume = document.querySelector(".btn-resume");
let item_resume = document.querySelector(".round-3");

button_resume.addEventListener("mouseenter", function (event) {
  this.classList += " animate-resume";

  let button_resumeX = event.offsetX;
  let button_resumeY = event.offsetY;

  if (button_resumeY < 24) {
    item_resume.style.top = 0 + "px";
  } else if (button_resumeY > 30) {
    item_resume.style.top = 48 + "px";
  }

  item_resume.style.left = button_resumeX + "px";
  item_resume.style.width = "1px";
  item_resume.style.height = "1px";
});

button_resume.addEventListener("mouseleave", function () {
  this.classList.remove("animate-resume");

  let button_resumeX = event.offsetX;
  let button_resumeY = event.offsetY;

  if (button_resumeY < 24) {
    item_resume.style.top = 0 + "px";
  } else if (button_resumeY > 30) {
    item_resume.style.top = 48 + "px";
  }
  item_resume.style.left = button_resumeX + "px";
});

// Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active"); //Toggle nav

    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards`;
      }
      // console.log(index / 5 + 0.2);
    });
    // Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// Smooth scrolling to section
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
