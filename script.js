// Active link highlight on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

$(document).ready(function(){
  $('.slider').slick({
    dots: true,          
    infinite: true,      
    speed: 500,           
    slidesToShow: 1,    
    slidesToScroll: 1,    
    autoplay: true,       
    autoplaySpeed: 2000,   
    arrows: true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next')  
  });
});
