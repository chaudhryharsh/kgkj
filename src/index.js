const images = document.querySelectorAll('.featured-display img');
const featured = document.querySelector('.featured-display');
const contactButtons = document.querySelectorAll('.contactbutton');
const contactClose = document.querySelector('.close-btn');
// const featuredText = document.querySelector('.featured-display-text');

contactButtons.forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.contact-overlay').style.display = 'block';
    document.body.classList.add('stop-scrolling');
  })
})

contactClose.addEventListener('click', () => {
  document.querySelector('.contact-overlay').style.display = 'none';
  document.body.classList.remove('stop-scrolling');
})

document.addEventListener('DOMContentLoaded', () => {
  images[0].style.display = 'block';
})

document.addEventListener('scroll', async () => {
  const posY = 1.1 * window.scrollY.toFixed();
  featured.style.transformOrigin = `0px 0px ${posY}px`;
  // featuredText.style.transformOrigin = `0px 0px calc(1.1*${posY}px)`;


  await images.forEach((image, index) => {
    const ratio = Math.round(window.scrollY.toFixed() / 18);
    if (index == ratio) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  })
})
