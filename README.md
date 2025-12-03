# Sophea - Front-End Developer Portfolio Website

A modern, responsive, and animated portfolio website built with clean HTML, CSS, and JavaScript. Perfect for showcasing your front-end development skills and projects.

## ✨ Features

- **Modern Design**: Minimalist and aesthetic with vibrant gradients
- **Fully Responsive**: Mobile-first approach, works on all devices
- **Smooth Animations**: AOS (Animate On Scroll) library for scroll reveal effects
- **Interactive Elements**: Hover effects, smooth transitions, and interactive components
- **Gen Z Aesthetic**: Bold typography, gradient colors, and modern UI/UX
- **Performance Optimized**: Clean code, lazy loading, and optimized assets
- **Accessibility**: Semantic HTML and keyboard navigation support

## 📋 Sections Included

1. **Hero Section**
   - Large name display
   - Subtitle and introduction
   - Call-to-action buttons
   - Abstract gradient shapes animation

2. **About Me**
   - Profile image placeholder
   - Friendly introduction text
   - Skills summary with highlights

3. **Technical Skills**
   - 8 skill cards with icons
   - HTML, CSS, JavaScript, React, Tailwind CSS, Git/GitHub, UI/UX Design, Web Animation
   - Hover animations and icon scaling

4. **Featured Projects**
   - 6 project cards with gradient placeholders
   - Project descriptions and tech stack tags
   - Interactive "View Demo" buttons
   - Smooth hover effects

5. **Experience & Learning**
   - Timeline-style layout
   - 4 experience entries (internships, bootcamp, learning journey)
   - Interactive timeline markers
   - Professional styling

6. **Contact Section**
   - Contact form with validation
   - Contact information cards
   - Social media icons (Facebook, GitHub, LinkedIn, Twitter)
   - Gradient background

7. **Navigation Bar**
   - Fixed navigation with smooth scrolling
   - Mobile hamburger menu
   - Active link highlighting
   - Glassmorphism effect

## 🎨 Design Features

### Colors & Gradients
- **Primary**: Purple to Deep Purple (#667eea → #764ba2)
- **Secondary**: Pink to Red (#f093fb → #f5576c)
- **Tertiary**: Cyan to Blue (#4facfe → #00f2fe)
- Additional vibrant gradients for projects and accents

### Typography
- **Headings**: Space Grotesk (bold, modern)
- **Body**: Inter (clean, readable)
- **Accent**: Poppins (friendly, expressive)

### Animations
- Fade-up animations on scroll
- Zoom-in effects for cards
- Smooth hover transitions
- Floating gradient shapes
- Heartbeat animation on footer
- Parallax scrolling effects

## 📦 Files Included

- **index.html** - Main HTML structure with semantic markup
- **styles.css** - Complete styling with CSS Grid/Flexbox, animations, and responsive design
- **script.js** - JavaScript for interactivity, form handling, and scroll effects

## 🚀 Getting Started

1. **Download/Clone the files** to your project folder
2. **Open `index.html`** in your web browser
3. **No build process needed** - it's ready to use!

### Optional: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## 🔧 Customization

### Update Your Information
Open `index.html` and replace:
- "Sophea" with your name
- Email address and phone number in contact section
- Social media links
- Project information and links
- Experience entries

### Customize Colors
In `styles.css`, update the CSS variables:
```css
:root {
    --accent-purple: #667eea;
    --accent-pink: #f5576c;
    --accent-blue: #4facfe;
    /* ... other colors ... */
}
```

### Add Your Projects
Duplicate the project card HTML in `index.html` and update:
- Project title and description
- Technology tags
- Demo link
- Choose a gradient class (gradient-1 through gradient-6)

### Change Profile Image
Replace the placeholder in the About section with your actual image:
```html
<img src="path-to-your-image.jpg" alt="Profile" class="profile-image">
```

## 📱 Responsive Design

- **Desktop** (1200px+): Full layout with 2-column grids
- **Tablet** (768px - 1199px): Adjusted spacing and single columns where needed
- **Mobile** (480px - 767px): Stacked layout with hamburger menu
- **Small Mobile** (< 480px): Compact spacing and full-width buttons

## 🔗 External Libraries Used

- **Font Awesome** (Icons) - Latest CDN link included
- **AOS** (Animate On Scroll) - Scroll reveal animations
- **Google Fonts** - Inter, Poppins, Space Grotesk

All libraries are loaded from CDN, so you need internet connection for icons and animations to work properly.

## ✅ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance Tips

1. Replace placeholder icons with optimized images
2. Lazy load project images using `data-src` attribute
3. Minify CSS and JavaScript for production
4. Use a CDN for external libraries
5. Optimize image sizes (compress images)

## 🎯 Deployment

### Deploy to GitHub Pages
1. Create a GitHub repository
2. Push your files to the `main` branch
3. Go to Settings → Pages
4. Select `main` branch as source
5. Your site will be live at `https://username.github.io/repository-name`

### Deploy to Other Platforms
- **Netlify**: Drag and drop files or connect GitHub repo
- **Vercel**: Similar to Netlify, excellent performance
- **Heroku**: Use with a simple web server
- **Traditional Hosting**: Upload files via FTP

## 🐛 Troubleshooting

**Icons not showing?**
- Check internet connection (Font Awesome loads from CDN)
- Verify Font Awesome CDN link in HTML

**Animations not working?**
- Ensure AOS library is loaded (check console for errors)
- Check that data-aos attributes are present in HTML

**Forms not submitting?**
- The form currently logs data to console and shows a success message
- To actually send emails, you'll need a backend service like Formspree, Netlify Forms, or your own server

**Hamburger menu not working?**
- Ensure JavaScript is enabled
- Check browser console for errors

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript Info](https://javascript.info/)
- [Web.dev](https://web.dev/)

## 📄 License

This portfolio template is free to use and modify for personal and commercial projects.

## 💡 Tips for Best Results

1. **Keep it Updated**: Regularly update your projects and experience
2. **Add Real Content**: Replace placeholder text with your actual information
3. **Use Real Images**: Add professional photos of your projects
4. **Optimize**: Compress images and minify code for better performance
5. **Test**: Test on multiple devices and browsers before deploying
6. **Analytics**: Add Google Analytics or similar to track visitors

## 🤝 Contributing

Feel free to fork, modify, and share this template with others!

## 📧 Need Help?

For questions or suggestions, feel free to reach out through the contact form on the website.

---

**Made with ❤️ for aspiring Front-End Developers**

Last Updated: December 2024
