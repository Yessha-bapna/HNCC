# HNCC MBA Website - Quick Setup Guide

## ✅ What's Been Created

Your HNCC MBA website homepage is now ready with:

### Files Created:
1. **index.html** - Complete homepage with all sections
2. **css/style.css** - Modern, responsive styling with premium design
3. **js/script.js** - Interactive features and animations
4. **README.md** - Complete documentation
5. **images/** - Folder for image assets

### Features Implemented:
✅ Responsive header with top bar (contact info & social links)
✅ Sticky navigation with dropdown menus
✅ Auto-playing hero slider with 3 slides
✅ Animated statistics counter
✅ About section with features
✅ Programs showcase (MBA, Executive MBA, Specializations)
✅ Why Choose Us section with 6 features
✅ Testimonials section
✅ Latest News & Events section
✅ Comprehensive footer with links and contact info
✅ Scroll-to-top button
✅ Mobile-responsive design
✅ Smooth animations and transitions

## 🎯 Next Steps

### 1. Add Images (IMPORTANT)
The website needs images to look complete. Add these images to the `images/` folder:

**Hero Slider (1920x800px):**
- hero-1.jpg
- hero-2.jpg
- hero-3.jpg

**About Section (800x600px):**
- about-campus.jpg

**News Section (600x400px):**
- news-1.jpg
- news-2.jpg
- news-3.jpg

**Testimonials (300x300px):**
- student-1.jpg
- student-2.jpg
- student-3.jpg

**Where to get images:**
- Unsplash: https://unsplash.com/ (search: "campus", "MBA students", "graduation")
- Pexels: https://pexels.com/ (search: "university", "business education")
- Pixabay: https://pixabay.com/ (search: "college", "students")

### 2. Customize Content
Edit `index.html` to update:
- Contact information (email, phone)
- Social media links
- Program details
- Statistics numbers
- News articles
- Testimonials

### 3. Create Additional Pages
Based on the navigation menu, create these pages:

**About:**
- about.html
- vision-mission.html
- director-message.html
- governance.html

**Programs:**
- mba-program.html
- executive-mba.html
- specializations.html
- curriculum.html

**Admissions:**
- admission-process.html
- eligibility.html
- fees.html
- scholarships.html

**Academics:**
- faculty.html
- research.html
- centers.html
- library.html

**Other:**
- placements.html
- campus-life.html
- contact.html
- apply.html

### 4. Test the Website
1. Open `index.html` in different browsers
2. Test on mobile devices
3. Check all interactive features:
   - Hero slider auto-play
   - Navigation dropdowns
   - Mobile menu
   - Scroll animations
   - Scroll-to-top button

## 🎨 Design Reference

The website is inspired by the RVCE website (https://rvce.edu.in/) with:
- Professional header with contact bar
- Sticky navigation with dropdowns
- Hero slider with call-to-action buttons
- Statistics section with animated counters
- Multi-column footer with links

## 🔧 Customization

### Change Colors:
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #10b981;
}
```

### Change Fonts:
Update Google Fonts link in `index.html` and CSS variables.

### Modify Slider Speed:
In `js/script.js`, find:
```javascript
slideInterval = setInterval(nextSlide, 5000); // 5000ms = 5 seconds
```

## 📱 Mobile Responsiveness

The website automatically adapts to:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (below 768px)

Mobile features:
- Hamburger menu
- Touch-friendly dropdowns
- Optimized layouts
- Readable text sizes

## 🚀 Going Live

When ready to publish:
1. Optimize all images (compress with TinyPNG)
2. Test on multiple devices
3. Add favicon
4. Set up hosting (GitHub Pages, Netlify, etc.)
5. Configure domain name

## 📞 Support

For questions or modifications:
- Review the README.md for detailed documentation
- Check the code comments for guidance
- Test changes in a browser before deploying

---

**Website Status: ✅ Homepage Complete & Ready**

The header, navbar, and footer are consistent and can be reused across all pages!
