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
		li.classList.add(`${section.getAttribute('id')}`);
		// Scroll to anchor ID using scrollTO event
		li.addEventListener('click', function(event) {
			event.preventDefault();
			const targetId = event.currentTarget.querySelector('a').getAttribute('href');
			let top = document.querySelector(targetId).offsetTop - 100;
			window.scrollTo({
				top: top,
				behavior: 'smooth'
			});
		});
	}
}

//funtionality to check active class
function activeChecker() {
	const sectionList = document.querySelectorAll('section');
	// console.log(sectionList);
	sectionList.forEach((section) => {
		//removing non active classes
		section.classList.remove('your-active-class');

		//getting distance from the top.
		let topDistance = Math.floor(section.getBoundingClientRect().top);
		// console.log(section.getBoundingClientRect());
		//checking if the section is in viewport
		if (topDistance < 150 && topDistance >= -150) {
			section.classList.add('your-active-class');
			li = document.querySelector(`.${section.getAttribute('id')}`);
			li.classList.add('menu__link__active');
		} else {
			section.classList.remove('your-active-class');
			li = document.querySelector(`.${section.getAttribute('id')}`);
			li.classList.remove('menu__link__active');
		}
	});
}
// functionality for making sections active when in viewport
window.addEventListener('scroll', () => {
	activeChecker();
});
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
initNav();
