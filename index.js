const slider = document.getElementById('leftSlider');
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
 
  if (slider.style.width === '180px') {
    slider.style.width = '60px';
  } else {
    slider.style.width = '180px';
  }
});


document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 150;
  sections.forEach(sec => {
    const link = document.querySelector(`.slider a[href="#${sec.id}"]`);
    if (scrollPos >= sec.offsetTop &&
        scrollPos < sec.offsetTop + sec.offsetHeight) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});