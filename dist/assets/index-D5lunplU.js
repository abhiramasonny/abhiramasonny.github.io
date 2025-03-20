(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function r(){const s=document.getElementById("theme-toggle"),e=window.matchMedia("(prefers-color-scheme: dark)"),t=localStorage.getItem("theme")||(e.matches?"dark":"light");if(document.documentElement.setAttribute("data-theme",t),s){const n=s.querySelector("i");n&&(n.className=t==="dark"?"fa-solid fa-sun":"fa-solid fa-moon")}s==null||s.addEventListener("click",()=>{const i=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",i),localStorage.setItem("theme",i);const a=s.querySelector("i");a&&(a.className=i==="dark"?"fa-solid fa-sun":"fa-solid fa-moon")})}function l(){const s=document.querySelector("#navbar ul"),e=document.createElement("button");e.id="menu-toggle",e.innerHTML='<i class="fa-solid fa-bars"></i>',e.setAttribute("aria-label","Toggle navigation menu");const t=()=>{var i;if(window.innerWidth<=768)document.getElementById("menu-toggle")||(i=document.getElementById("navbar"))==null||i.insertBefore(e,document.getElementById("theme-toggle"));else{const a=document.getElementById("menu-toggle");a&&a.remove(),s==null||s.classList.remove("active")}};t(),window.addEventListener("resize",t),e.addEventListener("click",()=>{s==null||s.classList.toggle("active");const i=e.querySelector("i");i&&(s!=null&&s.classList.contains("active")?i.className="fa-solid fa-xmark":i.className="fa-solid fa-bars")}),document.querySelectorAll("#navbar ul li a").forEach(i=>{i.addEventListener("click",()=>{if(window.innerWidth<=768){s==null||s.classList.remove("active");const a=e.querySelector("i");a&&(a.className="fa-solid fa-bars")}})})}document.addEventListener("DOMContentLoaded",()=>{r(),l()});document.querySelector("#root").innerHTML=`
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
        <a href="#" class="btn">Download Resume</a>
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
            Machine Learning, Computational Biology, Robotics, Software Engineering, Data Science
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
              Gave lectures to over 150 middle school students weekly
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
`;class d{constructor(e){this.elements=document.querySelectorAll(e),this.init()}init(){this.elements.forEach(e=>{const t=document.createElement("span");t.classList.add("link-underline"),e.appendChild(t),e.addEventListener("mouseenter",()=>this.handleMouseEnter(e,t)),e.addEventListener("mouseleave",()=>this.handleMouseLeave(e,t))}),this.addCSS()}handleMouseEnter(e,t){t.style.transform="scaleX(1)",t.style.transformOrigin="left"}handleMouseLeave(e,t){t.style.transform="scaleX(0)",t.style.transformOrigin="right"}addCSS(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class h{constructor(e,t=.05){this.elements=document.querySelectorAll(e),this.factor=t,this.init()}init(){window.addEventListener("scroll",this.handleScroll.bind(this)),this.handleScroll()}handleScroll(){const e=window.scrollY;this.elements.forEach(t=>{const n=t.dataset.speed||this.factor,i=e*n;t.style.transform=`translate3d(0, ${i}px, 0)`})}}class m{constructor(){this.init()}init(){this.spotlight=document.createElement("div"),this.spotlight.classList.add("cursor-spotlight"),document.body.appendChild(this.spotlight),this.addCSS(),document.addEventListener("mousemove",this.handleMouseMove.bind(this)),document.addEventListener("scroll",this.handleMouseMove.bind(this))}handleMouseMove(e){const t=e.clientX,n=e.clientY;this.spotlight.style.background=`radial-gradient(
      circle at ${t}px ${n}px,
      rgba(255, 255, 255, 0.02) 0%,
      rgba(255, 255, 255, 0) 15%
    )`}addCSS(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class p{constructor(e){this.container=document.querySelector(e),this.container&&(this.images=this.container.querySelectorAll("img"),!(this.images.length<2)&&this.init())}init(){this.minOffset=0,this.maxOffset=-((this.images.length-1)*this.images[0].offsetWidth),this.container.addEventListener("mousemove",this.handleMouseMove.bind(this)),this.addCSS()}handleMouseMove(e){const t=this.container.getBoundingClientRect(),i=(e.clientX-t.left)/t.width,a=this.maxOffset*i*.2;this.images.forEach((o,c)=>{o.style.transform=`translateX(${a*(c/(this.images.length-1))}px)`})}addCSS(){const e=document.createElement("style");e.textContent=`
      ${this.container.className} {
        position: relative;
        overflow: hidden;
      }

      ${this.container.className} img {
        transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
      }
    `,document.head.appendChild(e)}}class u{constructor(e='a[href^="#"]'){this.links=document.querySelectorAll(e),this.init()}init(){this.links.forEach(e=>{e.addEventListener("click",this.handleClick.bind(this))})}handleClick(e){const n=e.currentTarget.getAttribute("href");if(n==="#")return;const i=document.querySelector(n);if(!i)return;e.preventDefault();const a=document.querySelector("#navbar"),o=a?a.offsetHeight:0,c=i.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:c-o-20,behavior:"smooth"})}}class g{constructor(e){this.buttons=document.querySelectorAll(e),this.init()}init(){this.buttons.forEach(e=>{e.style.transition="all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",e.addEventListener("mousedown",this.handleMouseDown.bind(this)),e.addEventListener("mouseup",this.handleMouseUp.bind(this)),e.addEventListener("mouseleave",this.handleMouseUp.bind(this))})}handleMouseDown(e){const t=e.currentTarget;t.style.transform="scale(0.98)",t.style.opacity="0.95"}handleMouseUp(e){const t=e.currentTarget;t.style.transform="scale(1)",t.style.opacity="1"}}class v{constructor(){this.init()}init(){document.querySelectorAll("img").forEach(t=>{t.complete?t.classList.add("loaded"):t.addEventListener("load",()=>{t.classList.add("loaded")})}),setTimeout(()=>{const t=document.querySelector(".hero");t&&t.classList.add("loaded")},300)}}class f{constructor(){this.sections=document.querySelectorAll("section:not(.hero)"),this.init()}init(){const e={threshold:.15,rootMargin:"0px 0px -10% 0px"},t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(i.target.classList.add("section-visible"),t.unobserve(i.target))})},e);this.sections.forEach(n=>{n.classList.add("section-hidden"),t.observe(n)}),this.addCSS()}addCSS(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}document.addEventListener("DOMContentLoaded",()=>{new d("#navbar ul li a, .footer-nav a"),new h("[data-parallax]"),new m,new u,new g(".btn"),new p(".featured-img"),new v,new f});
