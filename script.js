// Toggle Dark Mode
function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    const icon = document.getElementById("mode-icon");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
}

// Show/Hide Sections Based on Navbar Click
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block'; // Show the selected section
        } else {
            section.style.display = 'none'; // Hide other sections
        }
    });

    // Highlight active navbar link
    const navLinks = document.querySelectorAll('.nav-links li a');
    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove active class from all links
    });
    const activeLink = document.querySelector(`.nav-links li a[href="#${sectionId}"]`);
    activeLink.classList.add('active'); // Add active class to the clicked link
}

// Initial Setup: Hide all sections except the Hero
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById('hero').style.display = 'block'; // Show the hero section initially

    // Show the first section (About) when the page loads
    showSection('about');

    // Smooth scrolling and section visibility
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll to the section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            // Show and hide sections properly
            showSection(targetId);
        });
    });

    // Project Card Hover Functionality
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            const details = card.querySelector('.project-details');
            details.style.opacity = 1;
            details.style.height = 'auto'; // Show the details on hover
        });

        card.addEventListener('mouseout', function() {
            const details = card.querySelector('.project-details');
            details.style.opacity = 0;
            details.style.height = '0'; // Hide the details when mouse leaves
        });
    });

    // Dynamic Greeting based on Time of Day
    const greeting = document.getElementById('greeting');
    const hours = new Date().getHours();

    if (hours < 12) {
        greeting.textContent = "Good Morning!";
    } else if (hours < 18) {
        greeting.textContent = "Good Afternoon!";
    } else {
        greeting.textContent = "Good Evening!";
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const skillsContainer = document.querySelector('.skills-container');
    const skillsLoop = document.querySelector('.skills-loop');
    
    // Duplicate the skills loop for seamless scrolling effect
    const clonedSkillsLoop = skillsLoop.cloneNode(true);
    
    // Append the clone to the container
    skillsContainer.appendChild(clonedSkillsLoop);
  
    // Set up the animation duration to match the length of the loop
    const totalWidth = skillsLoop.scrollWidth;
    skillsLoop.style.animationDuration = `${totalWidth / 50}s`; // Adjust speed based on loop width
  });
  