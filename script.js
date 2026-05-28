// ==================== PAGE TRANSITION ANIMATION ==================== 
document.addEventListener('DOMContentLoaded', () => {
  // Add fade-in animation to page on load
  document.body.style.animation = 'pageLoad 0.8s ease forwards';

  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav ul');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      if (nav.classList.contains('active')) {
        nav.style.animation = 'menuSlideDown 0.3s ease';
      }
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  }

  // ==================== FORM HANDLING ==================== 
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;

      // Simple validation
      if (!name || !email || !subject || !message) {
        alert('Please fill in all fields.');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Show success message
      alert(`Thank you, ${name}! Your message has been received. We will contact you soon.`);

      // Reset form
      contactForm.reset();
    });
  }

  // ==================== SMOOTH SCROLLING ==================== 
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ==================== ACTIVE LINK HIGHLIGHT ==================== 
  const currentLocation = location.pathname;
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentLocation.includes(href) || (currentLocation === '/' && href === 'index.html')) {
      link.style.color = '#00d4ff';
      link.style.fontWeight = 'bold';
      link.style.textShadow = '0 0 15px rgba(0, 212, 255, 0.7)';
    }
  });

  // ==================== SCROLL ANIMATIONS ==================== 
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.card, .info-box, table').forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
  });

  // ==================== BUTTON HOVER GLOW EFFECT ==================== 
  const buttons = document.querySelectorAll('button, .cta-button, input[type="button"], input[type="submit"]');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-5px) scale(1.05)';
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0) scale(1)';
    });
  });

  // ==================== ICON ANIMATION ==================== 
  const logoSpan = document.querySelector('.logo span');
  if (logoSpan) {
    logoSpan.style.animation = 'logoPulse 2s ease-in-out infinite';
  }

  // ==================== SMOOTH PAGE NAVIGATION ==================== 
  document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', function (e) {
      // Allow default navigation but add fade effect
      const href = this.getAttribute('href');
      if (href && !href.startsWith('#')) {
        e.preventDefault();
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      }
    });
  });

  // ==================== SCROLL PROGRESS INDICATOR ==================== 
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = scrollTop / docHeight;

    // Add subtle parallax to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.backgroundPosition = `0px ${scrollTop * 0.5}px`;
    }
  });

  // ==================== ADD ANIMATION TO INPUTS ON FOCUS ==================== 
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('focus', function () {
      this.style.animation = 'scaleIn 0.3s ease';
    });
  });
});
