# HNCC MBA Website

A modern, professional website for HNCC MBA built with pure HTML, CSS, and JavaScript.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX** - Premium design with gradients, glassmorphism, and smooth animations
- **Interactive Elements** - Hero slider, animated counters, smooth scrolling
- **SEO Optimized** - Proper meta tags, semantic HTML, and heading structure
- **Fast Performance** - Optimized code, lazy loading images
- **Accessible** - ARIA labels and keyboard navigation support

## 📁 Project Structure

```
Hncc Mba/
├── index.html          # Homepage
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # Main JavaScript file
├── images/             # Image assets folder
│   ├── hero-1.jpg      # Hero slider image 1
│   ├── hero-2.jpg      # Hero slider image 2
│   ├── hero-3.jpg      # Hero slider image 3
│   ├── about-campus.jpg # About section image
│   ├── news-1.jpg      # News article image 1
│   ├── news-2.jpg      # News article image 2
│   ├── news-3.jpg      # News article image 3
│   ├── student-1.jpg   # Testimonial student 1
│   ├── student-2.jpg   # Testimonial student 2
│   └── student-3.jpg   # Testimonial student 3
└── README.md           # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: #6366f1 (Indigo)
- **Secondary**: #8b5cf6 (Purple)
- **Accent**: #10b981 (Green)
- **Dark**: #0f172a
- **Light**: #ffffff

### Typography
- **Primary Font**: Inter
- **Heading Font**: Outfit

### Key Features
- Glassmorphism effects
- Smooth gradient backgrounds
- Micro-animations on hover
- Modern card designs
- Responsive grid layouts

## 🖼️ Adding Images

To complete the website, add the following images to the `images/` folder:

### Hero Section (1920x800px recommended)
1. **hero-1.jpg** - Campus building or students
2. **hero-2.jpg** - Faculty or classroom
3. **hero-3.jpg** - Graduation or achievement

### About Section (800x600px recommended)
4. **about-campus.jpg** - Campus overview or facilities

### News Section (600x400px recommended)
5. **news-1.jpg** - Related to admissions
6. **news-2.jpg** - Related to events
7. **news-3.jpg** - Related to placements

### Testimonials (300x300px recommended)
8. **student-1.jpg** - Student headshot
9. **student-2.jpg** - Student headshot
10. **student-3.jpg** - Student headshot

### Image Sources
You can get free professional images from:
- [Unsplash](https://unsplash.com/) - Search for "campus", "students", "business education"
- [Pexels](https://pexels.com/) - Search for "university", "MBA", "graduation"
- [Pixabay](https://pixabay.com/) - Search for "education", "college"

## 🚀 Getting Started

1. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance

2. **Using Live Server (Recommended)**
   ```bash
   # If you have Python installed
   python -m http.server 8000
   
   # Then open http://localhost:8000 in your browser
   ```

3. **Using VS Code Live Server**
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## ✨ Interactive Features

### Hero Slider
- Auto-plays every 5 seconds
- Manual navigation with prev/next buttons
- Dot indicators for quick navigation
- Pauses on hover

### Animated Counters
- Stats animate when scrolled into view
- Smooth counting animation
- Only animates once per page load

### Smooth Scrolling
- All anchor links scroll smoothly
- Scroll-to-top button appears after scrolling 300px

### Mobile Menu
- Hamburger menu for mobile devices
- Smooth slide-in animation
- Touch-friendly dropdowns

## 🎯 Pages to Create

Based on the navigation, you'll need to create these additional pages:

### About Section
- about.html
- vision-mission.html
- director-message.html
- governance.html

### Programs
- mba-program.html
- executive-mba.html
- specializations.html
- curriculum.html

### Admissions
- admission-process.html
- eligibility.html
- fees.html
- scholarships.html

### Academics
- faculty.html
- research.html
- centers.html
- library.html

### Other Pages
- placements.html
- campus-life.html
- contact.html
- apply.html

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #10b981;
    /* ... */
}
```

### Changing Fonts
Update the Google Fonts link in `index.html` and the CSS variables:
```css
:root {
    --font-primary: 'Inter', sans-serif;
    --font-heading: 'Outfit', sans-serif;
}
```

### Modifying Content
- Edit `index.html` to change text, links, and structure
- Update stats numbers in the data-target attributes
- Modify slider timing in `js/script.js` (line with `setInterval(nextSlide, 5000)`)

## 📊 Performance Tips

1. **Optimize Images**
   - Compress images before uploading
   - Use WebP format for better compression
   - Recommended tool: [TinyPNG](https://tinypng.com/)

2. **Lazy Loading**
   - Images are lazy-loaded by default
   - Add `data-src` attribute for lazy loading

3. **Minify CSS/JS**
   - Use minification tools for production
   - Recommended: [CSS Minifier](https://cssminifier.com/)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is created for HNCC MBA. All rights reserved.

## 🤝 Support

For any questions or issues, please contact:
- Email: info@hnccmba.edu.in
- Phone: +91 123 456 7890

---

**Built with ❤️ for HNCC MBA**
