# Modern Portfolio Website

A professional portfolio website for a fullstack web developer specializing in PHP, Laravel, and modern frontend technologies.

## Features

- **Custom Cursor**: Unique cursor experience with hover effects
- **Dark/Light Mode**: Toggle between dark and light themes with persistent preference
- **Responsive Design**: Fully responsive layout for all device sizes
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Elements**: Skill tabs, project filters, and smooth scrolling
- **Contact Form**: Ready-to-use contact form (requires backend implementation)

## Technologies Used

- HTML5
- CSS3 (Custom properties, Flexbox, Grid)
- JavaScript (ES6+)
- Font Awesome (for icons)
- Google Fonts

## Project Structure

```
modern-portfolio/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── profile.jpg (placeholder)
│   ├── about.jpg (placeholder)
│   └── project1-6.jpg (placeholders)
├── index.html
└── README.md
```

## Setup Instructions

1. Clone or download this repository
2. Replace placeholder images in the `images` folder with your own images
3. Edit the content in `index.html` to personalize your portfolio
4. Customize colors and styles in `css/style.css` if desired
5. Deploy to your preferred hosting service

## Customization

### Changing Colors

The color scheme can be easily modified by editing the CSS variables in the `:root` selector in `style.css`:

```css
:root {
    --primary-color: #4a63e7; /* Change this to your preferred primary color */
    --secondary-color: #6c757d;
    /* Other color variables */
}
```

### Adding Projects

To add a new project, copy and paste the project item structure in the HTML and update the content:

```html
<div class="project-item" data-category="your-category">
    <div class="project-img">
        <img src="images/your-project-image.jpg" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description goes here.</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
            <span>Technology 3</span>
        </div>
        <div class="project-links">
            <a href="#" target="_blank"><i class="fas fa-link"></i></a>
            <a href="#" target="_blank"><i class="fab fa-github"></i></a>
        </div>
    </div>
</div>
```

## Contact Form Implementation

The contact form is set up for frontend validation. To make it functional, you'll need to:

1. Create a backend endpoint to receive form data
2. Update the form submission code in `script.js` to send data to your endpoint
3. Implement email sending functionality on your server

## License

This project is available for personal and commercial use.

## Credits

- Font Awesome for icons
- Google Fonts for typography

---

Created by [Asaduzzaman] | [[GitHub](https://github.com/asaduzzamandotcom)] 