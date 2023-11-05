function mobileNav() {
  // Mobile nav button
  const navBtn = document.querySelector('.mobile-nav-btn');
  const nav = document.querySelector('.mobile-nav');
  const menuIcon = document.querySelector('.nav-icon');
  const navOpen = document.querySelector('.mobile-nav--open');

  navBtn.onclick = function () {
    nav.classList.toggle('mobile-nav--open');
    menuIcon.classList.toggle('nav-icon--active');
    // document.body.classList.toggle('no-scroll')
  };

  nav.onclick = function () {
    navOpen.classList.toggle('mobile-nav');
  };
}

export default mobileNav;
