document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('.nav').offsetHeight;

      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});


const sectificate = document.querySelectorAll('.sertificate')
const bigImgWrap = document.querySelector('.big-img-wrap')
const bigImg = document.querySelector('.big-img')
const cross = document.querySelector('.cross')



sectificate.forEach((item) => {
  item.addEventListener('click', () => {
    bigImgWrap.style.display = 'block'
    bigImg.src = `${item.getAttribute('src')}`
  })
})

const offBigImg = () => {
  bigImgWrap.style.display = 'none'
}

cross.addEventListener('click', offBigImg)

// BURGER

const burgerBtn = document.querySelector('.header-burger')
const headerMenu = document.querySelector('.header-menu')
const linkNav = document.querySelectorAll('.link-nav')

const openBurgerMenu = () => {
  headerMenu.classList.toggle('active-menu')
}

linkNav.forEach((item) => {
  item.addEventListener('click', () => {
    headerMenu.classList.add('active-menu')
  })
})

burgerBtn.addEventListener('click', openBurgerMenu)