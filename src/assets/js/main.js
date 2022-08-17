
// ========= Preloader
window.onload = function () {
  window.setTimeout(fadeout, 500);
}

function fadeout() {
  document.querySelector('.preloader').style.opacity = '0';
  document.querySelector('.preloader').style.display = 'none';
}

// ========= main-menu 3  activation
let menuToggle3 = document.querySelector('.menu-style-3 .menu-toggle');
menuToggle3.addEventListener('click', () => {
  menuToggle3.classList.toggle('active');
})

//======== tiny slider for header-5-active
tns({
  autoplay: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  gutter: 0,
  container: ".header-5-active",
  center: true,
  nav: true,
  controls: false,
  speed: 400,
  controlsText: [
      '<i class="lni lni-arrow-left-circle"></i>',
      '<i class="lni lni-arrow-right-circle"></i>',
  ],
  responsive: {
      0: {
          items: 1,
      },
  }
});

//====== counter up 
var cu = new counterUp({
  start: 0,
  duration: 2000,
  intvalues: true,
  interval: 100,
  append: " ",
});
cu.start();