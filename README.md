# Wolcrest Schools - School Website

A clean, responsive, and modern website for Wolcrest Schools with 5 main pages and a professional design.

## 📁 Project Structure

```
school-website/
├── index.html          # Home page
├── academics.html      # Academics page
├── admissions.html     # Admissions page
├── calendar.html       # Calendar & Events page
├── contact.html        # Contact Us page
├── styles.css          # Shared stylesheet
├── script.js           # Shared JavaScript
└── README.md           # This file
```

## 🖥️ Pages Included

### 1. **Home Page** (`index.html`)
- Welcoming hero section with call-to-action button
- "About Our School" section with mission and vision
- Why choose us highlights
- Recent news & updates (6 news items with dates)
- Statistics section showing key metrics
- Fully responsive navigation bar

### 2. **Academics** (`academics.html`)
- **Subjects Taught** - 6 main subject categories with course listings
- **Grading Scale** - Complete table with letter grades, percentages, and descriptions
- **Extracurricular Activities** - Sports, arts, academic clubs, and community service programs
- Benefits of extracurricular activities highlighted

### 3. **Admissions** (`admissions.html`)
- **Admission Requirements** - General and grade-level specific requirements
- **Tuition & Fees** - Detailed fee structure by grade level
- **Additional Charges** - Transportation, meals, sports, activities
- **Payment Plans** - Flexible payment options and scholarships
- **Application Form** - Downloadable PDF forms for admission
- Contact information for admissions inquiries

### 4. **Calendar & Events** (`calendar.html`)
- **Upcoming Events** - 12 events with dates and categories
- **Academic Calendar** - Complete 2026-2027 academic year timeline
- **School Holidays** - National and school-specific holidays
- **Event Categories** - Academic, sports, cultural, community, and enrichment events
- Event coordinator contact information

### 5. **Contact Us** (`contact.html`)
- **Contact Form** - Full functional form with validation
- **Contact Information** - Address, phone numbers, and email addresses
- **Department Contacts** - Extension numbers for different departments
- **Google Maps Embed** - Location map with directions
- **FAQ Section** - Answers to 6 common questions
- **Newsletter Signup** - Email subscription form

## 🎨 Design Features

### Color Scheme
- **Primary Color**: #2c3e50 (Dark Blue-Gray)
- **Secondary Color**: #3498db (Bright Blue)
- **Accent Color**: #e74c3c (Red)
- **Light Background**: #ecf0f1

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 480px
- Flexible grid layouts using CSS Grid and Flexbox
- Mobile menu toggle for navigation

### Interactive Elements
- Smooth scroll animations
- Hover effects on buttons and links
- Form validation with user feedback
- Active navigation link highlighting
- Card animations on scroll

## 🚀 Getting Started

1. **Extract the files** to your desired location
2. **Open `index.html`** in your web browser
3. **Navigate** through the website using the menu bar

### For Development:
- Modify `styles.css` for styling changes
- Edit individual HTML files for content updates
- Update `script.js` for interactive functionality

## 💻 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📋 Features

✅ Fully Responsive Design
✅ Modern & Clean Aesthetics
✅ Contact Form with Validation
✅ Embedded Google Maps
✅ Smooth Animations & Transitions
✅ Mobile Menu Toggle
✅ Professional Color Scheme
✅ Accessible Navigation
✅ Semantic HTML5
✅ Cross-browser Compatible

## 🛠️ Customization Guide

### Change School Name/Logo
Edit the header in all HTML files:
```html
<a href="index.html" class="logo">
  <span>🎓</span> Your School Name
</a>
```

### Update Colors
Edit the CSS variables in `styles.css`:
```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  /* ... other variables ... */
}
```

### Add/Edit Content
Simply open the respective HTML file and update the content sections. The styling will apply automatically.

### Connect Forms
To make the contact form functional:
1. Use a backend service like Formspree, EmailJS, or your own server
2. Update the form submission in `script.js`

### Replace Google Maps
In `contact.html`, update the iframe src with your school's location coordinates.

## 📱 Mobile Optimization

The website includes:
- Mobile-responsive navigation with hamburger menu
- Readable font sizes on small screens
- Touch-friendly button sizes
- Optimized images and content
- Fast loading times

## 📝 Content Sections

Each page includes:
- Sticky navigation header
- Hero section
- Main content with cards and tables
- Footer with links and contact info
- Form elements (where applicable)

## 🔐 Security Notes

- Forms are client-side only (for demonstration)
- For production, implement server-side validation
- Consider HTTPS for sensitive information
- Add CSRF protection for forms

## 📞 Support

For questions about the website structure or customization:
- Review the CSS and JavaScript comments
- Check the HTML semantic structure
- Test all pages on different screen sizes

## 📄 License

This website template is provided as-is for educational purposes.

---

**Created for:** Wolcrest Schools
**Date:** 2026
**Version:** 1.0

