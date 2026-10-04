/* =========================================
   LOGICĂ ȘI FUNCȚIONALITATE - SCRIPT.JS
   ========================================= */

function showPage(pageId) {
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => page.classList.remove('active'));

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }

    navLinks.forEach(link => {
        const onclick = link.getAttribute('onclick') || '';
        if (onclick.includes(pageId)) {
            link.classList.add('active');
        }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleFormSubmit(event) {
    event.preventDefault();
    alert('Vă mulțumim! Solicitarea dumneavoastră a fost trimisă cu succes. Echipa VetCare vă va contacta telefonic pentru confirmare.');
    event.target.reset();
}

const revealElements = document.querySelectorAll('.card-modern, .alert-box, .stat-card, .page-header-banner, .form-card, .info-card-custom');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach(element => {
        element.classList.add('reveal');
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach(element => element.classList.add('is-visible'));
}

const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}