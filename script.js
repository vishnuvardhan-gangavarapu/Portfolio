// ================= THEME TOGGLE =================
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
// Default Theme = Dark
if(savedTheme === "light"){
    document.body.classList.remove("dark-theme");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}else{
    document.body.classList.add("dark-theme");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }else{
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// ================= MOBILE MENU =================
const hamburger =
document.getElementById("hamburger");
const navLinks =
document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if(navLinks.classList.contains("active")){
        hamburger.innerHTML =
            '<i class="fas fa-times"></i>';
    }else{
        hamburger.innerHTML =
            '<i class="fas fa-bars"></i>';
    }
});

// ================= ABOUT MODAL =================
function openAboutModal(){
    document.getElementById(
        "aboutModal"
    ).style.display = "flex";
}
function closeAboutModal(){
    document.getElementById(
        "aboutModal"
    ).style.display = "none";
}

// ================= CERTIFICATE MODAL =================
function openCertificate(imageSrc){
    document.getElementById(
        "certificateImage"
    ).src = imageSrc;
    document.getElementById(
        "certificateModal"
    ).style.display = "flex";
}
function closeCertificate(){
    document.getElementById(
        "certificateModal"
    ).style.display = "none";
}

// ================= CLOSE MODALS OUTSIDE =================
window.addEventListener("click", (e) => {
    const aboutModal =
        document.getElementById("aboutModal");
    const certificateModal =
        document.getElementById("certificateModal");
    if(e.target === aboutModal){
        aboutModal.style.display = "none";
    }
    if(e.target === certificateModal){
        certificateModal.style.display = "none";
    }
});

// ================= SMOOTH SCROLL =================
document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        const target =
        document.querySelector(
            this.getAttribute("href")
        );
        target.scrollIntoView({
            behavior:"smooth"
        });
        navLinks.classList.remove("active");
        hamburger.innerHTML =
        '<i class="fas fa-bars"></i>';
    });
});

// ================= SCROLL REVEAL =================
const revealElements =
document.querySelectorAll(
    ".about-card, \
     .skill-card, \
     .timeline-content, \
     .timeline-box, \
     .project-card, \
     .certificate-card, \
     .contact-left, \
     .contact-right"
);
function revealOnScroll(){
    revealElements.forEach(el => {
        const windowHeight =
        window.innerHeight;
        const revealTop =
        el.getBoundingClientRect().top;
        if(revealTop < windowHeight - 100){
            el.classList.add("show");
        }
    });
}
window.addEventListener(
    "scroll",
    revealOnScroll
);
revealOnScroll();

// ================= CUSTOM CURSOR =================
const cursor =
document.querySelector(".cursor");
document.addEventListener(
    "mousemove",
    (e) => {
        cursor.style.left =
        e.clientX + "px";
        cursor.style.top =
        e.clientY + "px";
    }
);

// ACTIVE NAV LINK
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop =
        section.offsetTop - 150;
        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        if(
            link.getAttribute("href")
            === "#" + current
        ){
            link.classList.add("active");
        }
    });
});

// ================= TITLE REVEAL =================
const titles = document.querySelectorAll(".reveal-title");

function revealTitles(){
    titles.forEach(title => {
        const titleTop =
        title.getBoundingClientRect().top;
        const screenHeight =
        window.innerHeight;
        if(titleTop < screenHeight - 100){
            title.classList.add(
                "show-title"
            );
        }
    });
}

window.addEventListener(
    "scroll",
    revealTitles
);
revealTitles();