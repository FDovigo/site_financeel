const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        } 
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements_rev = document.querySelectorAll('.hidden__rev');
const hiddenElements_fadein = document.querySelectorAll('.hidden__fadein');

hiddenElements.forEach((el) => observer.observe(el));
hiddenElements_rev.forEach((el) => observer.observe(el));
hiddenElements_fadein.forEach((el) => observer.observe(el));