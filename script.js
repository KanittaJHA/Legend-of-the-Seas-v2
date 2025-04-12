document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

    // Menu Show
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
    }

    // // Menu Hidden
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }

    // Remove Menu Mobile
    const navLink = document.querySelectorAll('.nav__link');

    const linkAction = () => {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu')
    }

    navLink.forEach(n => n.addEventListener('click', linkAction));

    const shadowHeader = () => {
        const header = document.getElementById('header');

        if (window.scrollY >= 50) {
            header.classList.add('shadow-header');
        } else {
            header.classList.remove('shadow-header');
        }
    }

    window.addEventListener('scroll', shadowHeader);
});