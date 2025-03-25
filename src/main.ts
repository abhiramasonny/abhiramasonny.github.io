function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  const currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (themeToggle) {
    const toggleIcon = themeToggle.querySelector('i');
    if (toggleIcon) {
      toggleIcon.className = currentTheme === 'dark'
        ? 'fa-solid fa-sun'
        : 'fa-solid fa-moon';
    }
  }

  themeToggle?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    const toggleIcon = themeToggle.querySelector('i');
    if (toggleIcon) {
      toggleIcon.className = newTheme === 'dark'
        ? 'fa-solid fa-sun'
        : 'fa-solid fa-moon';
    }
  });
}

function setupMobileMenu() {
  const navbarUl = document.querySelector('#navbar ul');
  const menuToggle = document.createElement('button');
  menuToggle.id = 'menu-toggle';
  menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  menuToggle.setAttribute('aria-label', 'Toggle navigation menu');

  const checkScreenSize = () => {
    if (window.innerWidth <= 768) {
      if (!document.getElementById('menu-toggle')) {
        document.getElementById('navbar')?.insertBefore(menuToggle, document.getElementById('theme-toggle'));
      }
    } else {
      const existingToggle = document.getElementById('menu-toggle');
      if (existingToggle) {
        existingToggle.remove();
      }
      navbarUl?.classList.remove('active');
    }
  };

  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);

  menuToggle.addEventListener('click', () => {
    navbarUl?.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    if (icon) {
      if (navbarUl?.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    }
  });

  const navLinks = document.querySelectorAll('#navbar ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navbarUl?.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.className = 'fa-solid fa-bars';
        }
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupThemeToggle();
  setupMobileMenu();
});
