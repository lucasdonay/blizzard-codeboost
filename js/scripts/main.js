var slide_thumbnail = new Swiper(".slide-thumbnail", {
  slidesPerView: 5,
  direction: 'vertical',
  spaceBetween: 20,
  watchSlidesProgress: true
});
var slide_hero = new Swiper(".slide-principal", {
  effect: 'fade',
  thumbs: {
    swiper: slide_thumbnail,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  }
});

const allFilters = document.querySelectorAll('.js-nav-games li a')
const tabPane = document.querySelectorAll('.tab-pane-games')

allFilters.forEach((filter, index )=> {
  filter.addEventListener('click', (event) => {
    event.preventDefault();

    allFilters.forEach(item => {
      item.classList.remove('active')
    })
    
    tabPane.forEach(tab => {
      tab.classList.remove('active')
    })

    tabPane[index].classList.add('active')
    filter.classList.add('active')

  })
})

const logar = document.querySelector('.js-logar')
const closeModal = document.querySelector('.js-close')
let html = document.documentElement

logar.addEventListener('click', (event) => {
  event.preventDefault();
  html.classList.add('show-modal')
});


closeModal.addEventListener('click', (event) => {
  event.preventDefault();
  html.classList.remove('show-modal')
});

const btnMenu = document.querySelectorAll('.js-btn-menu')
const siteMenu = document.querySelectorAll('.js-menu')

btnMenu.forEach((btn,index) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();

    siteMenu.forEach(itemMenu => {
      itemMenu.classList.remove('active')
      itemMenu.addEventListener('mouseleave', () => {
        itemMenu.classList.remove('active')            
        btnMenu.forEach(itemBtn => {
          itemBtn.classList.remove('active');
        });
      });
    }) ;

    btnMenu.forEach(itemBtn => {
      itemBtn.classList.remove('active');
    });



    btn.classList.add('active')
    siteMenu[index].classList.add('active');

  })
}) 