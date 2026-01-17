// Active Link Highlighter on Scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar .nav-links a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                const target = document.querySelector('.navbar .nav-links a[href="#' + id + '"]');
                if (target) {
                    target.classList.add('active');
                }
            });
        }
    });
};

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
});
