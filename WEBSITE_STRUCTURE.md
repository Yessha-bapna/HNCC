# HNCC MBA Website Structure

## Three Constant Components Across All Pages

Your HNCC MBA website has been structured with **THREE main constant components** that appear on every page:

---

### 1. HEADER SECTION (Top Contact Bar)
**Location:** Very top of the page  
**Purpose:** Contact information and social media links  
**Class:** `.site-header` or `.top-header`

**Contains:**
- Email: info@hnccmba.edu.in
- Phone: +91 123 456 7890  
- Social Media Icons (Facebook, Twitter, LinkedIn, Instagram, YouTube)

**Visual:** Dark background bar at the very top

---

### 2. NAVBAR SECTION (Navigation Menu)
**Location:** Below the header  
**Purpose:** Logo and main navigation menu  
**Class:** `.site-navbar` or `.main-header`

**Contains:**
- **Logo:** HNCC MBA with tagline
- **Navigation Menu:**
  - Home
  - About (dropdown: About HNCC, Vision & Mission, Director's Message, Governance)
  - Programs (dropdown: MBA Program, Executive MBA, Specializations, Curriculum)
  - Admissions (dropdown: Admission Process, Eligibility, Fee Structure, Scholarships)
  - Academics (dropdown: Faculty, Research, Centers of Excellence, Library)
  - Placements
  - Campus Life
  - Contact
- **Apply Now Button:** Call-to-action button
- **Mobile Menu Toggle:** Hamburger menu for mobile devices

**Visual:** White background with sticky behavior (stays at top when scrolling)

---

### 3. FOOTER SECTION (Bottom Information)
**Location:** Bottom of every page  
**Purpose:** Links, resources, and contact information  
**Class:** `.main-footer`

**Contains:**
- **Column 1:** About HNCC MBA + Social Media Links
- **Column 2:** Quick Links (About, Programs, Admissions, Faculty, Placements, Alumni)
- **Column 3:** Resources (Library, Research, Events, News, Careers, Contact)
- **Column 4:** Contact Info (Address, Phone, Email)
- **Bottom Bar:** Copyright © 2024 + Privacy Policy, Terms & Conditions, Sitemap

**Visual:** Dark background with white text

---

## Page Structure Template

```
┌─────────────────────────────────────┐
│  HEADER (Contact Bar & Social)      │ ← Constant
├─────────────────────────────────────┤
│  NAVBAR (Logo & Navigation Menu)    │ ← Constant
├─────────────────────────────────────┤
│                                     │
│  PAGE CONTENT                       │ ← Changes per page
│  (Hero, Sections, etc.)             │
│                                     │
├─────────────────────────────────────┤
│  FOOTER (Links & Contact Info)      │ ← Constant
└─────────────────────────────────────┘
```

---

## How to Use for New Pages

When creating a new page:

1. **Copy** the HEADER section from `index.html` (lines 15-38)
2. **Copy** the NAVBAR section from `index.html` (lines 40-127)
3. **Add** your unique page content in the middle
4. **Copy** the FOOTER section from `index.html` (lines 510-593)
5. **Add** the scroll-to-top button and scripts at the end

---

## Current Files

- **index.html** - Homepage with all sections
- **page-template.html** - Template for creating new pages
- **css/style.css** - All styling
- **js/script.js** - All interactive features

---

## CSS Classes Reference

### Header Classes
- `.site-header` or `.top-header` - Main header container
- `.header-content` or `.top-header-content` - Content wrapper
- `.contact-info` - Email and phone links
- `.social-links` - Social media icons

### Navbar Classes
- `.site-navbar` or `.main-header` - Main navbar container
- `.navbar-content` or `.header-content` - Content wrapper
- `.logo` - Logo area
- `.nav-menu` - Navigation list
- `.dropdown` - Dropdown menu item
- `.dropdown-menu` - Dropdown submenu
- `.btn-apply` - Apply Now button
- `.mobile-menu-toggle` - Mobile menu button

### Footer Classes
- `.main-footer` - Footer container
- `.footer-top` - Top section with columns
- `.footer-grid` - Grid layout for columns
- `.footer-col` - Individual column
- `.footer-social` - Social media links
- `.footer-links` - Link lists
- `.footer-contact` - Contact information
- `.footer-bottom` - Bottom copyright bar

---

## Important Notes

1. **Consistency:** These three sections (HEADER, NAVBAR, FOOTER) must be identical across all pages
2. **Sticky Navbar:** The navbar sticks to the top when scrolling
3. **Mobile Responsive:** All three sections adapt to mobile screens
4. **Active States:** Update the `.active` class on nav items based on current page
5. **JavaScript:** The `script.js` file handles mobile menu, dropdowns, and scroll behavior

---

**Status:** ✅ Structure is ready and working
**Next Step:** Add images and create additional pages using the template
