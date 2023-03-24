//Header toggle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//Typing effect
let typed = new Typed('.type',{
    strings: ['i\'m a Computer Science Student!', 'who Loves To Program!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
});

// All links
let navLinks = document.querySelectorAll('nav ul li a');

// All sections
let sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
  const scrollPos = window.scrollY + 20;
  sections.forEach(section => {
    if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
      navLinks.forEach(link => {
        if (link.href.includes(section.id)) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
});
