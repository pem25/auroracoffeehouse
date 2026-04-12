document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            // Toggle the visibility class
            const isOpen = navList.classList.toggle('open');
            
            // Update the ARIA attribute for accessibility
            navToggle.setAttribute('aria-expanded', isOpen);
            
            // Optional: Change the icon between ☰ and ✕
            navToggle.textContent = isOpen ? '✕' : '☰';
        });

        // Close menu if clicking outside of it
        document.addEventListener('click', (event) => {
            const isClickInside = navToggle.contains(event.target) || navList.contains(event.target);
            
            if (!isClickInside && navList.classList.contains('open')) {
                navList.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.textContent = '☰';
            }
        });
    }
});
