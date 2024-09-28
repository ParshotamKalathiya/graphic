$(document).ready(function () {
    $(window).scroll(function () {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      // scroll-up button show/hide script
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    // slide-up script
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      // removing smooth scroll on slide-up button click
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      // applying again smooth scroll on menu items click
      $("html").css("scrollBehavior", "smooth");
    });
  
    // toggle menu/navbar script
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    // typing text animation script
    var typed = new Typed(".typing", {
      strings: ["Graphic Designer", "UI/UX Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    var typed = new Typed(".typing-2", {
      strings: ["Graphic Designer", "UI/UX Designer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  
    // // owl carousel script
    // $('.carousel').owlCarousel({
    //     margin: 20,
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeOut: 2000,
    //     autoplayHoverPause: true,
    //     responsive: {
    //         0:{
    //             items: 1,
    //             nav: false
    //         },
    //         600:{
    //             items: 2,
    //             nav: false
    //         },
    //         1000:{
    //             items: 3,
    //             nav: false
    //         }
    //     }
    // });
  });
  document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      const nameInput = document.getElementById('name').value;
      const emailInput = document.getElementById('email').value;
      const subjectInput = document.getElementById('subject').value;
      const messageInput = document.getElementById('message').value;
  
      // Check for empty fields
      if (!nameInput) {
          alert('Please enter your name');
      } else if (!emailInput) {
          alert('Please enter your email');
      } else if (!validateEmail(emailInput)) {
          alert('Please enter a valid email address');
      }else if(!subjectInput){
          alert('Please enter your subject')
      }else if(!messageInput){
          alert('Please enter your message')
      } else {
          // Proceed with form submission or further processing
          alert(`Thank You ${nameInput} for Contact me.`);
      }
  });
  
  // Function to validate email format
  function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
  }
  
