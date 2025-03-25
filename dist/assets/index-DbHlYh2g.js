(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();function c(){const s=document.getElementById("theme-toggle"),e=window.matchMedia("(prefers-color-scheme: dark)"),t=localStorage.getItem("theme")||(e.matches?"dark":"light");if(document.documentElement.setAttribute("data-theme",t),s){const i=s.querySelector("i");i&&(i.className=t==="dark"?"fa-solid fa-sun":"fa-solid fa-moon")}s==null||s.addEventListener("click",()=>{const n=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",n),localStorage.setItem("theme",n);const o=s.querySelector("i");o&&(o.className=n==="dark"?"fa-solid fa-sun":"fa-solid fa-moon")})}function l(){const s=document.querySelector("#navbar ul"),e=document.createElement("button");e.id="menu-toggle",e.innerHTML='<i class="fa-solid fa-bars"></i>',e.setAttribute("aria-label","Toggle navigation menu");const t=()=>{var n;if(window.innerWidth<=768)document.getElementById("menu-toggle")||(n=document.getElementById("navbar"))==null||n.insertBefore(e,document.getElementById("theme-toggle"));else{const o=document.getElementById("menu-toggle");o&&o.remove(),s==null||s.classList.remove("active")}};t(),window.addEventListener("resize",t),e.addEventListener("click",()=>{s==null||s.classList.toggle("active");const n=e.querySelector("i");n&&(s!=null&&s.classList.contains("active")?n.className="fa-solid fa-xmark":n.className="fa-solid fa-bars")}),document.querySelectorAll("#navbar ul li a").forEach(n=>{n.addEventListener("click",()=>{if(window.innerWidth<=768){s==null||s.classList.remove("active");const o=e.querySelector("i");o&&(o.className="fa-solid fa-bars")}})})}document.addEventListener("DOMContentLoaded",()=>{c(),l()});class d{constructor(e){this.elements=document.querySelectorAll(e),this.init()}init(){this.elements.forEach(e=>{const t=document.createElement("span");t.classList.add("link-underline"),e.appendChild(t),e.addEventListener("mouseenter",()=>this.handleMouseEnter(e,t)),e.addEventListener("mouseleave",()=>this.handleMouseLeave(e,t))}),this.addCSS()}handleMouseEnter(e,t){t.style.transform="scaleX(1)",t.style.transformOrigin="left"}handleMouseLeave(e,t){t.style.transform="scaleX(0)",t.style.transformOrigin="right"}addCSS(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}class u{constructor(e,t=.05){this.elements=document.querySelectorAll(e),this.factor=t,this.init()}init(){window.addEventListener("scroll",this.handleScroll.bind(this)),this.handleScroll()}handleScroll(){const e=window.scrollY;this.elements.forEach(t=>{const i=t.dataset.speed||this.factor,n=e*i;t.style.transform=`translate3d(0, ${n}px, 0)`})}}class h{constructor(){this.init()}init(){this.spotlight=document.createElement("div"),this.spotlight.classList.add("cursor-spotlight"),document.body.appendChild(this.spotlight),this.addCSS(),document.addEventListener("mousemove",this.handleMouseMove.bind(this)),document.addEventListener("scroll",this.handleMouseMove.bind(this))}handleMouseMove(e){const t=e.clientX,i=e.clientY;this.spotlight.style.background=`radial-gradient(
      circle at ${t}px ${i}px,
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
    `,document.head.appendChild(e)}}class m{constructor(e){this.container=document.querySelector(e),this.container&&(this.images=this.container.querySelectorAll("img"),!(this.images.length<2)&&this.init())}init(){this.minOffset=0,this.maxOffset=-((this.images.length-1)*this.images[0].offsetWidth),this.container.addEventListener("mousemove",this.handleMouseMove.bind(this)),this.addCSS()}handleMouseMove(e){const t=this.container.getBoundingClientRect(),n=(e.clientX-t.left)/t.width,o=this.maxOffset*n*.2;this.images.forEach((r,a)=>{r.style.transform=`translateX(${o*(a/(this.images.length-1))}px)`})}addCSS(){const e=document.createElement("style");e.textContent=`
      ${this.container.className} {
        position: relative;
        overflow: hidden;
      }

      ${this.container.className} img {
        transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
      }
    `,document.head.appendChild(e)}}class f{constructor(e='a[href^="#"]'){this.links=document.querySelectorAll(e),this.init()}init(){this.links.forEach(e=>{e.addEventListener("click",this.handleClick.bind(this))})}handleClick(e){const i=e.currentTarget.getAttribute("href");if(i==="#")return;const n=document.querySelector(i);if(!n)return;e.preventDefault();const o=document.querySelector("#navbar"),r=o?o.offsetHeight:0,a=n.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:a-r-20,behavior:"smooth"})}}class g{constructor(e){this.buttons=document.querySelectorAll(e),this.init()}init(){this.buttons.forEach(e=>{e.style.transition="all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",e.addEventListener("mousedown",this.handleMouseDown.bind(this)),e.addEventListener("mouseup",this.handleMouseUp.bind(this)),e.addEventListener("mouseleave",this.handleMouseUp.bind(this))})}handleMouseDown(e){const t=e.currentTarget;t.style.transform="scale(0.98)",t.style.opacity="0.95"}handleMouseUp(e){const t=e.currentTarget;t.style.transform="scale(1)",t.style.opacity="1"}}class p{constructor(){this.init()}init(){document.querySelectorAll("img").forEach(t=>{t.complete?t.classList.add("loaded"):t.addEventListener("load",()=>{t.classList.add("loaded")})}),setTimeout(()=>{const t=document.querySelector(".hero");t&&t.classList.add("loaded")},300)}}class y{constructor(){this.sections=document.querySelectorAll("section:not(.hero)"),this.init()}init(){const e={threshold:.15,rootMargin:"0px 0px -10% 0px"},t=new IntersectionObserver(i=>{i.forEach(n=>{n.isIntersecting&&(n.target.classList.add("section-visible"),t.unobserve(n.target))})},e);this.sections.forEach(i=>{i.classList.add("section-hidden"),t.observe(i)}),this.addCSS()}addCSS(){const e=document.createElement("style");e.textContent=`
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
    `,document.head.appendChild(e)}}document.addEventListener("DOMContentLoaded",()=>{new d("#navbar ul li a, .footer-nav a"),new u("[data-parallax]"),new h,new f,new g(".btn"),new m(".featured-img"),new p,new y});
