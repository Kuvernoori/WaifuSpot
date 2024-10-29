const contactBtn = document.getElementById('contactBtn');
const contactForm = document.getElementById('contactForm');
const closeBtn = document.querySelector('.close-btn');


contactBtn.addEventListener('click', () => {
    contactForm.style.display = 'flex';
});


closeBtn.addEventListener('click', () => {
    contactForm.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target === contactForm) {
        contactForm.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-button');
  
    accordionButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.querySelector(targetId);
  
        document.querySelectorAll('.accordion-collapse').forEach(item => {
          if (item !== targetElement) {
            item.style.display = 'none';
          }
        });

          switch (targetElement.style.display) {
              case 'block':
                  targetElement.style.display = 'none';
                  break;
              case 'none':
              case '':
                  targetElement.style.display = 'block';
                  break;
              default:
                  targetElement.style.display = 'block';
          }
      });
    });
  });
