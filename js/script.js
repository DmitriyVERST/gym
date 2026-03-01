//Js
document.querySelector(".mobile-btn").addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("active");
  });


// GSAP

gsap.to('.mb', {
    X: 200,
})