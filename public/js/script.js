document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    let lastScrollTop = 0;
    
    document.getElementById('year').innerText = new Date().getFullYear();

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.classList.add('hidden');
        } else if (scrollTop === 0) {
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });

    document.querySelectorAll('.project-preview').forEach(preview => {
        let overlay = preview.querySelector('.overlay');
        let projectPageLink = "#"; // Replace with the actual link to the project page

        preview.addEventListener('mouseenter', () => {
            overlay.style.opacity = '1';
        });
        
        preview.addEventListener('mouseleave', () => {
            overlay.style.opacity = '0';
        });

        preview.addEventListener('click', () => {
            window.location.href = projectPageLink;
        });
    });
});