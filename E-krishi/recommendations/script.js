
  document.addEventListener("DOMContentLoaded", function() {
    const elementsToAnimate = document.querySelectorAll('.description, .image');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('pop-in');  
          observer.unobserve(entry.target);    
        }
      });
    }, { threshold: 0.2 }); 
    elementsToAnimate.forEach(el => {
      observer.observe(el);
    });
  });
