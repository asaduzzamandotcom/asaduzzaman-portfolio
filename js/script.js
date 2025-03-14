// DOM Elements
const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const skillCategories = document.querySelectorAll('.category');
const skillGroups = document.querySelectorAll('.skill-group');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');
const backToTop = document.querySelector('.back-to-top');
const contactForm = document.getElementById('contactForm');

// Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        updateThemeIcon();
    }

    // Initialize skill progress bars animation
    animateSkillBars();

    // Add sun icon to theme toggle
    themeToggle.innerHTML += '<i class="fas fa-sun"></i>';
    updateThemeIcon();
});

// Custom Cursor
document.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Cursor dot follows cursor exactly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Cursor outline follows with slight delay for smooth effect
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
});

// Add hover effect to cursor when hovering over links and buttons
document.addEventListener('mouseover', (e) => {
    if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.classList.contains('category') ||
        e.target.classList.contains('filter-btn') ||
        e.target.classList.contains('hamburger') ||
        e.target.classList.contains('theme-toggle') ||
        e.target.parentElement.classList.contains('theme-toggle')
    ) {
        body.classList.add('cursor-hover');
    }
});

document.addEventListener('mouseout', (e) => {
    if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.classList.contains('category') ||
        e.target.classList.contains('filter-btn') ||
        e.target.classList.contains('hamburger') ||
        e.target.classList.contains('theme-toggle') ||
        e.target.parentElement.classList.contains('theme-toggle')
    ) {
        body.classList.remove('cursor-hover');
    }
});

// Hide cursor when inactive
let cursorTimeout;
document.addEventListener('mousemove', () => {
    // Show cursor
    body.classList.remove('cursor-hidden');
    
    // Clear existing timeout
    clearTimeout(cursorTimeout);
    
    // Set new timeout
    cursorTimeout = setTimeout(() => {
        body.classList.add('cursor-hidden');
    }, 5000); // Hide after 5 seconds of inactivity
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    }
    updateThemeIcon();
});

// Update theme icon based on current theme
function updateThemeIcon() {
    const moonIcon = themeToggle.querySelector('.fa-moon');
    const sunIcon = themeToggle.querySelector('.fa-sun');
    
    if (body.classList.contains('dark-mode')) {
        if (moonIcon) moonIcon.style.display = 'none';
        if (sunIcon) sunIcon.style.display = 'block';
    } else {
        if (moonIcon) moonIcon.style.display = 'block';
        if (sunIcon) sunIcon.style.display = 'none';
    }
}

// Mobile Navigation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Skills Tab
skillCategories.forEach(category => {
    category.addEventListener('click', () => {
        // Remove active class from all categories
        skillCategories.forEach(cat => cat.classList.remove('active'));
        
        // Add active class to clicked category
        category.classList.add('active');
        
        // Get category data
        const categoryData = category.getAttribute('data-category');
        
        // Hide all skill groups
        skillGroups.forEach(group => group.classList.remove('active'));
        
        // Show selected skill group
        document.getElementById(categoryData).classList.add('active');
        
        // Animate skill bars
        animateSkillBars();
    });
});

// Animate skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
}

// Project Filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Get filter value
        const filterValue = btn.getAttribute('data-filter');
        
        // Filter projects
        projectItems.forEach(item => {
            const categories = item.getAttribute('data-category').split(' ');
            
            if (filterValue === 'all' || categories.includes(filterValue)) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Back to Top Button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const headerHeight = document.querySelector('header').offsetHeight;
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form submission
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formValues = Object.fromEntries(formData.entries());
        
        // Simple validation
        let isValid = true;
        for (const key in formValues) {
            if (!formValues[key].trim()) {
                isValid = false;
                break;
            }
        }
        
        if (isValid) {
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// Typing effect for hero section
const typingElement = document.querySelector('.hero-text h2');
if (typingElement) {
    const text = typingElement.textContent;
    typingElement.textContent = '';
    
    let i = 0;
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
        }
    }, 100);
}

// Reveal animations on scroll
const revealElements = document.querySelectorAll('.section-header, .about-content, .skill-categories, .projects-container, .contact-content');

function revealOnScroll() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('revealed');
        }
    });
}

// Add CSS for reveal animations
const style = document.createElement('style');
style.textContent = `
    .section-header, .about-content, .skill-categories, .projects-container, .contact-content {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Initial check and add scroll event listener
revealOnScroll();
window.addEventListener('scroll', revealOnScroll); 