// Inspired by Apple's design philosophy of subtle, purposeful motion - abhirama

class LinkUnderlineEffect {
  constructor(elements) {
    this.elements = document.querySelectorAll(elements);
    this.init();
  }

  init() {
    this.elements.forEach(element => {
      const underline = document.createElement('span');
      underline.classList.add('link-underline');
      element.appendChild(underline);

      element.addEventListener('mouseenter', () => this.handleMouseEnter(element, underline));
      element.addEventListener('mouseleave', () => this.handleMouseLeave(element, underline));
    });
    this.addCSS();
  }

  handleMouseEnter(element, underline) {
    underline.style.transform = 'scaleX(1)';
    underline.style.transformOrigin = 'left';
  }

  handleMouseLeave(element, underline) {
    underline.style.transform = 'scaleX(0)';
    underline.style.transformOrigin = 'right';
  }

  addCSS() {
    const style = document.createElement('style');
    style.textContent = `
      .link-underline {
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: currentColor;
        transform: scaleX(0);
        transition: transform 0.3s cubic-bezier(0.33, 1, 0.68, 1);
      }
    `;
    document.head.appendChild(style);
  }
}

class SmoothParallax {
  constructor(elements, factor = 0.05) {
    this.elements = document.querySelectorAll(elements);
    this.factor = factor;
    this.init();
  }

  init() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.handleScroll();
  }

  handleScroll() {
    const scrollY = window.scrollY;

    this.elements.forEach(element => {
      const speed = element.dataset.speed || this.factor;
      const yPos = scrollY * speed;
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    });
  }
}

class CursorSpotlight {
  constructor() {
    this.init();
  }

  init() {
    this.spotlight = document.createElement('div');
    this.spotlight.classList.add('cursor-spotlight');
    document.body.appendChild(this.spotlight);

    this.addCSS();

    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    document.addEventListener('scroll', this.handleMouseMove.bind(this));
  }

  handleMouseMove(e) {
    const x = e.clientX;
    const y = e.clientY;

    this.spotlight.style.background = `radial-gradient(
      circle at ${x}px ${y}px,
      rgba(255, 255, 255, 0.02) 0%,
      rgba(255, 255, 255, 0) 15%
    )`;
  }

  addCSS() {
    const style = document.createElement('style');
    style.textContent = `
      .cursor-spotlight {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 99999;
      }

      [data-theme="light"] .cursor-spotlight {
        background: radial-gradient(
          circle at center,
          rgba(0, 0, 0, 0.005) 0%,
          rgba(0, 0, 0, 0) 15%
        );
      }
    `;
    document.head.appendChild(style);
  }
}

class HorizontalImageScroll {
  constructor(containerSelector) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) return;

    this.images = this.container.querySelectorAll('img');
    if (this.images.length < 2) return;

    this.init();
  }

  init() {
    this.minOffset = 0;
    this.maxOffset = -((this.images.length - 1) * this.images[0].offsetWidth);
    this.container.addEventListener('mousemove', this.handleMouseMove.bind(this));

    this.addCSS();
  }

  handleMouseMove(e) {
    const rect = this.container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    const position = mouseX / rect.width;
    const offset = this.maxOffset * position * 0.2;

    this.images.forEach((img, index) => {
      img.style.transform = `translateX(${offset * (index / (this.images.length - 1))}px)`;
    });
  }

  addCSS() {
    const style = document.createElement('style');
    style.textContent = `
      ${this.container.className} {
        position: relative;
        overflow: hidden;
      }

      ${this.container.className} img {
        transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
      }
    `;
    document.head.appendChild(style);
  }
}

class SmoothScrollLinks {
  constructor(linkSelector = 'a[href^="#"]') {
    this.links = document.querySelectorAll(linkSelector);
    this.init();
  }

  init() {
    this.links.forEach(link => {
      link.addEventListener('click', this.handleClick.bind(this));
    });
  }

  handleClick(e) {
    const link = e.currentTarget;
    const targetId = link.getAttribute('href');

    if (targetId === '#') return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    e.preventDefault();

    const navbar = document.querySelector('#navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - navbarHeight - 20,
      behavior: 'smooth'
    });
  }
}

class ButtonInteraction {
  constructor(buttonSelector) {
    this.buttons = document.querySelectorAll(buttonSelector);
    this.init();
  }

  init() {
    this.buttons.forEach(button => {
      button.style.transition = 'all 0.2s cubic-bezier(0.22, 1, 0.36, 1)';

      button.addEventListener('mousedown', this.handleMouseDown.bind(this));
      button.addEventListener('mouseup', this.handleMouseUp.bind(this));
      button.addEventListener('mouseleave', this.handleMouseUp.bind(this));
    });
  }

  handleMouseDown(e) {
    const button = e.currentTarget;
    button.style.transform = 'scale(0.98)';
    button.style.opacity = '0.95';
  }

  handleMouseUp(e) {
    const button = e.currentTarget;
    button.style.transform = 'scale(1)';
    button.style.opacity = '1';
  }
}

class ImageLoadingEffect {
  constructor() {
    this.init();
  }

  init() {
    const images = document.querySelectorAll('img');

    images.forEach(img => {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', () => {
          img.classList.add('loaded');
        });
      }
    });

    setTimeout(() => {
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.classList.add('loaded');
      }
    }, 300);
  }
}

class SectionReveal {
  constructor() {
    this.sections = document.querySelectorAll('section:not(.hero)');
    this.init();
  }

  init() {
    const options = {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    this.sections.forEach(section => {
      section.classList.add('section-hidden');
      observer.observe(section);
    });

    this.addCSS();
  }

  addCSS() {
    const style = document.createElement('style');
    style.textContent = `
      .section-hidden {
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
      }

      .section-visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new LinkUnderlineEffect('#navbar ul li a, .footer-nav a');
  new SmoothParallax('[data-parallax]');

  new CursorSpotlight();

  new SmoothScrollLinks();

  new ButtonInteraction('.btn');

  new HorizontalImageScroll('.featured-img');

  new ImageLoadingEffect();

  new SectionReveal();
});

export {
  LinkUnderlineEffect,
  SmoothParallax,
  CursorSpotlight,
  HorizontalImageScroll,
  SmoothScrollLinks,
  ButtonInteraction,
  ImageLoadingEffect,
  SectionReveal
};
