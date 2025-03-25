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

document.querySelector<HTMLDivElement>('#root')!.innerHTML = `
  <nav id="navbar">
    <ul>
      <li><a href="#hero">Home</a></li>
      <li><a href="#about-me">About</a></li>
      <li><a href="#activities">Activities</a></li>
      <li><a href="#honors">Honors</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button id="theme-toggle" aria-label="Toggle dark/light theme">
      <i class="fa-solid fa-moon"></i>
    </button>
  </nav>

  <section id="hero" class="hero section">
    <div class="hero-bg"></div>
    <div class="hero-container">
      <img src="/images/me.png" alt="Abhirama Sonny" class="profile-image" data-parallax data-speed="-0.05" />
      <h1 class="hero-title">Abhirama Sonny</h1>
      <p class="hero-subtitle">Student · Developer · Researcher</p>
      <p class="hero-text">
        Focused on Computer Science and Molecular Biology, leveraging technology
        to solve complex problems and create innovative solutions.
      </p>
      <div class="hero-actions">
        <a href="https://docs.google.com/document/d/18XYdDKNV10nyZLEdO2pYDnkGcUBozix0bFGVojpsxJU/edit?usp=sharing" class="btn">View Resume</a>
        <a href="#contact" class="btn secondary">Contact Me</a>
      </div>
      <div class="social-links">
        <a href="https://github.com/abhiramasonny" target="_blank" aria-label="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/abhiramasonny/" target="_blank" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://scholar.google.com/citations?user=YmTQqPIAAAAJ&hl=en" target="_blank" aria-label="Google Scholar">
          <i class="fa-solid fa-graduation-cap"></i>
        </a>
      </div>
    </div>
  </section>

  <section id="about-me" class="about-me section">
    <div class="about-me-bg"></div>
    <div class="section-inner">
      <h2 class="section-title">About Me</h2>
      <p class="section-subtitle">
        Student, programmer, and avid researcher in the fields of computer science, molecular biology and robotics.
      </p>
      <div class="about-me-container">
        <div class="about-me-text">
          <p>
            Hi! I'm Abhirama Sonny, a student at Allen High School. I intend to
            major in Computer Science & Molecular Biology, and I have
            experience programming with Python in machine learning and front and
            back-end web development. I am also interested in Biology and seek
            research opportunities or internships in machine learning in these
            fields.
          </p>

          <p>
            I am currently preparing for the Texas Science and Engineering Fair
            (TXSEF), FTC Robotics, and the USACO and USABO Olympiads. In my free
            time, I enjoy biking, playing chess, typing, coding websites :) and working on ML
            projects. I have a strong interest in scientific research and
            dedicate much of my free time to researching various topics and fields.
          </p>
        </div>

        <div class="about-highlight">
          <h3 class="highlight-title">My Areas of Interest</h3>
          <p class="highlight-text">
            Machine Learning, Computational Biology, Robotics, Software Engineering, Data Science, Quantitative trading, Cybersecurity 
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="activities" class="activities section">
    <div class="section-inner">
      <h2 class="section-title">Activities</h2>
      <p class="section-subtitle">
        Diverse experiences shaping my growth as a student, programmer, and leader.
      </p>

      <div class="activities-grid">
        <div class="activity-card">
          <h3 class="activity-title">Programmer - First Tech Challenge</h3>
          <span class="activity-period">Aug '24 - Present</span>
          <div class="activity-description">
            <p>
              FIRST is a global nonprofit organization that helps young people
              learn STEM skills through robotics. I am currently a programmer on
              the FTC team 7172 Technical Difficulties.
            </p>
            <p class="activity-item">
              Developed 5-1 autonomous program, and multiple Teleop enhancements
            </p>
            <p class="activity-item">
              Interviewed Apple Employee regarding the future of Machine Learning
            </p>
            <p class="activity-item">
              Advanced to the First World Championship this April
            </p>
          </div>
        </div>

        <div class="activity-card">
          <h3 class="activity-title">Board Member - ICI</h3>
          <span class="activity-period">Nov '23 - Present</span>
          <div class="activity-description">
            <p>
              Inclusive Computing Initiative (ICI) is a 501(c)(3) Non-profit
              organization centered around teaching Computer Science to children
              with special needs.
            </p>
            <p class="activity-item">
              Facilitated the introduction of over 20 new members via social media
            </p>
            <p class="activity-item">
              Increased organization outreach throughout the US and internationally
            </p>
            <p class="activity-item">
              Developed the organization website, boosting marketing outreach
            </p>
          </div>
        </div>

        <div class="activity-card">
          <h3 class="activity-title">UI/UX Designer - VipraVrinda</h3>
          <span class="activity-period">Nov '24 - Present</span>
          <div class="activity-description">
            <p>
              VipraVrinda is a non-profit organization that unites the Kannada
              Brahmin community in North America to preserve culture and foster
              connections.
            </p>
            <p class="activity-item">
              Designed and developed a responsive website for 200+ members
            </p>
            <p class="activity-item">
              Collaborated with leadership to align technological solutions
            </p>
          </div>
        </div>

        <div class="activity-card">
          <h3 class="activity-title">Lecturer/Mentor - Allen Aspire</h3>
          <span class="activity-period">Oct '23 - Present</span>
          <div class="activity-description">
            <p>
              Allen Aspire is an outreach program designed to help local middle
              schoolers develop STEM skills in prep for TMSCA competitions.
            </p>
            <p class="activity-item">
              Designed lesson plans for all four contest areas
            </p>
            <p class="activity-item">
              Gave lectures to over 150 middle school students
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="honors" class="honors section">
    <div class="section-inner">
      <h2 class="section-title">Honors &amp; Awards</h2>
      <p class="section-subtitle">
        Recognition and achievements in competitive academic fields.
      </p>

      <div class="honors-grid">
        <div class="honor-card">
          <h3 class="honor-title">USABO 4th Place</h3>
          <span class="honor-date">Feb '25</span>
          <p class="honor-description">
            I achieved a score of 39/50 on the USA Biology Olympiad's Open
            Exam, qualifying for the Semifinal examination and placing me at
            4th/5095 in the US.
          </p>
        </div>

        <div class="honor-card">
          <h3 class="honor-title">USACO Gold</h3>
          <span class="honor-date">Feb '25</span>
          <p class="honor-description">
            Promoted to the USA Computing Olympiad's Gold Division in the
            February 2025 Contest.
          </p>
        </div>

        <div class="honor-card">
          <h3 class="honor-title">DRSEF 2nd Place</h3>
          <span class="honor-date">Feb '25</span>
          <p class="honor-description">
            Qualified for the Texas Science and Engineering Fair through Dallas Science
            and Engineering Fair for my project: Deep Learning Classification and Analysis
            of Standard Heart Views in Ultrasound Imaging for Enhanced Cardiac Diagnosis.
          </p>
        </div>
        
        <div class="honor-card">
          <h3 class="honor-title">UNT/Wipro Conference 2nd Place</h3>
          <span class="honor-date">Aug '23</span>
          <p class="honor-description">
            2nd Place at the Great Scientist Soiree for my work on HealthBuddy: a sensor based device, paired with ML algorithms to detect arrhythmia through a pendant on a necklace.
          </p>
          <a href="https://www.untdallas.edu/news/wipro_science_soiree.php#:~:text=The%20ninth%2Dgrade,used%20in%20watches." target="_blank">Article Link</a> 
        </div>
      </div>
    </div>
  </section>

  <section id="projects" class="projects section">
    <div class="section-inner">
      <h2 class="section-title">Projects</h2>
      <p class="section-subtitle">
        Exploring the intersection of technology and biology through innovative solutions.
      </p>

      <div class="projects-grid">
        <div class="project-card">
          <div class="project-image">
            <img src="/images/nn.png" alt="Java Neural Network" />
          </div>
          <div class="project-content">
            <h3 class="project-title">Java Neural Network</h3>
            <p class="project-description">
              I designed and implemented a neural network from scratch in Java,
              utilizing linear algebra, multithreading, and object-oriented
              programming for efficient computation and scalability.
            </p>
            <div class="project-actions">
              <a href="https://github.com/abhiramasonny/JavaNeuralNetworkFromScratch" target="_blank" class="btn">View project</a>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img src="/images/osf.png" alt="Multi-Modal Few-Shot Learning Diagnosis Framework" />
          </div>
          <div class="project-content">
            <h3 class="project-title">
A Novel Multi-Modal Few-Shot Learning Approach for Diagnosing Cantú Syndrome</h3>
            <p class="project-description">
              I designed a few-shot learning framework for diagnosing ultra-rare
              diseases, employing an attention mechanism paired with two layers of
              training to overcome low sample sizes.
            </p>
            <div class="project-actions">
              <a href="https://osf.io/preprints/osf/bswd5" target="_blank" class="btn">Read paper</a>
            </div>
          </div>
        </div>

        <div class="project-card">
          <div class="project-image">
            <img src="/images/jaithon.png" alt="Jaithon" />
          </div>
          <div class="project-content">
            <h3 class="project-title">Jaithon</h3>
            <p class="project-description">
              I developed a simplified programming language based on Python for
              educating elementary school students, featuring bootstrapping, garbage
              collection, and a parser/lexer system.
            </p>
            <div class="project-actions">
              <a href="https://github.com/abhiramasonny/Jaithon" target="_blank" class="btn">View on GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="contact section">
    <div class="section-inner">
      <h2 class="section-title">Contact Me</h2>
      <p class="contact-description">Feel free to reach out for collaboration, questions, or opportunities.</p>

      <div class="contact-container">
        <div class="contact-grid">
          <a href="mailto:abhirama.sonny@gmail.com" class="contact-item">
            <div class="contact-icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <span class="contact-label">Email</span>
          </a>

          <a href="https://www.linkedin.com/in/abhiramasonny/" target="_blank" class="contact-item">
            <div class="contact-icon">
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <span class="contact-label">LinkedIn</span>
          </a>

          <a href="https://github.com/abhiramasonny" target="_blank" class="contact-item">
            <div class="contact-icon">
              <i class="fa-brands fa-github"></i>
            </div>
            <span class="contact-label">GitHub</span>
          </a>

          <a href="https://scholar.google.com/citations?user=YmTQqPIAAAAJ&hl=en" target="_blank" class="contact-item">
            <div class="contact-icon">
              <i class="fa-solid fa-graduation-cap"></i>
            </div>
            <span class="contact-label">Scholar</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="section-inner">
      <ul class="footer-nav">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about-me">About</a></li>
        <li><a href="#activities">Activities</a></li>
        <li><a href="#honors">Honors</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <p class="copyright">© ${new Date().getFullYear()} Abhirama Sonny. All rights reserved.</p>
    </div>
  </footer>
`;
