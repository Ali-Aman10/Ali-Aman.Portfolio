const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  // alert("Plz Subscribe ");
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

 var typed = new typed(".text",{
  Strings:["Web Designer" , "Web Developer" , "Student"],
  typeSpeed:100,
  backSpeed:100,
   backDelay:1000,
  loop:true
 })