function handleReveal() {
    console.log('Scrolling detected!'); // Check if function runs
    const reveals = document.querySelectorAll('.reveal'); // Ensure it selects all reveal elements
    const windowheight = window.innerHeight;
    const revealpoint = 150;

    reveals.forEach(reveal => {
        const revealtop = reveal.getBoundingClientRect().top;
        if (revealtop < windowheight - revealpoint) {
            reveal.classList.add('active'); // Add active class
            console.log('Element revealed!', reveal); // Debugging message
        } else {
            reveal.classList.remove('active'); // Remove active class
        }
    });
}

window.addEventListener('scroll', handleReveal);

