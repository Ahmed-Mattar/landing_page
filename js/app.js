/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// get all the sections
let sections = document.querySelectorAll('section');
// get the total number of sections
let sections_num = sections.length;
// get the ul that will contain the navbar
let menu = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function initNav() {
	for (section of sections) {
		// create a listitem to be put in the ul
		li = document.createElement('li');
		// add the link and the content the the li
		li.innerHTML = `<a class='menu__link' href=#${section.getAttribute('id')}>${section.getAttribute(
			'data-nav'
		)}</a>`;
		// add the listitem to the menu
		menu.appendChild(li);
	}
}

// adding a click event listenr to all links inside the navbar
function smoothScrolling() {
	const links = document.querySelectorAll('.navbar__menu ul a');

	for (const link of links) {
		link.addEventListener('click', clickHandler);
	}
}

// handling the click event by adding a smooth behavior to the scroll
function clickHandler(e) {
	e.preventDefault();
	const href = this.getAttribute('href');
	const offsetTop = document.querySelector(href).offsetTop;

	scroll({
		top: offsetTop,
		behavior: 'smooth'
	});
}

// check if element in viewport
// function elInViewPort(el) {
// 	let elPosition = el.getBoundingClientRect();
// 	return elPosition.top >= 0;
// }

function isElementVisible(el) {
	var rect = el.getBoundingClientRect(),
		vWidth = window.innerWidth || document.documentElement.clientWidth,
		vHeight = window.innerHeight || document.documentElement.clientHeight,
		efp = function(x, y) {
			return document.elementFromPoint(x, y);
		};

	// Return false if it's not in the viewport
	if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight) return false;

	// Return true if any of its four corners are visible
	return (
		el.contains(efp(rect.left, rect.top)) ||
		el.contains(efp(rect.right, rect.top)) ||
		el.contains(efp(rect.right, rect.bottom)) ||
		el.contains(efp(rect.left, rect.bottom))
	);
}
// make the element in viewport an active class
function toggleActive() {
	for (section of sections) {
		if (isElementVisible(section)) {
			if (section.classList.contains('your-active-class')) continue;
			else section.classList.add('your-active-class');
		} else {
			section.classList.remove('your-active-class');
		}
	}
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
initNav();
// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', toggleActive);
// Scroll to anchor ID using scrollTO event
smoothScrolling();
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu

// Scroll to section on link click

// Set sections as active
