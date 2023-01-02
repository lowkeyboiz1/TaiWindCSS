const topMenu = document.querySelector('#ct-top-menu');
const topMenuIcon = document.querySelector('#ct-toggle-top-menu-icon');


const toggleMenu = (e) => {
    if (topMenuIcon.contains(e.target)) {
        // Click to toggle menu icon

        topMenu.classList.toggle('hidden');
        topMenu.classList.toggle('ct-menu-expanded');
    }
    else {
        // click outside toggle menu icon
        topMenu.classList.add('hidden');
        topMenu.classList.remove('ct-menu-expanded');
    }
};
//toggle menu
document.addEventListener('click', toggleMenu);


// onChange size window
window.addEventListener('resize', ()=> {
    if (window.innerWidth >= 768) {
        topMenu.classList.remove('ct-menu-expanded');
    }
    else {
        topMenu.classList.add('ct-menu-expanded');
    }
});
