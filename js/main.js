// sticky menu js
window.addEventListener('scroll', function () {
         const nav = document.querySelector('nav');
         nav.classList.toggle('sticky', window.scrollY > 0);
});
     
// wow js active js
 new WOW().init();