document.addEventListener('DOMContentLoaded', function() {
    // Typed.js for dynamic job titles
    const typedTextElement = document.getElementById('typed-text');
    const jobTitles = [
    'Project & Operations Manager',
    'District Operation Manager at NATGAS',
    'Infrastructure Management Expert',
    'Team Leadership Professional'
];

    new Typed(typedTextElement, {
        strings: jobTitles,
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        backDelay: 2000
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple form validation (client-side)
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const name = this.querySelector('input[type="text"]');
        const email = this.querySelector('input[type="email"]');
        const message = this.querySelector('textarea');

        if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
            alert('Please fill out all fields');
            return;
        }

        // In a real-world scenario, you'd send this to a backend
        alert('Message sent! I will get back to you soon.');
        this.reset();
    });
});
