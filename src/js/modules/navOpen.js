function navOpenclick() {
	const nav = document.querySelector('.mobile-nav')
	const menuIcon = document.querySelector('.nav-icon')
	const navlink = document.querySelector('.mobile-nav__list')

	navlink.onclick = function () {
		nav.classList.toggle('mobile-nav--open')
		menuIcon.classList.toggle('nav-icon--active')
	}
}

export default navOpenclick
